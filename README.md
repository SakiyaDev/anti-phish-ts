<p align="center"><img src="https://i.imgur.com/psCk5zC.png"></p>

# Anti-Phish TypeScript

An API wrapper for [Anti-Fish](https://bitflow.dev/anti-fish) written in TypeScript.


## Installation

```
npm i anti-phish-ts
```

## Usage

```js
import { Fish } from "anti-phish-ts"
import { Client, Events, GatewayIntentBits } from "discord.js"

const fish = new Fish();
const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent,
    ],
});

client.on(Events.MessageCreate, async (message) => {
    const urlCheck = /(?:[A-z0-9](?:[A-z0-9-]{0,61}[A-z0-9])?\.)+[A-z0-9][A-z0-9-]{0,61}[A-z0-9]/i;
    
    if (urlCheck.test(message.content)) {
        const res = await fish.check(message.content, client.user.username, client.user.id);

        if (!res.match) return;

        console.log(res);
    };
});

client.login("TOKEN"); // not recommended to hard-code your token (better to place in .env)
```

## Contributing

Contributes are welcomed, please create a pull request to make any changes. But for major changes, please open an issue first to let us know what you would like to change.

*Make sure to update tests appropriately, depending on changes. Thanks!*

## Bugs

Please report any bugs in [issues](https://github.com/SakiyaDev/anti-phish-ts/issues) with the bug tag! Thank you!

## Adding to / reporting false positives

Make sure to go check out the anti phishing database [here.](https://github.com/mitchellkrogza/Phishing.Database/issues) for reporting new urls or false positives

## Credits

API: https://bitflow.dev/anti-fish, created by [ByteAlex](https://github.com/ByteAlex)

Phishing Database: [Phishing.Database](https://github.com/mitchellkrogza/Phishing.Database)

## License

[MIT](https://choosealicense.com/licenses/mit/)
