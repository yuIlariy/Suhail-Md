const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="yuankooky@gmail.com"
global.location="Isebania,Kenya."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ KOOKY²²¹-ᴍᴅ" 


global.devs = "254708583813" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254708583813";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254708583813,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_29_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gIC
AgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkY
XRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAzMyxcbiAgICAgICA
gMTU0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzQsXG4gICAgIC
AgIDE3NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0MSxcbiAgIC
AgICAgMjA1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAzNSxcbiAgICA
gICAgMjMxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQ5LFxuICA
gICAgICAxNzEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzLFxuICAg
ICAgICAyMDYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAzNSxcbiA
gICAgICAgMTExLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk0LF
xuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwi
dHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk5LFxuICA
gICAgICAxMzMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDcsXG
4gICAgICAgIDc3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjM3LFx
uICAgICAgICAyMjAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzLFxu
ICAgICAgICAyMTEsXG4gICAgICAgIDc2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTc3LFxuI
CAgICAgICAzOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDk2LFxuI
CAgICAgICA0MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAzOCxcbiAgICAgICAgMzUsXG4
gICAgICAgIDAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0OSxcbiA
gICAgICAgMTczLFxuICAgICAgICAxODUsXG4gICAgICAgIDU5XG4gICAgICBdXG4gICAgfV
xuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdG
VcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1x
uICAgICAgICAwLFxuICAgICAgICA5MixcbiAgICAgICAgMjQ3LFxuICAgICAgICA5MixcbiAgI
CAgICAgMjEzLFxuICAgICAgICAyMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0NSxcbiAgI
CAgICAgMjA0LFxuICAgICAgICA4LFxuICAgICAgICAyOCxcbiAgICAgICAgODgsXG4gICAgI
CAgIDg3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzgsXG4gICAgI
CAgIDI1NSxcbiAgICAgICAgODksXG4gICAgICAgIDEwNixcbiAgICAgICAgMzIsXG4gICAgIC
AgIDI0MixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzNSxcbiAgICAg
ICAgNzAsXG4gICAgICAgIDQzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDQ5LFxuICAgICA
gICAyNDMsXG4gICAgICAgIDYxLFxuICAgICAgICAyOCxcbiAgICAgICAgOTRcbiAgICAgIF1
cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuIC
AgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzUsXG4gICAgICAgID
IzNixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTksXG4gICAgICAgIDE3NixcbiAgICAgICAgN
zYsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMT
g5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTc2LFxuICAgICAgIC
AyMTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTUsXG4gICAg
ICAgIDIzMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzcsXG4gICAgI
CAgIDEyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDk5LFxuICAgICAgICA2MSxcbiAgICAgIC
AgMjI3LFxuICAgICAgICA5NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTksXG4gICAgICAg
IDE3MixcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnR
pdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZ
XJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQ2LFxuICA
gICAgICAyMjksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjIwLFxuICAgICAgICA5NSxcbiAgIC
AgICAgMTU5LFxuICAgICAgICA5MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDAsXG4gIC
AgICAgIDE5NSxcbiAgICAgICAgNjksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ5LFxuICA
gICAgICAyNDMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTAsXG4gICAgICAgIDIyMixcbiAgI
CAgICAgMTY5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTY3LFxu
ICAgICAgICAyNixcbiAgICAgICAgNzksXG4gICAgICAgIDE2MixcbiAgICAgICAgODMsXG4gI
CAgICAgIDIzNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDUsXG4gI
CAgICAgIDE1MixcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY
1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG
4gICAgICAgIDE2NCxcbiAgICAgICAgNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTEsXG
4gICAgICAgIDY4LFxuICAgICAgICAxNixcbiAgICAgICAgNzYsXG4gICAgICAgIDEzNCxcbiAg
ICAgICAgMjMwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjUsXG4g
ICAgICAgIDEyNixcbiAgICAgICAgMTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQ4LFxuI
CAgICAgICA4NyxcbiAgICAgICAgODMsXG4gICAgICAgIDExMixcbiAgICAgICAgMzEsXG4gI
CAgICAgIDEwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTUxLFxuI
CAgICAgICAxMDgsXG4gICAgICAgIDU3LFxuICAgICAgICA5MyxcbiAgICAgICAgMjQ3LFxuI
CAgICAgICAxNDcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg1LFxuICAgICAgICA3OVxu
ICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5U
GFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZ
mZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMj
QzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIyLFxuICAgICA
gICAgIDEyMixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDQ
3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxOTcsXG4gICAgI
CAgICAgMTUxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxO
DksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAzLFxuICAgIC
AgICAgIDEyOCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgM
TAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxODAsXG4gI
CAgICAgICAgMTM5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgI
DQ1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfSx
cbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gIC
AgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEyOSxcbiAgIC
AgICAgICA3MSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI
xNSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMjYsXG4gICAgI
CAgICAgMTc3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDYwLF
xuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjUwLFxuICAgIC
AgICAgIDE0OCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMT
YsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA5MSxcbiAgICA
gICAgICAyOCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMT
kzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIwNixcbiAgICAgIC
AgICAyLFxuICAgICAgICAgIDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJ
zaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcIm
RhdGFcIjogW1xuICAgICAgICAzOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAzMCxcbiAgIC
AgICAgMjUyLFxuICAgICAgICAxNixcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDUsXG4gIC
AgICAgIDQyLFxuICAgICAgICAyNixcbiAgICAgICAgMjYsXG4gICAgICAgIDE0MixcbiAgICAgI
CAgMjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODEsXG4gICA
gICAgIDUxLFxuICAgICAgICA4NyxcbiAgICAgICAgNSxcbiAgICAgICAgMTE5LFxuICAgICAgI
CAyNDEsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDgsXG4gICAgICA
gIDEyMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjksXG4gICAgICAgIDI2LFxuICAgICAgI
CAxMTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzksXG4gICAgI
CAgIDUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDg0LFxuICAgICAgI
CAyMjksXG4gICAgICAgIDkxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTIwLFxuICAgICAgIC
AyNixcbiAgICAgICAgMzMsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjgsXG4gICAgICAgID
E1MixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzksXG4gICAgICAgIDI0OSxcbiAgICAgICA
gMzQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAg
NjcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNCxcbiAgICAgICAgM
jI5LFxuICAgICAgICA5OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDkwLFxuICAgICAgICAyMT
ksXG4gICAgICAgIDExNixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjksXG4gICAgICAgIDEz
OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0
cmF0aW9uSWRcIjogNzQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwid2g0ZUp6NWtCNnpQ
M3RiMVl0OVIwUXhDR3lNU0M3MzFvWEdmOHk0bEVCdz1cIixcbiAgXCJwcm9jZXNzZWRI
aXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJ
yZW1vdGVKaWRcIjogXCIyNTQ3MDg1ODM4MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAg
ICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkREQjE0QTM1MjM5MD
A5ODJEMDY1N0IwMzM5NEUwOTcyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW
1lc3RhbXBcIjogMTcyMDAxMzM2N1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xu
ICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDcwODU4MzgxM0BzLndoYXRzYXBwLm5ldFw
iLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMDBFOUE2
ODlEMDc1QzFDQzkxMEZCODQzM0RERkU4QjRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2
FnZVRpbWVzdGFtcFwiOiAxNzIwMDEzMzY4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVL
ZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXC
JhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuIC
AgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkto
V1JTbGNNUjRTUVV3S2padEhzZ2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDg1MzRkZDMtMT
NlOC00MmJhLTk1ZmUtZDQwOWRiY2NjNGI4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4
gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNS
xcbiAgICAgIDE4OCxcbiAgICAgIDIzOSxcbiAgICAgIDE1MCxcbiAgICAgIDEyNyxcbiAgICAgI
DEzLFxuICAgICAgMTYsXG4gICAgICAyMCxcbiAgICAgIDY5LFxuICAgICAgMTA3LFxuICAg
ICAgMjQwLFxuICAgICAgMTg0LFxuICAgICAgMzMsXG4gICAgICAxOSxcbiAgICAgIDY3LFx
uICAgICAgMTIwLFxuICAgICAgMTU3LFxuICAgICAgMTU3LFxuICAgICAgMTU3LFxuICAgI
CAgMTcxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3
VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbX
G4gICAgICAyMjksXG4gICAgICAxMzksXG4gICAgICA2NCxcbiAgICAgIDExNCxcbiAgICAgI
DIyMixcbiAgICAgIDIzNSxcbiAgICAgIDE4MCxcbiAgICAgIDIwOCxcbiAgICAgIDI4LFxuICAgI
CAgMTAzLFxuICAgICAgOTEsXG4gICAgICAyMzgsXG4gICAgICAxMzUsXG4gICAgICA4My
xcbiAgICAgIDE5MixcbiAgICAgIDcwLFxuICAgICAgNzAsXG4gICAgICA1MSxcbiAgICAgIDI0
NSxcbiAgICAgIDE5NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIF
wiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xta29vNEdFTEdrbGJRR0dB
RWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNUZTZ1BkR1drQ
1hpVDdYZytlZnU5U2hYdnN5bzlDNzRCbmNQeVYydUJHQT1cIixcbiAgICBcImFjY291bnRTa
WduYXR1cmVcIjogXCI4YU1wVDFhUC8rMk92VnBuQWtNanBJMVEwU0R0dzFCa3JNWkdl
UjRtMmJmelRnMzc3cDdzdVFma2FzbHlpRFZvWkQ4c2tRbVZmbUdDeVpPai92Z2pBdz09X
CIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJoekd5NlNpYy9nM1BKVUprSlM4a2
N5b2ZXRjlxcC81OVZHRnN2WC9pOHdxbngvR3daeVcva0cxbjRsTi9PUnFNeDNjQktTcjlLO
UI3cVViL09rdTdnZz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcw
ODU4MzgxMzo3OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIktPT0tZXCIs
XG4gICAgXCJsaWRcIjogXCI3MjYwMjQ0NTk1NTEzNTo3OUBsaWRcIlxuICB9LFxuICBcInN
pZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gIC
AgICAgIFwibmFtZVwiOiBcIjI1NDcwODU4MzgxMzo3OUBzLndoYXRzYXBwLm5ldFwiLFxuI
CAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXl
cIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IF
tcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgI
CAxNjAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE1MCxc
biAgICAgICAgICAxNDQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjI2LFxuICAgICAgI
CAgIDc5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjQ5L
FxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjQ1LFxuICAgIC
AgICAgIDQwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMD
QsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA0NixcbiAgICA
gICAgICAyNDgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTU
sXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE3NCxcbiAgICAgI
CAgICA0LFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG
4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW
1wXCI6IDE3MjAwMTMzNjUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPbFRcIl
xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9sVC5qc29uIjogIntcImtleURhdGFc
IjpcIksvWkhKMHpzWEhCM0FnQk9kaVIvY0NJbGZPdXo4WHF4VndDeE5YYjdzMjQ9XCIsX
CJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTY0MDUzNDU4NSxcImN1cnJlbnRJbmRleFwi
OjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwMDEz
MzY2MjAyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ KOOKY²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "KOOKY",
  packname: process.env.PACK_NAME || "KOOKY",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "KOOKY",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
