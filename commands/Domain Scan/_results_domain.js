/*CMD
  command: /results_domain
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Domain Scan

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
let domain = message;
if (!domain) {
  Bot.sendMessage("❌ Invalid input. Send me the correct domain again.");
  Bot.runCommand("/results_domain");
  return;
}

var values = AdminPanel.getPanelValues("virustotal_settings");
let apiKey = values.vt_api_key;

if (!apiKey) {
  Bot.sendMessage("⚠️ API key not set. Go to Admin Panel to configure it.");
  return;
}

HTTP.get({
  url: "https://www.virustotal.com/api/v3/domains/" + encodeURIComponent(domain),
  headers: { "x-apikey": apiKey },
  success: "onDomainResult",
  error: "onError"
});

