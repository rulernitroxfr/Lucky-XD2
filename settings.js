
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "starcore~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUlQVG54TExyUHY4YmptQ2RVOVZjYWk4Zzl3bXRUMXcySW1vRSt3SFhIRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0JCVnJRMkhKV1h1UUFqSndudWdrbmhzTDFVc2hrTWF4Umk1VjlTSGZ3Zz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjTUE5QlFFRmhOb1pLdFNtaTN1OXBmdGdIMXZGcFZSWVpET1Zra0J4cDJNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqK3lRaEZrT3pVLzBwVlpOb3oxSkJDSzFXblFLamovdzFYK0FMYnhrMGtvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNHZXB4elc1azUrRklya0tYK0k5b0NMNERUYmVhVzJuQzhxbTNTaHRIMFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVpNmxyWS91MlUxWk5qUkhtV0plL2xUb3RIcGxwNHF6UUpFRHFkb1lsazQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSURlWUkyYkR0K1RJYndZS2V5QjdUemVWMk9uVWdKS3FPekFYQ0gzYjhFMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT3JYcUtCWlZBb1JWWGRGWEVBd1NNSThiTU9iSXJJck9IV2s5WTIvckZYbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRpNFZjYzhLQTIwRUlHc2pXMU4xcCs2L2ZnRFV3VTlpWnhoUmhKTjdPamFMSkNDczh1Y0twVTJ0Z3dyeitKNWNoNEc4Uzgrb215NWY2eWVpVzF2QmlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgwLCJhZHZTZWNyZXRLZXkiOiJTaDlQVjRRTTh5RmVRcjRZcGdBN2JQaW83UVVVTjNmbmxpMWZmTmRkUTg0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkxODI5NTQ1NTQxOEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJCNDQ3OENGMDlFMkYxQThGNkUxMTA4NzQ2Qzg3ODkzRSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU3MjU5ODQ5fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MTgyOTU0NTU0MThAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRTVENDcxNzVBNDI3MTFENEJERkU2Qzg2MTlFRDg3MkMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NzI1OTg1MH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiLU91TUNjTjhRWEtuUk9HZVpuVkVWdyIsInBob25lSWQiOiI2NjJmOWJiMi04YjUwLTQzYzQtYmJmNy00NGMyZDU4MTFlOTMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOGI1Zmxad001V08ra0NWMGlUVkliTnVNcEh3PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFuUVJoWWdSbW1nMDVaU1M0YzN1R1FGdFIzbz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJNUk1BTFZJTiIsIm1lIjp7ImlkIjoiOTE4Mjk1NDU1NDE4Ojg2QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjEwMjczNDExNTc1ODIzOjg2QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTEdiaUt3RUVMalE5c1VHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQlJLbEl3MExselVHaGxsY3JaLzRBOGJ0Y21JYUlaZXlLVnBad21EaGtFUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNU1FSTgzYkNMY1lWakV5dGg2SkpKUmNSa1NPeUswNTZBWjkySit5VVhHeWxjUUgwL28rSVBFRG4rQkVWZ1RyeHB4Qm02ZGFleE02K3ZibHdDcnhORFE9PSIsImRldmljZVNpZ25hdHVyZSI6Ikhxang0azZOY0tLRm42ZUw2L0JVVnAxMXB2YUNnVkVpVzhHYTc2cjBQUjBqRGdZM2JMcFU1TjN1Tk52ODQ2Yit3dUdDbnBYOUFQaTZkK0N4bG96bWpnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE4Mjk1NDU1NDE4Ojg2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFVU3BTTU5DNWMxQm9aWlhLMmYrQVBHN1hKaUdpR1hzaWxhV2NKZzRaQkUifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NzI1OTg0NSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFUUMifQ==",
// add your Session Id make sure it starts with lucky~
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "LUCKY-XD",
// add bot name here for menu
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 

LINK_WHITELIST: "youtube.com,github.com",

    LINK_WARN_LIMIT: 3, // Number of warnings before action

    LINK_ACTION: "kick", // "kick", "mute", or "none"

        AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen

        AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 

        AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 

        AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*Just seen ur status 😆*",
// set the auto reply massage on status reply  


       WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups 
   
       ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group

      ANTI_LINK: process.env.ANTI_LINK || "false",
// make anti link true,false for groups 

      MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 

     MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/4itzeu.jpg",
// add custom menu and mention reply image url

       ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/4itzeu.jpg",
// add img for alive msg

        LIVE_MSG: process.env.LIVE_MSG || "> ʙᴏᴛ ɪs sᴘᴀʀᴋɪɴɢ ᴀᴄᴛɪᴠᴇ ᴀɴᴅ ᴀʟɪᴠᴇ\n\n\nᴋᴇᴇᴘ ᴜsɪɴɢ ✦LUCKY-XD✦ ғʀᴏᴍ Lucky Tech Hub ɪɴᴄ⚡\n\n\n*© ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ\n\n> ɢɪᴛʜᴜʙ :* github.com/Tomilucky218/Lucky-XD2",
// add alive msg here 


        STICKER_NAME: process.env.STICKER_NAME || "LUCKY-XD",
// type sticker pack name 

        CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react  
  
      CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 

          DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 

          OWNER_NUMBER: process.env.OWNER_NUMBER || "918295455418",
// add your bot owner number

OWNER_NAME: process.env.OWNER_NAME || "Nitrox",
// add bot owner name

              DESCRIPTION: process.env.DESCRIPTION || "*© Powered By Lucky Tech Hub*",
// add bot owner name    

        READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs

                 AUTO_REACT: process.env.AUTO_REACT || "true",
// make this true or false for auto react on all msgs
                ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  

            ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 

        AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 

              AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 

        ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 

         PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod

        AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing 
  
   READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 

     DEV: process.env.DEV || "256789966218",
//replace with your whatsapp number    
    
    ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 

      ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'inbox/ same if you want to resend deleted message in same chat 

      AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
// make it true for auto recoding 

version: process.env.version || "0.0.9",

};
