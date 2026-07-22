console.log("Phishing Detector started");

browser.tabs.onUpdated.addListener(
    (tabId, changeInfo, tab) => {
        
        if (changeInfo.url) {
            console.log("Checking:", changeInfo.url);
        }
    }
);