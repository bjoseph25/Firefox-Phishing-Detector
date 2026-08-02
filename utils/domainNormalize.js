export function normalizeDomain(domain) {

    return domain
        .toLowerCase()
        .replace("www.", "")
        .replace(/[0-9]/g, replaceNumbers); 
}

function replaceNumbers(character) {

    const replacements = {
        "0": "o",
        "1": "l",
        "3": "e",
        "5": "s",
        "7": "t",
        "I": "l"
    };

    return replacements[character] || character;
}