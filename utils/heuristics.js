import {
    createResult,
    addRisk
} from "./scoring.js"

export function checkUrl(urlInfo) {

    const result = createResult();

    // HTTP check
    if (urlInfo.protocol === "http:") {

        addRisk(
            result,
            20,
            "Connection is not HTTPS"
        );
    }



    // Long URL check
    if (urlInfo.length > 120) {

        addRisk(
            result,
            10,
            "URL is unusually long"
        );
    }


    // Suspicious keywords
    const keywords = [
        "login",
        "verify",
        "secure",
        "account",
        "update"
    ];

    for (const keyword of keywords) {

        if (
            urlInfo.hostname
            .toLowerCase()
            .includes(keyword)
        ) {

            addRisk(
                result,
                15,
                `Suspicious keyword: ${keyword}`
            );
        }
    }

    // IP Address check
    const ipRegex = 
        /^(\d{1,3}\.){3}\d{1,3}$/;

    if (ipRegex.test(urlInfo.hostname)) {

        addRisk(
            result,
            30,
            "URL uses an IP address"
        );
    }

    // Count subdomains
    const parts =
        urlInfo.hostname.split(".");

    if (parts.length > 3) {

        addRisk(
            result,
            15,
            "Excessive subdomains"
        );
    }

    // Count hyphens
    const hyphenCount =
        (urlInfo.hostname.match(/-/g)) || [].length;

    if (hyphenCount >= 2) {

        addRisk(
            result,
            10,
            "Multiple hyphens is domain"
        );
    }

    // Check uncommon TLDs
    const suspiciousTlds = [
        ".zip",
        ".click",
        ".top",
        ".xyz"
    ];

    for (const tld of suspiciousTlds) {

        if (urlInfo.hostname.endsWith(tld)) {

            addRisk(
                result,
                15,
                `Suspicious TLD: ${tld}`
            );
        }
    }

    return result
}