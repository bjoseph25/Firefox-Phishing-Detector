browser.storage.local.get("lastScan")
.then(data => {

    const scan = data.lastScan

    if (!scan) {
        
        document.getElementById("status")
        .textContent = 
        "No scan availiable";


        return;

    }

    document.getElementById("site")
    .textContent =
    scan.hostname;

    document.getElementById("score")
    .textContent =
    scan.score + "/100";

    let status = "Safe ✅";

    if (scan.score >=50) {

        status = 
        "Suspicious ⚠️";


    }

    if (scan.score >= 80) {

        status =
        "Dangerous 🚨"
    }


    document.getElementById("status")
    .textContent =
    status;

    const list =
    document.getElementById("reasons");

    scan.reason.forEach(reason => {

        const item =
        document.createElement("li");

        item.textContent =
        reason;

        list.appendChild(item);

    });

});

