const currentUrl = window.location.href;

const hasAtSymbol = detectAtSymbol(currentUrl);

const hostnameData = analyzeHostname(currentUrl);

const suspiciousKeywords = [
    "login",
    "signin",
    "verify",
    "verification",
    "secure",
    "account",
    "update",
    "password",
    "confirm",
    "unlock"
];

const urlAnalysis = analyzeUrl(currentUrl);

const risk = calculateRiskScore(urlAnalysis);

console.log("Current URL:", currentUrl);

console.log(urlAnalysis);

console.log(risk);

console.log("CONTENT SCRIPT RUNNING")

function detectLoginForm() {
    const passwordFields = document.querySelectorAll('input[type="password"]');

    console.log("Password fields found:", passwordFields.length);

    return {
        hasPasswordField: passwordFields.length > 0,
        passwordFieldCount: passwordFields.length
    };
}

console.log(detectLoginForm());

function detectAtSymbol(url) {
    return {
        hasAtSymbol: url.includes("@")
    };
}

function detectEncodedCharacters(url) {
    const matches = url.match(/%[0-9A-Fa-f]{2}/g);

    return {
        encodedCharacterCount: matches ? matches.length : 0
    };
}

function detectLongUrl(url) {
    return {
        urlLength: url.length,
        isLongUrl: url.length > 100
    };
}

function detectRepeatedSlashes(url) {
    const urlWithoutProtocol = url.replace(/^https?:\/\//,"");

    return {
        hasRepeatedSlashes: /\{2,}/.test(urlWithoutProtocol)
    };
}

function analyzeHostname(url) {
    const parsedUrl = new URL(url);

    return {
        hostname: parsedUrl.hostname
    };
}

function countSubdomains(hostname) {
    const parts = hostname.split(".");

    return {
        hostname: hostname,
        subdomainCount: parts.length - 2
    };
}

function detectSuspiciousKeywords(url) {
    const lowerUrl = url.toLowerCase();

    const foundKeywords = suspiciousKeywords.filter(keyword =>
        lowerUrl.includes(keyword)
    );

    return {
        foundKeywords: foundKeywords,
        keywordCount: foundKeywords.length
    };
}

function analyzeUrl(url) {
    const hostnameData = analyzeHostname(url);

    return {
        url: url,
        ...detectAtSymbol(url),
        ...detectEncodedCharacters(url),
        ...detectLongUrl(url),
        ...detectRepeatedSlashes(url),
        ...hostnameData,
        ...countSubdomains(hostnameData.hostname),
        ...detectSuspiciousKeywords(url)
    };
}

function calculateRiskScore(urlAnalysis) {
    let score = 0;
    const reasons = [];

    if (urlAnalysis.hasAtSymbol) {
        score += 25;
        reasons.push("URL contains @ symbol");
    }

    if (urlAnalysis.encodedCharacterCount > 5) {
        score +=20;
        reasons.push("URL contains excessive encoded chararcters");
    }

    if (urlAnalysis.isLongUrl) {
        score +=15;
        reasons.push("URL is unusually long");
    }

    if (urlAnalysis.hasRepeatedSlashes) {
        score += 10;
        reasons.push("URL contains repeated slashes");
    }

    return {
        score,
        reasons
    };
}