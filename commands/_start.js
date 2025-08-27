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

  Bot.sendMessage(
    "👋 Welcome!\n\n" +
    "Send me a public URL to a file (.zip, .rar, .7z) and I will check it on VirusTotal.\n\n" +
    "Example:\nhttps://example.com/file.zip"
  )
    Bot.runCommand("/onUrl")

