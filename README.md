# 🦠 VirusTotal File Scanner Bot (Bots.Business) - BETA VERSION

A **Telegram bot** built for the [**Bots.Business**](https://bots.business/) platform that allows users to submit direct file links (`.zip`, `.rar`, `.7z`, `.txt`, etc.) for scanning with **VirusTotal**. The bot fetches results and provides a **clear antivirus report directly in chat**.

---

## ⚠️ Important Notice

- You can send **direct file links** (e.g., `.zip`, `.rar`, `.7z`, `.txt`) to check them on VirusTotal.
- By default, only these extensions are supported, but you can easily **add more** in the code.

🔔 **Disclaimers**
- Results are powered by **VirusTotal’s scanning engines** — we do **not guarantee 100% accuracy**.
- The developers are **not responsible** for how results are used.
- This project is currently in **BETA version**. Use at your own risk.

---

## 🛠 Getting Your VirusTotal API Key

1. Go to 👉 [VirusTotal API Keys](https://www.virustotal.com/gui/user/flashcomteam/apikey)
2. Login (or create a free VirusTotal account).
3. Generate your **personal API key**.

---

## 🔑 Setting Your API Key

1. Open the commands **`/onUrl`** and **`/checkResult`** in your Bots.Business bot.
2. Replace the `YOUR_API_KEY_HERE` with your API key.

---

## 📝 How to Use

1.  **Send the File URL:** First, send the direct URL of the file you want to scan to the bot.
2.  **Wait for the Scan:** VirusTotal will begin processing your file. This can take some time, depending on the file's size and how busy the scanning queue is. **You must wait for the scan to finish before proceeding.**
3.  **Get the Report:** Once you've waited, simply use the command `/checkResult` to retrieve the report.

**Important:** The bot will only show the results for the **last URL you submitted**. You must run `/checkResult` to get the report; you will not receive an automatic message. If the scan is still in progress, you will need to wait and try the command again later.

---

## 🤝 Credits

This project was fully developed by **FlashCom**, with the extensive assistance of **AI tools** throughout the entire process.  
FlashCom is the **main creator and maintainer**, while AI was used as a supportive resource for writing code

---

## 📌 Usage Rights & Responsibilities

- You are free to edit, publish, or modify this code.
- Once obtained, it is your responsibility to manage, publish, or distribute.
- Credits to FlashCom are required in all publications, forks, or modifications.
- Contributions, improvements, and pull requests are always welcome!

---

## 📊 Example Report

When a file link is scanned, the bot replies with a VirusTotal report summary:

`✅ VirusTotal Report for last URL: 🟥 Malicious: 9  🟧 Suspicious: 1  🟩 Harmless: 62  ⚪ Undetected: 25`

---

## 🚀 Features

- **🔗 Supports scanning direct file URLs** (`.zip`, `.rar`, `.7z`, `.txt`, etc.).
- **⚡ Fetches real-time VirusTotal reports.**
- **📊 Provides a clean and clear report format.**
- **🛠 Easy to customize and extend** (add more file extensions in /onUrl you can add "|| lower.endsWith(".7z")" aftr this add repalce .7z with your extension and you can add more likewhise )
