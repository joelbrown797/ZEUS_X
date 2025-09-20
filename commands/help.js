module.exports = {
  run: async (sock, msg, args) => {
    const helpText = `
🤖 *ZEUS_X - Commandes disponibles*:
• !ping - Test de connexion
• !like - Like le statut
• !regarder - Regarde un statut
• !ouvrir - Ouvre vues uniques
• !help - Affiche ce menu
    `
    await sock.sendMessage(msg.key.remoteJid, { text: helpText })
  }
}
