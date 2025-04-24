# 1. Basis-Image
FROM node:18-alpine

# 2. Arbeitsverzeichnis
WORKDIR /app

# 3. Abhängigkeiten installieren
COPY package*.json ./
RUN npm install

# 4. Code kopieren und builden
COPY . .
RUN npm run build

# 5. Production-Server starten (Next.js)
ENV NODE_ENV=production
EXPOSE 3000
CMD ["npm", "start"]
