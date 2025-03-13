/*
Repo         : https//github.com/TanyaMashamba01/MIDKINGX-MD
Support      : wa.me/263716729222
╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
    ⭐ＰＲＯＪＥＣＴ ＮＡＭＥ:
    M I D K I N G X  ＷＨＡＴＳＡＰＰ ＭＤ ＢＯＴ
  
     
    ⭐ MY ＷＥＢＳＩＴＥ
     Here you go! The link for unbanning with Joshua Mambo:

[Click here to be unbanned on WhatsApp](https://kineboii.github.io/whatsapp_unbanned/)

Dm here 
https://wa.me/qr/RT2SFFHAAAING1

If you have been flagged off 📴 on Whatsapp 

> Joshuamambo1 NetKing ❤️‍🔥 
> Always be with you

*/





































































































































































































const axios = require('axios');
const config = require('../config');
const { cmd, commands } = require('../command');
cmd({
    pattern: "weather",
    desc: "🌤 Get weather information for a location",
    react: "🌤",
    category: "other",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        if (!q) return reply("❗ Please provide a city name. Usage: .weather [city name]");
        const apiKey = '2d61a72574c11c4f36173b627f8cb177'; 
        const city = q;
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const response = await axios.get(url);
        const data = response.data;
        const weather = `
> 🌍 *Weather Information for ${data.name}, ${data.sys.country}* 🌍
> 🌡️ *Temperature*: ${data.main.temp}°C
> 🌡️ *Feels Like*: ${data.main.feels_like}°C
> 🌡️ *Min Temp*: ${data.main.temp_min}°C
> 🌡️ *Max Temp*: ${data.main.temp_max}°C
> 💧 *Humidity*: ${data.main.humidity}%
> ☁️ *Weather*: ${data.weather[0].main}
> 🌫️ *Description*: ${data.weather[0].description}
> 💨 *Wind Speed*: ${data.wind.speed} m/s
> 🔽 *Pressure*: ${data.main.pressure} hPa

> *© Powered By MidKingX*
`;
        return reply(weather);
    } catch (e) {
        console.log(e);
        if (e.response && e.response.status === 404) {
            return reply("🚫 City not found. Please check the spelling and try again.");
        }
        return reply("⚠️ An error occurred while fetching the weather information. Please try again later.");
    }
});
                 
