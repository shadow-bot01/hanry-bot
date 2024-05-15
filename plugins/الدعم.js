import axios from "axios"
let handler = async (m, {command, conn, usedPrefix}) => {
let res = (await axios.get(`https://telegra.ph/file/dfdc38c860b90c280e0ef.jpg`)).data  
let haha = await res[Math.floor(res.length * Math.random())]    
conn.sendFile(m.chat, haha, 'error.jpg', `

*∞┇━━━ •『☘️』• ━━━┇∞*
*〖 https://wa.me/+201153573240 〗*


*〖https://whatsapp.com/channel/0029VaZThPH2UPBBFmyXPf1o 〗*

*〖https://chat.whatsapp.com/DpPhnhTY50z2pl6F1N9XBP 〗*
*〖https://chat.whatsapp.com/G94gOeTIZy03Ulsu05IkfX 〗*

*∞┇━━━ •『☘️』• ━━━┇∞* `, m)
}
handler.command = handler.help = ['سورس','الدعم']
handler.tags = ['kaneki']
export default handler
