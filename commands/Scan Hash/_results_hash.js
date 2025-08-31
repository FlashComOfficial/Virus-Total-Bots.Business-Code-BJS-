/*CMD
  command: /results_hash
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Scan Hash

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

let hash = message;
if (!hash) {
  Bot.sendMessage("❌ Invalid input. Send me the has again.");
  Bot.runCommand("/results_hash");
  return;
}

let apiKey = Bot.getProperty("vt_api_key");
if (!apiKey) return Bot.sendMessage("⚠️ API key not set. Use /setapikey");

HTTP.get({
  url: "https://www.virustotal.com/api/v3/files/" + encodeURIComponent(hash),
  headers: { "x-apikey": apiKey },
  success: "onHashResult",
  error: "onError"
});

