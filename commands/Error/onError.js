/*CMD
  command: onError
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Error

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Api.sendMessage({
  text: "❌ *Error while connecting to VirusTotal.*\n\n" +
        "⚠️ Possible reasons:\n" +
        "• Invalid or missing API key\n" +
        "• API rate limit exceeded (free = 4 requests/minute)\n" +
        "• VirusTotal server temporary issue\n\n" +
        "👉 Try again later or check your /setapikey settings.",
  parse_mode: "markdown",
  reply_markup: {
    inline_keyboard: [
      [{ text: "🔙 Back to Menu", callback_data: "/start" }]
    ]
  }
});
/* 
  🦠 VirusTotal Scanner Bot
  Read credits and for more codes/bots anf for viewing & testing apis visit:
  👉 https://getmart.iblogger.org
  
  
  For this code updates further join our channel
  https://t.me/FlashComBJS
*/
