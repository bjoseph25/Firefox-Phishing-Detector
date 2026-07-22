# Firefox Phishing Detector

A lightweight, open-source Firefox extension designed to help users identify potentially malicious phishing websites using local URL analysis and browser-based heuristics.

> **Project Status:** 🚧 Prototype (Version 0.1)

---

## Overview

Phishing remains one of the most common cybersecurity threats on the web. This project aims to provide a privacy-focused Firefox extension that analyzes websites in real time and warns users when a page exhibits characteristics commonly associated with phishing attacks.

Unlike solutions that rely entirely on cloud services, this extension is designed to perform analysis locally whenever possible, reducing unnecessary data sharing while providing fast detection.

---

## Goals

- Detect suspicious websites before users submit sensitive information.
- Analyze URLs using multiple heuristic checks.
- Provide clear explanations for suspicious behavior.
- Reduce false positives through configurable scoring.
- Protect user privacy through local analysis.
- Provide an educational open-source cybersecurity project.

---

## Planned Features

### Prototype (v0.1)

- [ ] URL monitoring
- [ ] Basic heuristic engine
- [ ] Risk scoring system
- [ ] Browser warning notifications
- [ ] Local configuration

### Future Releases

- [ ] Lookalike domain detection
- [ ] Typosquatting detection
- [ ] Internationalized Domain Name (IDN) detection
- [ ] Redirect chain analysis
- [ ] Suspicious login form detection
- [ ] Trusted domain whitelist
- [ ] Optional reputation API integration
- [ ] Community reporting
- [ ] Automated testing
- [ ] Firefox Add-ons release

---

## Project Structure

```text
firefox-phishing-detector/
│
├── manifest.json
├── background.js
├── content.js
│
├── popup/
│   ├── popup.html
│   ├── popup.js
│   └── popup.css
│
├── options/
│   ├── options.html
│   └── options.js
│
├── utils/
│   ├── heuristics.js
│   ├── scoring.js
│   └── urlAnalysis.js
│
├── rules/
│   └── suspiciousDomains.json
│
├── icons/
│
├── tests/
│
├── README.md
└── LICENSE
