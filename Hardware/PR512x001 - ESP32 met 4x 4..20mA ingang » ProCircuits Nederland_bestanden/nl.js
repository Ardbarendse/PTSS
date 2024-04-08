(function(global){var Language = {};

Language.pluralFormFunction = function (n) {
		if (n === 1) {
			return 'one';
		}

		return 'other';
	};


Language.bubble = Language.bubble || {};

Language.bubble.attention_grabber = {
	"message": "Chat aandachtstrekker"
};


Language.chat = Language.chat || {};

Language.chat.Warning = {
	"message": "Waarschuwing"
};
Language.chat.accept_call = {
	"message": "Accepteren"
};
Language.chat.active = {
	"message": "Actief"
};
Language.chat.agent_profile_image = {
	"message": "Profielafbeelding agent"
};
Language.chat.agent_ringing = {
	"message": "Binnenkomende oproep"
};
Language.chat.all_conversations = {
	"message": "Bekijk alle conversaties"
};
Language.chat.call_end_details = {
	"message": "Begonnen om #startedOn en heeft #duration geduurd",
	"vars": [
		"startedOn",
		"duration"
	]
};
Language.chat.call_error_load = {
	"message": "Kan oproepgegevens niet laden."
};
Language.chat.call_started_on = {
	"message": "Begonnen om #startedOn",
	"vars": [
		"startedOn"
	]
};
Language.chat.chatEnded = {
	"message": "Je chat is beëindigd"
};
Language.chat.chat_icon = {
	"message": "Chat-pictogram"
};
Language.chat.chat_qm = {
	"message": "Chatten?"
};
Language.chat.chat_text = {
	"message": "Chat"
};
Language.chat.close_icon = {
	"message": "Pictogram sluiten"
};
Language.chat.completed_call = {
	"message": "Oproep beëindigd"
};
Language.chat.conversation_ended_on = {
	"message": "Gesprek beëindigd op"
};
Language.chat.decline_call = {
	"message": "Afwijzen"
};
Language.chat.defaultName = {
	"message": "U (wijzig naam)"
};
Language.chat.departmentIsAway = {
	"message": "Afdeling #strongStart #departmentName #strongEnd is op dit moment afwezig.",
	"vars": [
		"departmentName",
		"strongStart",
		"strongEnd"
	]
};
Language.chat.departmentIsOffline = {
	"message": "Afdeling #strongStart #departmentName #strongEnd is momenteel offline. U kunt geholpen worden door een andere afdeling.",
	"vars": [
		"departmentName",
		"strongStart",
		"strongEnd"
	]
};
Language.chat.download = {
	"message": "Download"
};
Language.chat.downloadFile = {
	"message": "Download bestand"
};
Language.chat.dragDropText = {
	"message": "Sleep bestanden hier naartoe om te uploaden"
};
Language.chat.emoji_error_load = {
	"message": "Kan emoji's niet laden"
};
Language.chat.error_title = {
	"message": "Fout"
};
Language.chat.failed = {
	"message": "Mislukt"
};
Language.chat.generalUploadError = {
	"message": "\"#fileName\", Probeer het a. u. b. opnieuw.",
	"vars": [
		"fileName"
	]
};
Language.chat.generalUploadErrorLabel = {
	"message": "Uploaden bestand mislukt"
};
Language.chat.goToLatest = {
	"message": "Ga naar de laatste"
};
Language.chat.hideButton = {
	"message": "Chat verbergen"
};
Language.chat.incoming_call_message = {
	"message": "Inkomende oproep van #name",
	"vars": [
		"name"
	]
};
Language.chat.insert_emoji = {
	"message": "Emoji invoeren"
};
Language.chat.justNow = {
	"message": "zojuist"
};
Language.chat.limit2 = {
	"message": "De maximale bestandsgrootte voor mobiele browsers is 2 MB, upload een kleiner bestand."
};
Language.chat.limit50 = {
	"message": "De maximale bestandsgrootte is 50MB, upload een kleiner bestand."
};
Language.chat.message_not_delivered = {
	"message": "Bericht niet geleverd, klik hier om opnieuw te verzenden."
};
Language.chat.message_too_long = {
	"message": "Bericht mag niet meer dan 5.000 tekens bevatten"
};
Language.chat.missed_agent = {
	"message": "Er wordt niet opgenomen"
};
Language.chat.missed_visitor = {
	"message": "U heeft een gemiste oproep"
};
Language.chat.missed_visitor_messagePreview = {
	"message": "U heeft een gesprek gemist van"
};
Language.chat.mobileName = {
	"message": "Je"
};
Language.chat.newChat = {
	"message": "Begin Nieuwe Chat"
};
Language.chat.newMessages = {
	"message": "Nieuwe berichten"
};
Language.chat.new_conversation = {
	"message": "Nieuw gesprek"
};
Language.chat.notificationTitle = {
	"message": "melding"
};
Language.chat.ongoing_call = {
	"message": "Uitgaande oproep"
};
Language.chat.past = {
	"message": "#time geleden",
	"vars": [
		"time"
	]
};
Language.chat.pasted_image_title = {
	"message": "Geplakte afbeelding op #dateTime",
	"vars": [
		"dateTime"
	]
};
Language.chat.profile_prechat_text = {
	"message": "Vul onderstaand formulier in om met me te kunnen gaan chatten."
};
Language.chat.rejected_call = {
	"message": "Oproep geweigerd"
};
Language.chat.remove_rate = {
	"message": "Je hebt je waardering voor dit gesprek verwijderd"
};
Language.chat.resend = {
	"message": "Opnieuw sturen"
};
Language.chat.retry = {
	"message": "Probeer opnieuw."
};
Language.chat.return_to_live_chat = {
	"message": "Keer terug naar de online chat"
};
Language.chat.say_something = {
	"message": "Schrijf een antwoord.."
};
Language.chat.screen_share_error = {
	"message": "Scherm delen is niet beschikbaar."
};
Language.chat.send_mail = {
	"message": "Mail Sturen"
};
Language.chat.sent_file = {
	"message": "Bestand verstuurd"
};
Language.chat.sent_form = {
	"message": "Sent a form"
};
Language.chat.sent_suggested_message = {
	"message": "Sent a suggested message"
};
Language.chat.today_time = {
	"message": "Vandaag, #time",
	"vars": [
		"time"
	]
};
Language.chat.tryAgain = {
	"message": "Probeer opnieuw."
};
Language.chat.unanswered = {
	"message": "Onbeantwoord"
};
Language.chat.uploading = {
	"message": "Uploading..."
};
Language.chat.video_call_error = {
	"message": "Video-oproep is niet beschikbaar."
};
Language.chat.visitor_ringing = {
	"message": "Bellen..."
};
Language.chat.voice_call_error = {
	"message": "Telefoongesprek is niet beschikbaar."
};
Language.chat.we_are_live = {
	"message": "Wij zijn live en klaar om nu met je te chatten. Zeg iets om een live chat te beginnen."
};


Language.days = Language.days || {};

Language.days['0'] = {
	"message": "Zondag"
};
Language.days['1'] = {
	"message": "Maandag"
};
Language.days['2'] = {
	"message": "Dinsdag"
};
Language.days['3'] = {
	"message": "Woensdag"
};
Language.days['4'] = {
	"message": "Donderdag"
};
Language.days['5'] = {
	"message": "Vrijdag"
};
Language.days['6'] = {
	"message": "Zaterdag"
};


Language.form = Language.form || {};

Language.form.CancelButton = {
	"message": "Annuleren"
};
Language.form.CloseButton = {
	"message": "Sluiten"
};
Language.form.DepartmentsErrorMessage = {
	"message": "Afdeling is verplicht."
};
Language.form.DepartmentsPlaceholder = {
	"message": "Selecteer afdeling.."
};
Language.form.EmailErrorMessage = {
	"message": "Ongeldig e-mailadres."
};
Language.form.EmailPlaceholder = {
	"message": "E-mailadres"
};
Language.form.EmailTranscriptFormMessage = {
	"message": "Vul a.u.b. het onderstaande formulier in als u het transcript van dit gesprek in de email wil ontvangen."
};
Language.form.EmailTranscriptSuccess = {
	"message": "E-mailtranscriptieverzoek verzonden."
};
Language.form.EmailTranscriptTo = {
	"message": "E-mailtranscript naar"
};
Language.form.EndChatMessage = {
	"message": "Bedankt voor uw chatgesprek. Heeft u nog een vraag? Aarzel niet om een nieuwe chatsessie te starten. Wil je deze conversatie digitaal bewaren? Vul dan je e-mailadres in om deze te ontvangen."
};
Language.form.EndChatMessage2 = {
	"message": "Bedankt voor het chatten met ons. Voel je vrij om een ​​nieuwe chatsessie te starten."
};
Language.form.EndChatTitle = {
	"message": "Weet u zeker dat u deze chat wilt beëindigen?"
};
Language.form.MessagePlaceholder = {
	"message": "Bericht.."
};
Language.form.NameErrorMessage = {
	"message": "Er moet een naam worden opgegeven."
};
Language.form.NameFormMessage = {
	"message": "Wijzig uw naam, zodat we u de volgende keer kunnen herkennen."
};
Language.form.OfflineFormMessage = {
	"message": "Vul a.u.b. het onderstaande formulier in en wij zullen zo spoedig mogelijk contact met u opnemen."
};
Language.form.OfflineMessageNotSent = {
	"message": "Uw bericht werd niet afgeleverd. Probeer het alstublieft opnieuw"
};
Language.form.OfflineMessageSent = {
	"message": "Uw bericht werd succesvol verzonden!"
};
Language.form.PhoneErrorMessage = {
	"message": "Ongeldig telefoonnummer"
};
Language.form.PreChatFormMessage = {
	"message": "Vul a.u.b. het onderstaande formulier in om te beginnen met chatten met de eerst volgende beschikbare medewerker."
};
Language.form.PreChatFormMessageProfile = {
	"message": "Vul a.u.b. onderstaand formulier in om te beginnen te chatten met mij."
};
Language.form.QuestionPlaceholder = {
	"message": "Vraag.."
};
Language.form.RequiredErrorMessage = {
	"message": "Dit veld is verplicht"
};
Language.form.SaveButton = {
	"message": "Opslaan"
};
Language.form.SendButton = {
	"message": "Verzenden"
};
Language.form.SendMessage = {
	"message": "Verstuur bericht"
};
Language.form.StartChatButton = {
	"message": "Start chat"
};
Language.form.SubmitButton = {
	"message": "Verzenden"
};
Language.form.SubmittedFrom = {
	"message": "Afkomstig van"
};
Language.form.SubmittingProcess = {
	"message": "Versturen"
};
Language.form.TranscriptMessage = {
	"message": "Vul je e-mailadres in om een digitale versie van dit gesprek in je mailbox te ontvangen."
};
Language.form.any = {
	"message": "Elke"
};
Language.form.chatEnded = {
	"message": "Uw chat is beëindigd"
};
Language.form.department = {
	"message": "Afdeling"
};
Language.form.email = {
	"message": "E-mail"
};
Language.form.errorSaving = {
	"message": "Opslaan is niet mogelijk. Probeer het a.u.b. opnieuw"
};
Language.form.message = {
	"message": "Bericht"
};
Language.form.name = {
	"message": "Naam"
};
Language.form.sendAgain = {
	"message": "Opnieuw verzenden"
};
Language.form.visitButton = {
	"message": "Ga naar tawk.to"
};


Language.home = Language.home || {};

Language.home.banner_image = {
	"message": "Bannerafbeelding"
};
Language.home.chat_button = {
	"message": "Nieuw gesprek"
};
Language.home.chat_input = {
	"message": "Typ hier en druk op enter.."
};
Language.home.heading_main = {
	"message": "Hallo 👋"
};
Language.home.heading_sub = {
	"message": "Hulp nodig? Zoek in ons helpcentrum naar antwoorden of begin een gesprek:"
};
Language.home.kb_search = {
	"message": "Zoeken naar antwoorden"
};
Language.home.logo_image = {
	"message": "Logoafbeelding"
};


Language.kb = Language.kb || {};

Language.kb.article_image = {
	"message": "Artikelafbeelding"
};
Language.kb.article_rating = {
	"message": "Was dit artikel behulpzaam?"
};
Language.kb.article_rating_count = {
	"message": "#totalLikes van #totalVotes vond dit artikel leuk",
	"vars": [
		"totalLikes",
		"totalVotes"
	]
};
Language.kb.author_profile_image = {
	"message": "Profielafbeelding auteur"
};
Language.kb.clear_search = {
	"message": "Zoekopdracht wissen"
};
Language.kb.downvote_rating_button = {
	"message": "Nee"
};
Language.kb.help_center = {
	"message": "Help en ondersteuning"
};
Language.kb.negative_rating = {
	"message": "Negatief"
};
Language.kb.positive_rating = {
	"message": "Positief"
};
Language.kb.recent_searches = {
	"message": "Recente zoekopdrachten"
};
Language.kb.search_fail_description = {
	"message": "Gelieve opnieuw te proberen"
};
Language.kb.search_fail_title = {
	"message": "Geen zoekresultaten"
};
Language.kb.search_placeholder = {
	"message": "Zoek naar antwoorden"
};
Language.kb.search_results = {
	"message": "Zoekresultaten"
};
Language.kb.show_all_results = {
	"message": "Toon alle resultaten (#num)",
	"vars": [
		"num"
	]
};
Language.kb.submit_search = {
	"message": "Zoekopdracht verzenden"
};
Language.kb.upvote_rating_button = {
	"message": "Ja"
};
Language.kb.view_full = {
	"message": "Bekijken in kennisbank"
};


Language.menu = Language.menu || {};

Language.menu.add_chat_to_your_website = {
	"message": "Voeg chat toe aan je webpagina"
};
Language.menu.change_name = {
	"message": "Naam wijzigen"
};
Language.menu.email_transcript = {
	"message": "E-mail transcriptie"
};
Language.menu.end_chat_session = {
	"message": "Chat beëindigen"
};
Language.menu.popout_widget = {
	"message": "Widget uitklappen"
};
Language.menu.sound_off = {
	"message": "Geluid Uit"
};
Language.menu.sound_on = {
	"message": "Geluid Aan"
};


Language.months = Language.months || {};

Language.months['0'] = {
	"message": "januari"
};
Language.months['1'] = {
	"message": "februari"
};
Language.months['10'] = {
	"message": "november"
};
Language.months['11'] = {
	"message": "december"
};
Language.months['2'] = {
	"message": "maart"
};
Language.months['3'] = {
	"message": "april"
};
Language.months['4'] = {
	"message": "mei"
};
Language.months['5'] = {
	"message": "juni"
};
Language.months['6'] = {
	"message": "juli"
};
Language.months['7'] = {
	"message": "augustus"
};
Language.months['8'] = {
	"message": "september"
};
Language.months['9'] = {
	"message": "oktober"
};


Language.notifications = Language.notifications || {};

Language.notifications.dismiss_alert = {
	"message": "Melding negeren"
};
Language.notifications.maximum_file_upload_warning = {
	"message": "Sorry, bestandsoverdracht is beperkt tot #limitFileNumber bestanden tegelijk. Probeer de volgende bestanden opnieuw te uploaden:",
	"vars": [
		"limitFileNumber"
	]
};
Language.notifications.maximum_size_upload_warning = {
	"message": "Sorry, bestandsoverdracht is beperkt tot #limitFileSize per bestand. Comprimeer de volgende bestanden en probeer het opnieuw.",
	"vars": [
		"limitFileSize"
	]
};
Language.notifications.reconnecting = {
	"message": "Opnieuw verbinding maken"
};
Language.notifications.retry = {
	"message": "Probeer opnieuw"
};


Language.overlay = Language.overlay || {};

Language.overlay.cookiesOff = {
	"message": "U kunt geen gebruik maken van deze chat omdat de cookie-functionaliteit van je browser is uitgeschakeld. Gelieve het in te schakelen en vernieuw uw browser."
};
Language.overlay.inactive = {
	"message": "Klik hier om de chat opnieuw te beginnen"
};
Language.overlay.maintenance = {
	"message": "Chat is in onderhoud"
};
Language.overlay.tawkContent = {
	"message": "Deze widget wordt mogelijk gemaakt door tawk.to - een gratis communicatie applicatie die website bezoekers monitort en u met ze in contact brengt."
};


Language.rollover = Language.rollover || {};

Language.rollover.back = {
	"message": "Terug"
};
Language.rollover.chatMenu = {
	"message": "Menu"
};
Language.rollover.emailTranscriptOption = {
	"message": "E-mail gesprek"
};
Language.rollover.end = {
	"message": "Chat beëindigen"
};
Language.rollover.knowledgeBase = {
	"message": "kennisbank"
};
Language.rollover.maximize = {
	"message": "Maximaliseren"
};
Language.rollover.minimize = {
	"message": "Minimaliseer"
};
Language.rollover.negativeRating = {
	"message": "Waardeer dit gesprek met -1"
};
Language.rollover.popOut = {
	"message": "Pop-out"
};
Language.rollover.positiveRating = {
	"message": "Waardeer dit gesprek met +1"
};
Language.rollover.rateChat = {
	"message": "Beoordeel deze chat"
};
Language.rollover.resendMessage = {
	"message": "Bericht opnieuw versturen"
};
Language.rollover.resize = {
	"message": "Verander grootte"
};
Language.rollover.screenShare = {
	"message": "Scherm delen"
};
Language.rollover.uploadFile = {
	"message": "Upload bestand"
};
Language.rollover.videoCall = {
	"message": "Video-oproep"
};
Language.rollover.voiceCall = {
	"message": "Telefoongesprek"
};


Language.routes = Language.routes || {};

Language.routes.all_agents = {
	"message": "Alle medewerkers"
};
Language.routes.conversations = {
	"message": "Conversaties"
};
Language.routes.load_more = {
	"message": "Laad meer"
};


Language.status = Language.status || {};

Language.status.away = {
	"message": "Afwezig"
};
Language.status.offline = {
	"message": "Offline"
};
Language.status.online = {
	"message": "Online"
};




Language.chat = Language.chat || {};

Language.chat.hours = {
	"pluralVars": [
		"num"
	],
	"message": {
		"one": "#num uur",
		"other": "#num uren"
	}
};
Language.chat.messageQueuedText = {
	"pluralVars": [
		"t"
	],
	"message": {
		"one": "Geschatte wachttijd is #strongStart #t minuut #strongEnd",
		"other": "Geschatte wachttijd is #strongStart #t minuten #strongEnd"
	},
	"vars": [
		"strongStart",
		"strongEnd"
	]
};
Language.chat.minutes = {
	"pluralVars": [
		"num"
	],
	"message": {
		"one": "#num minuut",
		"other": "#num minuten"
	}
};
Language.chat.newMessage = {
	"pluralVars": [
		"num"
	],
	"message": {
		"one": "#num nieuw bericht",
		"other": "#num nieuwe berichten"
	}
};
Language.chat.seconds = {
	"pluralVars": [
		"num"
	],
	"message": {
		"one": "#num seconde",
		"other": "#num secondes"
	}
};


global.$_Tawk.language = Language;})(window);