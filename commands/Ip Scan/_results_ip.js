/*CMD
  command: /results_ip
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Ip Scan

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
let ip = message;
if (!ip) {
  Bot.sendMessage("❌ Invalid input. Send me the ip again.");
  Bot.runCommand("/results_ip");
  return;
}

let apiKey = Bot.getProperty("vt_api_key");
if (!apiKey) return Bot.sendMessage("⚠️ API key not set. Use /setapikey");

HTTP.get({
  url: "https://www.virustotal.com/api/v3/ip_addresses/" + encodeURIComponent(ip),
  headers: { "x-apikey": apiKey },
  success: "onIPResult",
  error: "onError"
});

