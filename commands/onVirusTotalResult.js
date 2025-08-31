/*CMD
  command: onVirusTotalResult
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

// command: onVirusTotalResult
let data = JSON.parse(content)

if (!data || !data.data || !data.data.attributes){
  Bot.sendMessage("⚠️ Results not ready yet. Try /checkResult again in a few seconds.")
  return
}

let status = data.data.attributes.status

if (status != "completed") {
  Bot.sendMessage("⏳ Scan is still " + status + ". Try again later with /checkResult.")
  return
}

// Results below ( do not chnage unless you know what your doing )
let stats = data.data.attributes.stats || {}
let malicious = stats.malicious || 0
let suspicious = stats.suspicious || 0
let undetected = stats.undetected || 0
let harmless = stats.harmless || 0

let msg = "✅ VirusTotal Report for last URL:\n\n"
msg += "🟥 Malicious: " + malicious + "\n"
msg += "🟧 Suspicious: " + suspicious + "\n"
msg += "🟩 Harmless: " + harmless + "\n"
msg += "⚪ Undetected: " + undetected + "\n"

Bot.sendMessage(msg)

