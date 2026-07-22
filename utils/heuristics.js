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

    return result
}