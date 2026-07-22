export function createResult() {

    return {
        score: 0,
        reasons: []
    };
}


export function addRisk(result, points, reason) {

    result.score += points;
    result.reasons.push(reason)
}