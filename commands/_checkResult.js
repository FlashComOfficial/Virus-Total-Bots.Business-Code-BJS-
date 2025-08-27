/*CMD
  command: /checkResult
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


let scanId = Bot.getProperty("lastScanId:" + user.telegramid)

if (!scanId){
  Bot.sendMessage("❌ No recent scan found. Please submit a URL first.")
  Bot.runCommand("/start")
  return
}

HTTP.get({
  url: "https://www.virustotal.com/api/v3/analyses/" + scanId,
  headers: { "x-apikey": "YOUR_API_KEY" },
  success: "onVirusTotalResult",
  error: "onError"
})

