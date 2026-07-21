# Utiliser une image de base Node.js LTS récente et stable (version 20).
# 'node:20-alpine' utilisera la dernière version de patch, ce qui est recommandé pour la compatibilité.
FROM node:20-alpine

# Définir le répertoire de travail dans le conteneur pour les commandes suivantes.
WORKDIR /app

# Copier les fichiers de définition des dépendances.
# L'utilisation de 'package*.json' copie à la fois package.json et package-lock.json,
# assurant des installations de dépendances reproductibles.
COPY package*.json ./

# Installer git, qui semble être requis par une de vos dépendances.
RUN apk add --no-cache git

# Augmenter le timeout pour npm afin d'éviter les erreurs sur les réseaux plus lents.
RUN npm config set fetch-timeout 600000

# Installer les dépendances du projet.
RUN npm install

# Copier le reste du code source de l'application dans le conteneur.
COPY . .

# L'application React est généralement servie sur le port 3000 en développement.
EXPOSE 3000

# Commande pour démarrer l'application en utilisant le serveur de développement.
CMD ["npm", "start"]
