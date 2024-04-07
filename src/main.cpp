#include <Arduino.h>
#include <WiFi.h>
#include <ArduinoJson.h>
#include <ESPAsyncWebServer.h>
#include <SPIFFS.h>
#include <Adafruit_ADS1X15.h>
#include <SPI.h>
#include <Preferences.h>

// WiFi credentials
// ---------------------------------------------------------------------------
const char *ssid = "Pomptestkar";
const char *password =  "PTSS1234";
const int dns_port = 53;
const int http_port = 80;
const int ws_port = 1337;
IPAddress apIP(192,168,4,1);

// WEBserver credentials
// ---------------------------------------------------------------------------
TaskHandle_t Receive, Send;

AsyncWebServer server(http_port);
AsyncWebSocket ws("/ws");
AsyncWebSocketClient* client;
AsyncEventSource events("/events");

// Project variables
// -----------------------------------------------------------------------------

bool DeveloperMode = true;              //true gives simulated values
int SampleRate = 1000;                  //updates in milliseconds
const int CalibrateButton = 39;         //pushbutton to calibrate sensorvalues
const int ResetButton = 36;
bool interruptsSet;
int WifiInitDelay = 10000;              //WifiInit delay when no connection 

Preferences CalibrationStorage;

int NPFlowSensor = 0;                   //sensor input number ()
int NPFlowMaxValue = 10000;             //maximum sensor value
int NPFlowMinValue = 0;                 //minimum sensor value
int NPFlowZeroCount;              //count value at 4mA
int NPFLowMaxCount = 10631;             //count value at 20mA

int NPPressureSensor = 1;
int NPPressureMaxValue = 60;
int NPPressureMinValue = 0;
int NPPressureZeroCount;
int NPPressureMaxCount = 10661;

int HPFlowSensor = 2;
int HPFlowMaxValue = 600;
int HPFlowMinValue = 0;
int HPFlowZeroCount;
int HPFLowMaxCount = 10645;

int HPPressureSensor = 3;
int HPPressureMaxValue = 60;
int HPPressureMinValue = 0;
int HPPressureZeroCount;
int HPPressureMaxCount = 10658;

double NPFlowScale;
double NPPressureScale;
double HPFlowScale;
double HPPressureScale;
char JSONValue[10];

Adafruit_ADS1115 ads;
int16_t NPFlowCount, NPPressureCount, HPFlowCount, HPPressureCount;

// put function declarations here:
// ------------------------------------------------------------------------------

// Connecting to the WiFi network
void initWiFi() {
  WiFi.softAP(ssid, password);
  delay(2000);
  WiFi.softAPConfig(apIP,apIP,IPAddress(255,255,255,0));
  Serial.println();
  Serial.println("AP running");
  Serial.print("My IP address: ");
  Serial.println(WiFi.softAPIP());
}

// SPIFFS initialization
void initSPIFFS() {
  while (!SPIFFS.begin())delay(1000);
  Serial.println("SPIFF Init done.");
}

void onRootRequest(AsyncWebServerRequest *request) {
  request->send(SPIFFS, "/index.html", "text/html", false);
}

void initWebServer() {
    server.on("/", onRootRequest);
    server.serveStatic("/", SPIFFS, "/");
    server.begin();
    // Serial.println("Wid");
}

void handleWebSocketMessage(void *arg, uint8_t *data, size_t len) {
  AwsFrameInfo *info = (AwsFrameInfo*)arg;
  if (info->final && info->index == 0 && info->len == len && info->opcode == WS_TEXT) {
    JsonDocument jsonw2c;
    DeserializationError err = deserializeJson(jsonw2c, data);
    if (err) {
      Serial.print(F("deserializeJson() failed with code "));
      Serial.println(err.c_str());
      return;
    }
  }
}

void onEvent(AsyncWebSocket       *server,
             AsyncWebSocketClient *client,
             AwsEventType          type,
             void                 *arg,
             uint8_t              *data,
             size_t                len) {

    switch (type) {
        case WS_EVT_CONNECT:
            Serial.printf("WebSocket client #%u connected from %s\n", client->id(), client->remoteIP().toString().c_str());
            break;
        case WS_EVT_DISCONNECT:
            Serial.printf("WebSocket client #%u disconnected\n", client->id());
            break;
        case WS_EVT_DATA:
            handleWebSocketMessage(arg, data, len);
            break; 
        case WS_EVT_PONG:
        case WS_EVT_ERROR:
            break;
    }
}

void initWebSocket() {
    ws.onEvent(onEvent);
    server.addHandler(&ws);
}

void adc_init(void)
{
  Wire.begin(16, 4, 400000L); // Start de I2C bus met SDA op pin 16 en SCL op pin 4
  if (!ads.begin(ADS1X15_ADDRESS, &Wire)) // Probeer de ADC te initialiseren
  {
    Serial.println("Failed to initialize ADS."); // Foutmelding indien mislukt
    delay(1000); // Korte pauze
    esp_restart(); // Herstart de ESP32
    while (1); // Oneindige lus indien herstart mislukt
  }
}

