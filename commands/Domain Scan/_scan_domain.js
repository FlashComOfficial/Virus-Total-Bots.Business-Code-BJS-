/*CMD
  command: /scan_domain
  help: 
  need_reply: false
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
Api.editMessageText({
  message_id: request.message.message_id,
  text: "🏷 Please send me a *domain name* (example: google.com) to scan:",
  parse_mode: "markdown",
  reply_markup: { inline_keyboard: [[{ text: "🔙 Back", callback_data: "/start" }]] }
});

Bot.runCommand("/results_domain");

