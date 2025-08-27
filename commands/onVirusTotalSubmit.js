/*CMD
  command: onVirusTotalSubmit
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

// command: onVirusTotalSubmit
let data = JSON.parse(content)

if (data && data.data && data.data.id){
  let scanId = data.data.id
  Bot.setProperty("lastScanId:" + user.telegramid, scanId, "string")
  
  Bot.sendMessage("🔍 Link submitted to VirusTotal.\n\nType /checkResult in a few seconds to see the report.")
} else {
  Bot.sendMessage("⚠️ VirusTotal submission failed.")
  Bot.runCommand("/start")
}

