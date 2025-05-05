# 1. Basis-Image
FROM node:current-alpine

# 2. Arbeitsverzeichnis
WORKDIR /app

# 3. Abhängigkeiten installieren
COPY package*.json ./
RUN npm install

ARG NEXT_PUBLIC_API_BASE_URL
ENV NEXT_PUBLIC_API_BASE_URL=$NEXT_PUBLIC_API_BASE_URL

# 4. Code kopieren und builden
COPY . .
RUN npm run build

# 5. Production-Server starten (Next.js)
ENV NODE_ENV=production
EXPOSE 3000
CMD ["npm", "start"]
