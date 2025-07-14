# Étape 1 : builder avec Node
FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

# Lancement du lint (fail si erreur)
RUN npm run lint

# Build de l'app React
RUN npm run build

# Étape 2 : image finale nginx qui sert les fichiers statiques
FROM nginx:stable-alpine

COPY --from=builder /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
