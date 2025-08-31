/*CMD
  command: /scan_url
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
if (request && request.message && request.message.message_id) {
  // Came from inline button → edit
  Api.editMessageText({
    chat_id: chat.chatid,
    message_id: request.message.message_id,
    text: "🌐 Send me a *URL to scan:",
    parse_mode: "Markdown",
    reply_markup: { 
      inline_keyboard: [[{ text: "🔙 Back", callback_data: "/start" }]] 
    }
  });
} else {
  Api.sendMessage({
    chat_id: chat.chatid,
    text: "🌐 Send me a *URL to scan:",
    parse_mode: "Markdown",
    reply_markup: { 
      inline_keyboard: [[{ text: "🔙 Back", callback_data: "/start" }]] 
    }
  });
}
Bot.runCommand("/results_url");

