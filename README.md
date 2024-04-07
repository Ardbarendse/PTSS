This project is for digitising the tests of fire pumps. It takes 4 values from a loop current input 4-20mA. These values represent NP flow and pressure, and HP flow and pressure.
The values are then published to a website on a wifi hotspot where they can be picked up for logging the test values.

The software is written in Visual Studio with Platformio.

Hardware is a unit based on an ESP32 processor and Adafruit_ADS1115 ADC.

A developermode is added where it generates data as opposed to reading it from the ADC. This is meant for developing connections and frontend applications.

SW1 is used for calibrating the "zero" values of the sensors. This will set all current values to the non-volatile (NVS) memory of the interface, and restart.
SW2 is a reset button and restarts the interface.
