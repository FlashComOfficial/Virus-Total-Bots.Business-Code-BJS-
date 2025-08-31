/*CMD
  command: /about
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

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
  text: 
    "🦠 *VirusTotal Scanner Bot v1.1*\n\n" +
    "Welcome! This bot can scan:\n" +
    "🔗 URLs\n" +
    "🌐 Domains\n" +
    "📡 IP Addresses\n" +
    "🔑 File Hashes (MD5, SHA-1, SHA-256)\n\n" +
    
    "⚡ *Open Source Project*\n" +
    "📂 GitHub: [VirusTotal Bot Code](https://github.com/FlashComOfficial/Virus-Total-Bots.Business-Code-BJS-/blob/release-v1.1)\n" +
    "📖 Read [README.md](https://github.com/FlashComOfficial/Virus-Total-Bots.Business-Code-BJS-/blob/release-v1.1/README.md)\n" +
    "🔐 Security Notes: [SECURITY.md](https://github.com/FlashComOfficial/Virus-Total-Bots.Business-Code-BJS-/tree/release-v1.1/SECURITY.md)\n\n" +

    "🌍 *More Bots, Codes & APIs*\n" +
    "🔗 Visit: https://getmart.iblogger.org/n/nFlashCom\n\n" +

    "✨ Credits: @FlashComOfficial | For updates join our channel!\n",
  parse_mode: "Markdown",
  disable_web_page_preview: true,
  reply_markup: { 
    inline_keyboard: [
      [{ text: "📂 GitHub Repo", url: "https://github.com/FlashComOfficial/Virus-Total-Bots.Business-Code-BJS-/blob/release-v1.1" }],
      [{ text: "📖 Docs (README)", url: "https://github.com/FlashComOfficial/Virus-Total-Bots.Business-Code-BJS-/blob/release-v1.1/README.md" }],
      [{ text: "🔐 Security Notes", url: "https://github.com/FlashComOfficial/Virus-Total-Bots.Business-Code-BJS-/tree/release-v1.1/SECURITY.md" }],
      [{ text: "🔙 Back", callback_data: "/start" }]
    ] 
  }
});

} else {
Api.sendMessage({
  chat_id: chat.chatid,
  text: 
    "🦠 *VirusTotal Scanner Bot v1.1*\n\n" +
    "Welcome! This bot can scan:\n" +
    "🔗 URLs\n" +
    "🌐 Domains\n" +
    "📡 IP Addresses\n" +
    "🔑 File Hashes (MD5, SHA-1, SHA-256)\n\n" +
    
    "⚡ *Open Source Project*\n" +
    "📂 GitHub: [VirusTotal Bot Code](https://github.com/FlashComOfficial/Virus-Total-Bots.Business-Code-BJS-/blob/release-v1.1)\n" +
    "📖 Read [README.md](https://github.com/FlashComOfficial/Virus-Total-Bots.Business-Code-BJS-/blob/release-v1.1/README.md)\n" +
    "🔐 Security Notes: [SECURITY.md](https://github.com/FlashComOfficial/Virus-Total-Bots.Business-Code-BJS-/tree/release-v1.1/SECURITY.md)\n\n" +

    "🌍 *More Bots, Codes & APIs*\n" +
    "🔗 Visit: https://getmart.iblogger.org/n/nFlashCom\n\n" +

    "✨ Credits: @FlashComOfficial | For updates join our channel!\n",
  parse_mode: "Markdown",
  disable_web_page_preview: true,
  reply_markup: { 
    inline_keyboard: [
      [{ text: "📂 GitHub Repo", url: "https://github.com/FlashComOfficial/Virus-Total-Bots.Business-Code-BJS-/blob/release-v1.1" }],
      [{ text: "📖 Docs (README)", url: "https://github.com/FlashComOfficial/Virus-Total-Bots.Business-Code-BJS-/blob/release-v1.1/README.md" }],
      [{ text: "🔐 Security Notes", url: "https://github.com/FlashComOfficial/Virus-Total-Bots.Business-Code-BJS-/tree/release-v1.1/SECURITY.md" }],
      [{ text: "🔙 Back", callback_data: "/start" }]
    ] 
  }
});

}
Bot.runCommand("/results_url");

