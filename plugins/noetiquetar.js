let handler = async (m, { conn, usedPrefix, command, paypal }) => {
conn.sendMessage(m.chat, {text:'*[ ⚠️ ] no etiquetes a unos de mis creadores si tienes alguna consulta o duda hablale a su privado solo por tema de FRANCO BOT*'},  { quoted: m })
}
handler.help = ['pagina']
handler.tags = ['info']
handler.command = /^@+56972773196$/i
export default handler
