import { googleImage, pinterest } from '@bochilteam/scraper'

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (db.data.chats[m.chat].nsfw == false && m.isGroup) return conn.sendButton(m.chat, '❗ ᴏᴘᴛɪᴏɴs ɴsғᴡ ᴅɪᴄʜᴀᴛ ɪɴɪ ʙᴇʟᴜᴍ ᴅɪɴʏᴀʟᴀᴋᴀɴ ᴏʟᴇʜ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ',wm.date, null, [['ᴇɴᴀʙʟᴇ', '.on nsfw']], m)
	
    if (!text) throw `Use example ${usedPrefix}${command} Sagiri`
    const res = await (await googleImage('rule34 ' + text)).getRandom()
    conn.sendButton(m.chat,` \`\`\`➩ Random Nsfw Rule34 ${text ? text.capitalize() : true}\`\`\` `, wm.date, res,['ɴᴇxᴛ', `.${command} ${text}`], m)
}
handler.help = ['rule34 <character>']
handler.tags = ['nsfw']
handler.command = ['rule34']
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = 1

export default handler
