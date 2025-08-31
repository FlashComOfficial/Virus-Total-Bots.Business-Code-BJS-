/*CMD
  command: /check_url
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

let scanId = Bot.getProperty("lastUrlScan:" + user.telegramid);
if (!scanId) return Bot.sendMessage("❌ No URL scan found.");
var values = AdminPanel.getPanelValues("virustotal_settings");
let apiKey = values.vt_api_key;

if (!apiKey) {
  Bot.sendMessage("⚠️ API key not set. Go to Admin Panel to configure it.");
  return;
}
HTTP.get({
  url: "https://www.virustotal.com/api/v3/analyses/" + scanId,
  headers: { "x-apikey": apiKey },
  success: "onUrlResult",
  error: "onError"
});

