/*CMD
  command: /scan_hash
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

Api.editMessageText({
  message_id: request.message.message_id,
  text: "📄 Please send me a *file hash* (MD5, SHA1, or SHA256) to scan:",
  parse_mode: "markdown",
  reply_markup: { inline_keyboard: [[{ text: "🔙 Back", callback_data: "/start" }]] }
});

Bot.runCommand("/results_hash");

