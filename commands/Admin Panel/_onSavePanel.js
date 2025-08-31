/*CMD
  command: /onSavePanel
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
if (!command) return;

var values = AdminPanel.getPanelValues("virustotal_settings");

// Store them into Bot properties
if (values.vt_api_key) {
  Bot.setProperty("vt_api_key", values.vt_api_key, "string");
}
if (values.ADMIN_ID) {
  Bot.setProperty("ADMIN_ID", values.ADMIN_ID, "string");
}

Bot.sendMessage("✅ VirusTotal settings saved successfully.");

