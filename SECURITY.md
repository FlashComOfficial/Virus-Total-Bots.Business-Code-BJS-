# 🔐 Security Policy

This document explains how to responsibly report security issues and outlines safe usage practices for the **VirusTotal File Scanner Bot (Bots.Business)**.

---

## 📢 Supported Versions

We actively support only the latest release.

| Version   | Supported          | Notes                                                       |
|-----------|--------------------|-------------------------------------------------------------|
| v1.1 Full | ✅ Yes             | Latest stable release (URLs, Domains, IPs, File Hashes)     |
| v1.0 Beta | ⚠️ Limited support | URL-only beta. Bug/security reports accepted, no new fixes. |

---

## 📬 Reporting a Vulnerability

If you find a security vulnerability in this project:

- **DO NOT** open a public issue.
- Please report privately via one of the following:
  - 📧 Email: `flashcomteam@protonmail.com`
  - 📩 Telegram: [FlashCom BJS Codes](https://t.me/FlashComBjs)

### Response Timeline
- Acknowledge your report within **48 hours**
- Investigate within **7 days**
- Fix or mitigation guidance provided as soon as possible

⏳ Please note: If maintainers are unavailable (e.g., offline or away), responses may take longer.  
We appreciate your patience and understanding.

---

## ⚠️ Security Considerations

### 🔑 API Keys
- Keep your **VirusTotal API key** private.
- Do not hardcode it in multiple places — set it once via the **Bots.Business Admin Panel**.
- Never commit or share exports that contain your API key.

### 🚦 Rate Limits
- Free VirusTotal API keys allow ~4 requests per minute.
- Exceeding this may cause temporary blocks.
- The bot includes error handling, but users should avoid excessive requests.

### 🛡 Safe Usage
- This bot does **not** guarantee 100% accurate malware detection — results come from VirusTotal’s engines.
- Treat results as **indicators**, not absolute proof.
- Always exercise caution when dealing with suspicious files, links, or hashes.

---

## 🤝 Responsible Disclosure

We encourage responsible disclosure. Please give us time to investigate and release a fix before making vulnerabilities public.

Thank you for helping keep this project and its users safe ❤️
