module.exports = {
  run: async (sock, msg, args) => {
    await sock.sendMessage(msg.key.remoteJid, { text: '⚠️ Ouvrir les vues uniques n’est pas encore disponible.' })
  }
}
