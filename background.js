import { analyzeUrl } from "./utils/urlAnalysis.js";
import { checkUrl } from "./utils/heuristics.js";

console.log("Phishing Detector started");

browser.tabs.onUpdated.addListener(
    (tabId, changeInfo) => {
        
        if (changeInfo.url) {
            
            console.log(
                "Checking:",
                changeInfo.url
            );


            const urlInfo =
                analyzeUrl(changeInfo.url);


            if (urlInfo) {


                const result =
                    checkUrl(urlInfo)


                console.log(
                    "Risk Score:",
                    result.score
                );

                console.log(
                    "Reasons:",
                    result.reasons
                );


                browser.storage.local.set({

                    lastScan: {
                        url: urlInfo.fullUrl,
                        hostname: urlInfo.hostname,
                        score: result.score,
                        reasons: result.reasons
                    }
                });
            }
        }
    }
);