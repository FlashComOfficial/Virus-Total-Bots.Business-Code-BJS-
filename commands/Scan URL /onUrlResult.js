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
let data;
try {
  data = JSON.parse(content);
} catch(e) {
  Bot.sendMessage("⚠️ Failed to parse VirusTotal response:\n" + content);
  return;
}


let waitMsgId = Bot.getProperty("waitingMsg:" + user.telegramid);
if (waitMsgId) {
  Api.deleteMessage({
    chat_id: chat.chatid,
    message_id: waitMsgId
  });
  Bot.setProperty("waitingMsg:" + user.telegramid, null);
}


if (data && data.data && data.data.attributes) {
  let attr = data.data.attributes;

  if (attr.status && (attr.status === "queued" || attr.status === "in-progress")) {
    Api.sendMessage({
      chat_id: chat.chatid,
      text: "⏳ VirusTotal is still analyzing this URL...\n\nPlease try again later.",
      parse_mode: "Markdown",
      reply_markup: {
        inline_keyboard: [
          [{ text: "🔄 Check Again", callback_data: "/checkresult" }],
          [{ text: "🔙 Back", callback_data: "/start" }]
        ]
      }
    });
    return;
  }

  if (attr.stats) {
    let stats = attr.stats;

    Api.sendMessage({
      chat_id: chat.chatid,
      text:
        "✅ *VirusTotal URL Report*\n\n" +
        "🟥 Malicious: " + (stats.malicious || 0) + "\n" +
        "🟧 Suspicious: " + (stats.suspicious || 0) + "\n" +
        "🟩 Harmless: " + (stats.harmless || 0) + "\n" +
        "⚪️ Undetected: " + (stats.undetected || 0),
      parse_mode: "Markdown",
      reply_markup: {
        inline_keyboard: [
          [{ text: "🔄 Check Again", callback_data: "/checkresult" }],
          [{ text: "🔙 Back", callback_data: "/start" }]
        ]
      }
    });
    return;
  }
}

Bot.sendMessage("⚠️ Unexpected response from VirusTotal:\n" + content);

