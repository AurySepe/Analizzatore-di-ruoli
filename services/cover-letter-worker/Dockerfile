FROM node:20-alpine AS builder

WORKDIR /app

# 1. Copia solo manifest per cache npm install
COPY packages/contracts/package*.json ./packages/contracts/
COPY packages/database/package*.json ./packages/database/
COPY services/cover-letter-worker/package*.json ./services/cover-letter-worker/

# 2. Installazione dipendenze con cache mount BuildKit
RUN --mount=type=cache,target=/root/.npm \
    cd packages/contracts && npm install

RUN --mount=type=cache,target=/root/.npm \
    cd packages/database && npm install

WORKDIR /app/services/cover-letter-worker
RUN --mount=type=cache,target=/root/.npm \
    npm install --legacy-peer-deps

RUN npm link /app/packages/contracts /app/packages/database

# 3. Copia codice sorgente e compilazione
WORKDIR /app
COPY packages/contracts ./packages/contracts
RUN cd packages/contracts && npm run build

COPY packages/database ./packages/database
RUN --mount=type=cache,target=/root/.cache/prisma \
    cd packages/database && npm run prisma:generate && npm run build

WORKDIR /app/services/cover-letter-worker
COPY services/cover-letter-worker ./
RUN npm run build

FROM node:20-alpine AS runner

WORKDIR /app

# Installazione Chromium e font per Puppeteer
RUN apk add --no-cache \
    chromium \
    nss \
    freetype \
    harfbuzz \
    ca-certificates \
    ttf-freefont

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

COPY --from=builder /app/packages/contracts/dist /app/packages/contracts/dist
COPY --from=builder /app/packages/contracts/package.json /app/packages/contracts/package.json
COPY --from=builder /app/packages/database/dist /app/packages/database/dist
COPY --from=builder /app/packages/database/client /app/packages/database/client
COPY --from=builder /app/packages/database/package.json /app/packages/database/package.json
COPY --from=builder /app/packages/database/node_modules /app/packages/database/node_modules

WORKDIR /app/services/cover-letter-worker

COPY --from=builder /app/services/cover-letter-worker/package*.json ./
COPY --from=builder /app/services/cover-letter-worker/node_modules ./node_modules
COPY --from=builder /app/services/cover-letter-worker/dist ./dist

CMD ["node", "dist/main"]
