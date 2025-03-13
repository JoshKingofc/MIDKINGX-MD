const config = require('../config');
const { cmd } = require('../command');
const { exec } = require('child_process');

cmd({
    pattern: "shell",
    desc: "Execute shell commands",
    category: "system",
    react: "🛠️",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        
        if (!isOwner) {
            return reply("❌ Only owner & 𝗝𝗼𝘄𝗵𝗞𝗶𝗻𝗴𝗫 can execute shell commands");
        }

        if (!q) {
            return reply("Please provide a command to execute\nExample: .shell df -h");
        }

        exec(q, async (error, stdout, stderr) => {
            if (error) {
                return reply(`Error: ${error.message}`);
            }
            if (stderr) {
                return reply(`stderr: ${stderr}`);
            }

            let response = `╭━━〔 𝗠𝗜𝗗𝗞𝗜𝗡𝗚𝗫 𝗦𝗛𝗘𝗟𝗟 〕━┈⊷\n`;
            response += `┃◈╭───────────·🚀\n`;
            response += `┃☦︎┃Command: ${q}\n`;
            response += `┃☦︎┃Output:\n`;
            response += `┃☦︎┃${stdout}\n`;
            response += `┃☦︎└───────────┈⊷\n`;
            response += `╰──────────────┈⊷`;

            await conn.sendMessage(
                from, 
                { text: response },
                { quoted: mek }
            );
        });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
