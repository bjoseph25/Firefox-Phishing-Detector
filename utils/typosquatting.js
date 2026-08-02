import { normalizeDomain } from "./domainNormalize.js";
import { similarityScore } from "./similarity.js";
import { trustedBrands } from "../rules/trustedBrands.js";


export function detectTyposquatting(domain) {

    const originalDomain = 
        domain.toLowerCase().split(".")[0];
    
    const normalized = 
        normalizeDomain(domain);

    const normalizedDomain = 
        normalized.split(".")[0];

    console.log(
        "Original:",
        domain,
        "Normalized:",
        normalizedDomain
    );


    for (const brand of trustedBrands) {

        const brandName =
            brand.split(".")[0];
        
        const score =
            similarityScore(
                normalizedDomain,
                brandName
            );

        console.log(
            normalizedDomain,
            brandName,
            score
        );

        if (
            score >= 85 &&
            originalDomain !== brandName
        ) {

            return {
                detected: true,
                reason: `Possible impersonation of ${brandName}`,
                score: score,
                matchedBrand: brand
            };
        }
    }

    return {
        detected:false
    };
}