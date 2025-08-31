/*CMD
  command: onHashResult
  help: 
  need_reply: false
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
let data = JSON.parse(content);
if (data && data.data && data.data.attributes && data.data.attributes.last_analysis_stats) {
  let stats = data.data.attributes.last_analysis_stats;
  Api.sendMessage({
    text: "✅ *VirusTotal Hash Report*\n\n" +
          "🟥 Malicious: " + (stats.malicious || 0) + "\n" +
          "🟧 Suspicious: " + (stats.suspicious || 0) + "\n" +
          "🟩 Harmless: " + (stats.harmless || 0) + "\n" +
          "⚪ Undetected: " + (stats.undetected || 0),
    parse_mode: "markdown",
    reply_markup: { inline_keyboard: [[{ text: "🔙 Back", callback_data: "/start" }]] }
  });
} else {
  Bot.sendMessage("⚠️ No hash report found.");
}

