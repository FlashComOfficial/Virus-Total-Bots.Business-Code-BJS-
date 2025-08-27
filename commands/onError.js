/*CMD
  command: onError
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

// command: onError
Bot.sendMessage("❌ Error while connecting to VirusTotal.")
Bot.runCommand("/start")

