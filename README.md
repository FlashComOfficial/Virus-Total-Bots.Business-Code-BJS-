# 🦠 VirusTotal File Scanner Bot (Bots.Business) — v1.1 Full Release

A **Telegram bot** built on the [Bots.Business](https://bots.business/) platform that lets users check **URLs, Domains, IPs, and File Hashes** using **VirusTotal** and receive clear, readable reports right in chat.

This release upgrades the original URL-only beta to a **complete security scanner** with a **clean inline UI** (edits messages in place — no chat spam).

---

## 🚀 What’s New in v1.1

- 🌐 **URL** scan
- 🏷 **Domain** scan
- 🔢 **IP address** scan
- 📄 **File hash** scan (MD5/SHA1/SHA256)
- 🧭 **Inline menu that edits in place** (Back button, no message spam)
- 🧱 Better validation & helpful status messages
- ⚠️ Shared error handling & rate-limit guidance

---

## ⚠️ Important Notes

- Bots.Business **does not support raw file uploads**; use **direct file links** or **file hashes** instead.
- VirusTotal **free API** has strict rate limits (e.g., ~4 req/min). Hitting the limit will delay results.
- VirusTotal results are **indicative**, not guarantees. Always exercise caution.

---

## 🛠 Getting a VirusTotal API Key

1. Go to 👉 **VirusTotal**: https://www.virustotal.com  
2. Sign in (or create a free account).  
3. Open your **API Key** page and copy your key.

---

## How to import GitHub repo Bots.Business bots to Bots.Business account

Watch this step-by-step video guide on YouTube:  
👉 [How to import GitHub repo to Bots.Business](https://www.youtube.com/watch?v=irYn0_UvAcY)

---

## 🔑 Setting Your API Key (Step-by-Step)

You can set using bots.business admin panel:

### Set using Admin Panel Bots.Business
1. Run /setpanel in your bot
2.Then go to your bot in **Bots.Business** → **Your Bot** → **Admin Panel**.
3. Paste your API key in the api key field.
4. Set your admin panel id means your telegram id
5. 
> Using a property keeps your key in one place and avoids editing multiple commands later.

---

## 🧭 How to Use

1. **Start the bot** with `/start`.  
   You’ll see a single inline menu with:
   - 🌐 **Scan URL**
   - 🏷 **Scan Domain**
   - 🔢 **Scan IP**
   - 📄 **Scan Hash**
   - ℹ️ **About**

2. **Pick what to scan**  
   The message updates in place (no spam) and prompts you to send the value.

3. **Submit & check**  
   - For **URL**: the bot submits it to VirusTotal, then you tap **“Check URL Report”** to fetch the analysis when ready.  
   - For **Domain / IP / Hash**: the bot fetches reputation/analysis data instantly if available.

4. **Read the report**  
   You’ll get a compact summary:
✅ VirusTotal Report

🟥 Malicious: 9 
🟧 Suspicious: 1
🟩 Harmless: 62
⚪ Undetected: 25

---

## 📦 Supported Scans & What They Mean

### 🌐 URL Scan
- Submits a URL (or direct file link like `.zip`, `.rar`, `.7z`, `.txt`) to VirusTotal for analysis.
- If the scan is still **queued/in-progress**, try checking again shortly.
- Report shows detection summary from multiple antivirus engines.

### 🏷 Domain Scan
- Checks a domain in VirusTotal.
- Shows detection summary (malicious, suspicious, harmless, undetected).
- *Note:* Extra info like registrar/WHOIS is not included in this bot’s version.

### 🔢 IP Scan
- Checks an IP address in VirusTotal.
- Shows detection summary (malicious, suspicious, harmless, undetected).
- *Note:* Network owner (ASN) or geolocation data is not included in this bot’s version.

### 📄 File Hash Scan (MD5/SHA1/SHA256)
- Looks up a file’s known status by its hash (without uploading).
- Fastest way to check already-known samples in VirusTotal.
- Report only includes detection summary stats.

---

## 📝 Example: URL Report (Explained)

- **🟥 Malicious** — engines flagged it as dangerous (virus/trojan/ransomware).
- **🟧 Suspicious** — looks risky but not confirmed.
- **🟩 Harmless** — known good/clean.
- **⚪ Undetected** — no flags; not necessarily safe, just unknown.

---

## ✨ Features

- **All-in-one scanner**: URL, Domain, IP, File Hash
- **Inline UI** (edits the same message, Back button)
- **Real-time VirusTotal reports**
- **Friendly error messages** (rate limits, missing key, etc.)
- **Extensible**: add more URL extensions (e.g., `.pdf`, `.apk`, `.exe`) in the URL validation

---

## 🔧 Configuration Tips

- **Add more URL extensions**: in the URL validation, append more checks like  
`|| lower.endsWith(".pdf") || lower.endsWith(".apk") || lower.endsWith(".exe")`
- **Respect rate limits**: avoid spamming requests; wait before re-checking analysis.

---

## 📄 Release Notes – v1.1

- Added **Domain**, **IP**, and **File Hash** scanners
- Upgraded **inline UI** to edit messages in place
- Cleaner **report formatting** across all scan types
- Improved **input validation** and **error handling**
- Documentation revamped for quick setup

---

## 📚 License & Usage

- You may **edit**, **publish**, or **modify** this code.
- You must retain credits to **FlashCom** in forks, distributions, or publications.
- Use responsibly. The authors are **not responsible** for misuse or damages.
- This project is provided **as-is** (BETA → now Full Scan Release features).

---

## 🤝 Credits

This project is a **human + AI collaboration**.  
Vision, integration, and maintenance by **FlashCom**.  
AI tools helped accelerate code assembly and documentation.

**Powered by FlashCom.**  

---

## 🔗 Links

- Bots.Business: https://bots.business  
- VirusTotal: https://virustotal.com  
- GetMart (more bots & codes including view and test apis ): https://getmart.iblogger.org
- GetMart Official Channel : https://t.me/GetMartOfficialChannel
- FlashCom BJS Codes : https://t.me/FlashComBjs ( Get updates regardiign this code or even get more codes and news )
