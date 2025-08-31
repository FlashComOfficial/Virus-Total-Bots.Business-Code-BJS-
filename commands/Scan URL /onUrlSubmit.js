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
let data;
try {
  data = JSON.parse(content);
} catch(e) {
  Bot.sendMessage("⚠️ Failed to parse submission:\n" + content);
  return;
}

if (data && data.data && data.data.id) {
  let analysisId = data.data.id;

  // Save analysis id
  Bot.setProperty("lastAnalysis:" + user.telegramid, analysisId, "string");

  var values = AdminPanel.getPanelValues("virustotal_settings");
  let apiKey = values.vt_api_key;

  HTTP.get({
    url: "https://www.virustotal.com/api/v3/analyses/" + analysisId,
    headers: { "x-apikey": apiKey },
    success: "onUrlResult",
    error: "onError"
  });
} else {
  Bot.sendMessage("⚠️ Submission failed:\n" + content);
}

