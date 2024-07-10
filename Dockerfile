# Utiliser une image de base légère avec un serveur web
FROM nginx:1.21.6-alpine

ENV VERSION DEV

# Copier votre code HTML dans le répertoire par défaut de nginx
COPY . /usr/share/nginx/html

RUN sed -i 's/listen       80;/listen       8080;/g' /etc/nginx/conf.d/default.conf

# Exposer le port 80 pour que le conteneur soit accessible
EXPOSE 8080

ENV NGINX_PORT 8080


