import { detectTyposquatting } from "../utils/typosquatting.js";

const testDomains = [
    "google.com",
    "g00gle.com",
    "paypal.com",
    "paypaI.com",
    "amazon.com",
    "micr0soft.com"
];

for (const domain of testDomains) {

    const result = detectTyposquatting(domain);

    console.log(
        domain,
        result
    );
    
}