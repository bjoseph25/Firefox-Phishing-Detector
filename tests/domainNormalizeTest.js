import { normalizeDomain } from "../utils/domainNormalize.js";

const tests = [
    "google.com",
    "g00gle.com",
    "micr0soft.com",
    "paypal.com"
];

for (const domain of tests) {
    console.log(
        domain,
        "=>",
        normalizeDomain(domain)
    );
}