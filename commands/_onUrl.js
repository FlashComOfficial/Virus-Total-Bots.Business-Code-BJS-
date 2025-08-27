/*CMD
  command: /onUrl
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

// command: /onUrl
let text = message

if (!text){
  Bot.sendMessage("❌ Please send a valid URL to a file.")
  Bot.runCommand("/start")
  return
}

// check extension
let lower = text.toLowerCase()
if (!(lower.endsWith(".zip") || lower.endsWith(".rar") || lower.endsWith(".7z"))){
  Bot.sendMessage("❌ Only .zip, .rar, .7z links are allowed.\n\nPlease try again.")
  Bot.runCommand("/start")
  return
}

// VirusTotal API Key
let apiKey = "YOUR_API_KEY"

// submit URL to VirusTotal
HTTP.post({
  url: "https://www.virustotal.com/api/v3/urls",
  headers: {
    "x-apikey": apiKey,
    "Content-Type": "application/x-www-form-urlencoded"
  },
  body: "url=" + encodeURIComponent(text),
  success: "onVirusTotalSubmit",
  error: "onError"
})

