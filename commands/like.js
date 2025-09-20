module.exports = {
  run: async (sock, msg, args) => {
    const emojis = ['❤️', '🔥', '👍', '😂', '😍', '💯']
    const emoji = emojis[Math.floor(Math.random() * emojis.length)]
    await sock.sendMessage(msg.key.remoteJid, { react: { text: emoji, key: msg.key } })
  }
}

