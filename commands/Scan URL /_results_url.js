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

let text = message;
if (!text) {
  Bot.sendMessage("❌ Invalid input. Send me the url again ?.");
  Bot.runCommand("/results_url");
  return;
}


let lower = text.toLowerCase();

if (!(lower.endsWith(".zip") || lower.endsWith(".txt") || lower.endsWith(".rar") || lower.endsWith(".7z"))) {
  Bot.sendMessage("⚠️ Only direct file links ending with `.zip`, `.txt`, `.rar`, or `.7z` are allowed.\n\nPlease send a valid file URL.");
  Bot.runCommand("/results_url");
  return;
}

Bot.setProperty("lastURL:" + user.telegramid, text, "string");

let apiKey = Bot.getProperty("vt_api_key");
if (!apiKey) return Bot.sendMessage("⚠️ API key not set. Use /setapikey");

HTTP.post({
  url: "https://www.virustotal.com/api/v3/urls",
  headers: { "x-apikey": apiKey, "Content-Type": "application/x-www-form-urlencoded" },
  body: "url=" + encodeURIComponent(text),
  success: "onUrlSubmit",
  error: "onError"
});

