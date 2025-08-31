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

var values = AdminPanel.getPanelValues("virustotal_settings");
let apiKey = values.vt_api_key;

if (!apiKey || apiKey.trim() === "") {
let msg = 
"⚠️ *API Key Not Configured*\n\n" +
"Oops! It looks like you haven’t set up your VirusTotal API key yet. 🔑\n\n" +
"*Before all click the below set panel to set the admin panel*\n\n" +
"👉 To fix this and continue using the bot:\n" +
"1️⃣ Go to Bots.Business \n" +
"2️⃣ Select *your bot* from the dashboard\n" +
"3️⃣ Open the *Admin Panel* tab\n" +
"4️⃣ Find the section named *virustotal_settings*\n" +
"5️⃣ Paste your VirusTotal API key there and save ✅\n\n" +

"⚡ Note: Only the *bot owner* has access to the Admin Panel. If you are not the owner, please contact them to configure it.\n\n" +

"🔐 Once the API key is added, you’ll be able to scan URLs, domains, IP addresses, and file hashes seamlessly!";

let keyboard = [
[{ text: "🔑 Set Panel", callback_data: "/setpanel" }]
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
  return;
}

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
