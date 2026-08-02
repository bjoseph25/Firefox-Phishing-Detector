import { similarityScore } from "../utils/similarity.js";


const tests = [
    ["google", "google"],
    ["google", "goggle"],
    ["google", "g00gle"],
    ["paypal", "paypa1"],
    ["amazon", "amazom"],
    ["google", "facebook"]
];


for (const [a,b] of tests) {

    console.log(
        a,
        b,
        similarityScore(a,b)
    );
}