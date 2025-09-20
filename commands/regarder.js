module.exports = {
  run: async (sock, msg, args) => {
    await sock.readMessages([msg.key])
    await sock.sendMessage(msg.key.remoteJid, { text: '👁️ Statut regardé.' })
  }
}
