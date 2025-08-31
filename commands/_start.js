/*CMD
  command: /start
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

let msg = "🦠 *VirusTotal Scanner Bot*\n\n" +
"👋 Hello " + user.first_name + "!\n\n" +
"This bot lets you scan with VirusTotal:\n" +
"• 🌐 URLs\n" +
"• 🏷 Domains\n" +
"• 🔢 IP Addresses\n" +
"• 📄 File Hashes (MD5/SHA1/SHA256)\n\n" +
"⚠️ Note: Raw file uploads are *not supported* in Bots.Business.";

let keyboard = [
  [
    { text: "🌐 Scan URL", callback_data: "/scan_url" },
    { text: "🏷 Scan Domain", callback_data: "/scan_domain" }
  ],
  [
    { text: "🔢 Scan IP", callback_data: "/scan_ip" },
    { text: "📄 Scan Hash", callback_data: "/scan_hash" }
  ],
  [{ text: "ℹ️ About", callback_data: "/about" }]
];

if (!request.data) {
  Api.sendMessage({
    text: msg,
    parse_mode: "markdown",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: keyboard }
  });
} else {
  Api.editMessageText({
    message_id: request.message.message_id,
    text: msg,
    parse_mode: "markdown",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: keyboard }
  });
}

