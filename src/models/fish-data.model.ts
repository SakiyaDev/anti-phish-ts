interface FishMatch {
    domain: string,
    source: string,
    followed: boolean,
    type: "PHISHING" | "IP_LOGGER",
    trust_rating: number
}

export interface FishData {
    match: boolean
    matches: Array<FishMatch>
}

// Status: 200 | match: true | domain: buzawin.com | source: Phish.Surf | type: PHISHING | trust_rating: 1