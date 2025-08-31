/*CMD
  command: /setpanel
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Admin Panel

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
var panel = {
  title: "⚙️ VirusTotal Bot Settings",
  description: "Manage API key and admin settings for the scanner bot.",
  index: 0,
  icon: "key",
  button_title: "SAVE",

  fields: [
    {
      name: "vt_api_key",
      title: "VirusTotal API Key",
      description: "Paste your VirusTotal API key here (kept hidden).",
      type: "password",
      placeholder: "your-api-key-here",
    },
    {
      name: "ADMIN_ID",
      title: "Admin Telegram ID",
      description: "Your Telegram user ID (for restricting commands).",
      type: "string",
      placeholder: "123456789"
    }
  ]
}

AdminPanel.setPanel({
  panel_name: "virustotal_settings",
  data: panel,
  force: true   
})

Bot.sendMessage("✅ VirusTotal Admin Panel created/updated. Go to the *Admin panel* tab to configure.");

