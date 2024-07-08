# Utiliser une image de base légère avec un serveur web
FROM nginx:alpine

# Copier votre code HTML dans le répertoire par défaut de nginx
COPY . /usr/share/nginx/html

# Exposer le port 80 pour que le conteneur soit accessible
EXPOSE 80
