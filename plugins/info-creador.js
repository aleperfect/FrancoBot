const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `*𝙼𝙸 𝙲𝚁𝙴𝙰𝙳𝙾𝚁 𝐅𝐑𝐀𝐍𝐂𝐎 𝗕𝗢𝗧*

*Para mas informacion acerca del bot contactame*`.trim();
  const buttonMessage= {
    'document': {url: `https://www.instagram.com/707_franco_28`},
    'mimetype': `application/${document}`,
    'fileName': `FRANCO BOT`, 
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': 'https://www.instagram.com/707_franco_28',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': 'FRANCO BOT',
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'https://www.instagram.com/707_franco_28'}},
    'caption': text,
    'footer': wm,
    // 'buttons':[
    // {buttonId: `${usedPrefix}menu`, buttonText: {displayText: '𝙼𝙴𝙽𝚄'}, type: 1},
    // {buttonId: `${usedPrefix}donar`, buttonText: {displayText: '𝙳𝙾𝙽𝙰𝚁'}, type: 1}],
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.help = ['owner', 'creator'];
handler.tags = ['info'];
handler.command = /^(owner|creator|creador|propietario)$/i;
export default handler;