module.exports = {
  run: async (sock, msg, args) => {
    await sock.sendMessage(msg.key.remoteJid, { text: '🏓 Pong ZEUS_X !' })
  }
}