// Read analog values
String ReadValue(int sensor, double scale, int offset, int MinCount){
  char JSONValue[10];
  int16_t RawValue;
  if (DeveloperMode){
    RawValue = int(6000 + (3500 * cos(sensor + millis()/float(1000))));
    }
  else{
    RawValue = ads.readADC_SingleEnded(sensor);
  }
  int16_t NetValue = RawValue - MinCount;
  if (NetValue > -10){
    double Value = offset + (scale * NetValue);
    dtostrf (Value, 7, 2, JSONValue);
    Serial.print(sensor);
    Serial.print(" Sensor: ");
    Serial.println(RawValue);
    return JSONValue;
  }
  else {return "ERROR";}
}

double CalculateScaling (int minval, int maxval, int mincount, int maxcount){
  double Scale = (maxval - minval) / (double)(maxcount - mincount);
  Serial.println (Scale);
  return Scale;
}

void readCalibrationValues() {
  CalibrationStorage.begin("CalibrationValues", true);
  NPFlowZeroCount = CalibrationStorage.getShort("NPFlowZeroCount", 2100);
  NPPressureZeroCount = CalibrationStorage.getShort("NPPressureZeroCount", 2100);
  HPFlowZeroCount = CalibrationStorage.getShort("HPFlowZeroCount", 2100);
  HPPressureZeroCount = CalibrationStorage.getShort("HPPressureZeroCount", 2100);
  CalibrationStorage.end();
}

void Calibration() {
  CalibrationStorage.begin("CalibrationValues", false);
  Serial.println("calibration button pushed");
  CalibrationStorage.putShort("NPFlowZeroCount", ads.readADC_SingleEnded(NPFlowSensor));
  CalibrationStorage.putShort("NPPressureZeroCount", ads.readADC_SingleEnded(NPPressureSensor));
  CalibrationStorage.putShort("HPFlowZeroCount", ads.readADC_SingleEnded(HPFlowSensor));
  CalibrationStorage.putShort("HPPressureZeroCount", ads.readADC_SingleEnded(HPPressureSensor));
  delay(1000);
  CalibrationStorage.end();
  delay(1000);
  esp_restart();
}

void ResetButtonPushed() {
  Serial.println("reset button pushed");
  esp_restart();
}

void SetupInterrupts() {
  pinMode(CalibrateButton, INPUT_PULLUP);
  pinMode(ResetButton, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(CalibrateButton), Calibration, RISING);
  attachInterrupt(digitalPinToInterrupt(ResetButton), ResetButtonPushed, RISING);
  interruptsSet = true;
  Serial.println("interrupts are set");
}

void setup() {
  Serial.begin(115200); 
  while (!Serial);

  interruptsSet = false;

  readCalibrationValues();
  initSPIFFS();
  initWiFi();
  initWebSocket();
  initWebServer();

  if (!DeveloperMode)adc_init();

  NPFlowScale = CalculateScaling(NPFlowMinValue, NPFlowMaxValue, NPFlowZeroCount, NPFLowMaxCount);
  NPPressureScale = CalculateScaling(NPPressureMinValue, NPPressureMaxValue, NPPressureZeroCount, NPPressureMaxCount);
  HPFlowScale = CalculateScaling(HPFlowMinValue, HPFlowMaxValue, HPFlowZeroCount, HPFLowMaxCount);
  HPPressureScale = CalculateScaling(HPPressureMinValue, HPPressureMaxValue, HPPressureZeroCount, HPPressureMaxCount);
}

void loop() {
  if (!interruptsSet){
    delay(1000);
    SetupInterrupts();
  };

  while (WiFi.softAPgetStationNum()) {
    Serial.print("Stations connected: ");
    Serial.println(WiFi.softAPgetStationNum());
    
    char buffer[2048];
    JsonDocument jsonc2w;

    jsonc2w ["NPFlow"] = ReadValue(NPFlowSensor, NPFlowScale, NPFlowMinValue, NPFlowZeroCount);
    jsonc2w ["NPPressure"] = ReadValue(NPPressureSensor, NPPressureScale, NPPressureMinValue, NPPressureZeroCount);
    jsonc2w ["HPFlow"] = ReadValue(HPFlowSensor, HPFlowScale, HPFlowMinValue, HPFlowZeroCount);
    jsonc2w ["HPPressure"] = ReadValue(HPPressureSensor, HPPressureScale, HPPressureMinValue, HPPressureZeroCount);
    jsonc2w ["Timestamp"] = millis();

    serializeJson(jsonc2w, buffer);
    Serial.println(buffer);
    ws.textAll(buffer);
    jsonc2w.clear();

    delay (SampleRate);
  };

  Serial.println("initializing WiFi");
  initWiFi();
  delay(WifiInitDelay);
} 