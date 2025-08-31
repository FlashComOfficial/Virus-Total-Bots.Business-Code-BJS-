/*CMD
  command: /scan_ip
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Ip Scan

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Api.editMessageText({
  message_id: request.message.message_id,
  text: "🔢 Please send me an *IP address* (example: 8.8.8.8) to scan:",
  parse_mode: "markdown",
  reply_markup: { inline_keyboard: [[{ text: "🔙 Back", callback_data: "/start" }]] }
});

Bot.runCommand("/results_ip");

/* 
  🦠 VirusTotal Scanner Bot
  Read credits and for more codes/bots anf for viewing & testing apis visit:
  👉 https://getmart.iblogger.org
  
  
  For this code updates further join our channel
  https://t.me/FlashComBJS
*/
