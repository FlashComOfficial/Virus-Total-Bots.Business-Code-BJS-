/*CMD
  command: onUrlSubmit
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

let data = JSON.parse(content);
if (data && data.data && data.data.id) {
  Bot.setProperty("lastUrlScan:" + user.telegramid, data.data.id, "string");

  Api.sendMessage({
    text: "🔍 URL submitted. Tap below to check results:",
    reply_markup: { inline_keyboard: [[{ text: "📊 Check URL Report", callback_data: "/check_url" }]] }
  });
} else {
  Bot.sendMessage("⚠️ URL submission failed.");
}

