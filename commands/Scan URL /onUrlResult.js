/*CMD
  command: onUrlResult
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

function formatReport(stats){
  return "🟥 Malicious: " + (stats.malicious || 0) + "\n" +
         "🟧 Suspicious: " + (stats.suspicious || 0) + "\n" +
         "🟩 Harmless: " + (stats.harmless || 0) + "\n" +
         "⚪ Undetected: " + (stats.undetected || 0);
}

let data = JSON.parse(content);
if (data && data.data && data.data.attributes && data.data.attributes.stats) {
  let stats = data.data.attributes.stats;
  Api.sendMessage({
    text: "✅ *VirusTotal URL Report*\n\n" + formatReport(stats),
    parse_mode: "markdown",
    reply_markup: { inline_keyboard: [[{ text: "🔙 Back", callback_data: "/start" }]] }
  });
} else {
  Bot.sendMessage("⚠️ Report not ready. Try again.");
}

