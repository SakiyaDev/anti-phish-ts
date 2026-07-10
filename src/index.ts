import axios, { type AxiosInstance } from "axios";

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


const api: AxiosInstance = axios.create({
    url: "https://anti-fish.bitflow.dev/check",
    method: "POST"
});

/**
    * Calls API to check whether supplied link is a phishing link
     * @param {string} content Message Content
     * @param {string} name Client Name
     * @param {string} id Client ID
     * @returns {Promise<FishData | null>}
    * @example await check(message.content, client.user.username, client.user.id)
*/
export async function check(content: string, name: string, id: string): Promise<FishData | null> {
    const uAgent = `${name} (https://discord.com/oauth2/authorize?client_id=${id}&permissions=2048&integration_type=0&scope=bot)`;
    const urlCheck = /(?:[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?\.)+[A-Z0-9][A-Z0-9-]{0,61}[A-Z0-9]/i;

    if (urlCheck.test(content)) {
        const res = await api<FishData>({
            headers: {
                "User-Agent": uAgent
            },
            data: {
                "message": content
            }
        });

        if (!res.data) return null;

        return res.data;
    } else {
        return null;
    };
}