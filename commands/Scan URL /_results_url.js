/*CMD
  command: /results_url
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Scan URL 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

/* 
  🦠 VirusTotal Scanner Bot
  Read credits and for more codes/bots anf for viewing & testing apis visit:
  👉 https://getmart.iblogger.org
  
  
  For this code updates further join our channel
  https://t.me/FlashComBJS
*/
let url = message;

// Validate
if (!url || !url.match(/^https?:\/\//i)) {
  Bot.sendMessage("⚠️ Please send a valid URL starting with http:// or https://");
  return;
}


Bot.setProperty("lastUrl:" + user.telegramid, url, "string");

var values = AdminPanel.getPanelValues("virustotal_settings");
let apiKey = values.vt_api_key;

if (!apiKey) {
  Bot.sendMessage("⚠️ API key not set. Go to Admin Panel to configure it.");
  return;
}

let msg = Api.sendMessage({
  chat_id: chat.chatid,
  text: "⏳ Submitting URL to VirusTotal... please wait a few seconds."
});


HTTP.post({
  url: "https://www.virustotal.com/api/v3/urls",
  headers: { 
    "x-apikey": apiKey,
    "Content-Type": "application/x-www-form-urlencoded"
  },
  body: "url=" + encodeURIComponent(url),
  success: "onUrlSubmit",
  error: "onError"
});

if (msg) {
  Bot.setProperty("waitingMsg:" + user.telegramid, msg.message_id);
}

