import fs from 'fs'

import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix: _p }) => {

let info = `Emilia Disini (｡>_<｡)`



let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'


conn.reply(m.chat, info, m, { quoted: fkontak },{ contextInfo: { externalAdReply: { showAdAttribution: true,
      mediaUrl: "https://Instagram.com/yanxd81",
      mediaType: 2,
      description: "https://Instagram.com/yanxd81", 
      title: global.titlebot,
      body: wm,
      thumbnail: thumb,
      sourceUrl: sig  }}})

}

handler.customPrefix = /^(tes|bot|emilia)$/i

handler.command = new RegExp



export default handler
