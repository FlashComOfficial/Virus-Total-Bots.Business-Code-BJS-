/*CMD
  command: /checkresult
  help: 
  need_reply: false
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
let analysisId = Bot.getProperty("lastAnalysis:" + user.telegramid);
if (!analysisId) {
  Bot.sendMessage("⚠️ No previous analysis found. Submit a URL first with /scan_url");
  return;
}

var values = AdminPanel.getPanelValues("virustotal_settings");
let apiKey = values.vt_api_key;

let msg = Api.sendMessage({
  chat_id: chat.chatid,
  text: "⏳ Checking your last submitted URL again..."
});


HTTP.get({
  url: "https://www.virustotal.com/api/v3/analyses/" + analysisId,
  headers: { "x-apikey": apiKey },
  success: "onUrlResult",
  error: "onError"
});


if (msg) {
  Bot.setProperty("waitingMsg:" + user.telegramid, msg.message_id);
}

