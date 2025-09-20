require('dotenv').config()
const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, makeInMemoryStore } = require('@whiskeysockets/baileys')
const pino = require('pino')
const fs = require('fs')
const path = require('path')
const { owner, botName, sessionFile, prefix } = require('./config')

async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState(sessionFile)
  const { version, isLatest } = await fetchLatestBaileysVersion()
  console.log(`Using WA version vversion.join('.'), isLatest:{isLatest}`)

  const sock = makeWASocket({
    version,
    logger: pino({ level: 'silent' }),
    printQRInTerminal: true,
    auth: state
  })

  sock.ev.on('creds.update', saveCreds)

  const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
  store.bind(sock.ev)

  sock.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect } = update
    if(connection === 'close') {
      if((lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut) {
        startBot()
      } else {
        console.log('Déconnecté. Reconnecte manuellement.')
      }
    } else if(connection === 'open') {
      console.log(`botName connecté avec succès ¡)
    )

  sock.ev.on('messages.upsert', async ( messages, type ) => {
    if(type !== 'notify') return
    const msg = messages[0]
    if(!msg.message || msg.key.fromMe) return

    const text = msg.message.conversation || msg.message.extendedTextMessage?.text
    if(!text) return

    if(!text.startsWith(prefix)) return

    const command = text.slice(prefix.length).trim().split(' ')[0].toLowerCase()
    const args = text.trim().split(' ').slice(1)

    try 
      const commandFile = require(`./commands/{command}.js`)
      await commandFile.run(sock, msg, args)
    } catch (err) {
      await sock.sendMessage(msg.key.remoteJid, { text: `Commande inconnue : ${command}` })
    }
  })
sock.ev.on('messages.update', async (updates) => {
  for (const update of updates) {
    if (update.messageStubType === 68 && update.key && !update.key.fromMe) {
      const jid = update.key.remoteJid
      const sender = update.key.participant || jid
      await sock.sendMessage(jid, {
        text: `🛑 *Message supprimé détecté*\n👤 De: ${sender}`
      })
    }
  }
})
startBot()
