# ===== Stage 1: Build =====
FROM node:current-alpine AS builder
WORKDIR /app

# package.json & lockfile kopieren und ALLE Deps installieren
COPY package*.json ./
RUN npm ci

# Quellcode kopieren und builden
COPY . .
RUN npm run build      # hier liegt nest + ts im node_modules/.bin

# ===== Stage 2: Production Image =====
FROM node:current-alpine
WORKDIR /app

# Nur production-Deps, damit das Image klein bleibt
COPY package*.json ./
RUN npm ci --omit=dev

# Den fertiggebauten JS-Code aus der builder-Stage übernehmen
COPY --from=builder /app/dist ./dist

# (Optional) wenn du assets oder .env-Dateien brauchst, hier noch COPY …
# COPY --from=builder /app/public ./public

ENV NODE_ENV=production
EXPOSE 3001

CMD ["node", "dist/main.js"]
