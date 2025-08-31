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

/*CMD
  command: /scan_url
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
CMD*/

Api.editMessageText({
  message_id: request.message.message_id,
  text: "🌐 Send me a *URL or direct file link* (.zip, .rar, .7z, .txt) to scan:",
  parse_mode: "markdown",
  reply_markup: { inline_keyboard: [[{ text: "🔙 Back", callback_data: "/start" }]] }
});

Bot.runCommand("/results_url");

