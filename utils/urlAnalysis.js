export function analyzeUrl(url) {
    try {
        
        const parsed = new URL(url);

        return {
            url: url,
            hostname: parsed.hostname,
            protocol: parsed.protocol,
            path: parsed.pathname,
            length: url.length
        };
    } catch (error) {

        console.error("Invalid URL:", url);
        return null;
    }
}