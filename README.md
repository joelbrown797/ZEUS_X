Voici un README.md simple et clair pour ton bot ZEUS_X :

---

ZEUS_X - Bot WhatsApp Public

Description  
Bot WhatsApp complet avec commandes avancées, basé sur Baileys.  
Nom du bot : *ZEUS_X*  

---

Installation  

1. Clone ce repo ou crée-le avec les fichiers fournis  
2. Installe les dépendances avec :  
   ```bash
   npm install
   ```  
3. Lance le bot :  
   ```bash
   node index.js
   ```  
4. Scanne le QR code dans la console avec ton WhatsApp pour connecter le bot  

---

Commandes disponibles (avec préfixe `!`)  

- `!ping` : Vérifier que le bot répond  
- `!antidelete` : Activer la détection de message supprimé  
- `!like` : Liker un statut  
- `!openviews` : Ouvrir les vues sur un statut  

---

Configuration  

Modifie le fichier `config.js` pour changer :  
- Le numéro du propriétaire  
- Le nom du bot  
- Le préfixe des commandes  
- Le fichier de session  

---

Notes  

- Le bot sauvegarde automatiquement ta session dans `session.json`  
- En cas de déconnexion non volontaire, le bot tente de se reconnecter automatiquement  

---

Si tu veux ajouter plus de commandes, crée un fichier `.js` dans le dossier `commands/` avec une fonction `run(sock, msg, args)` exportée.

---
