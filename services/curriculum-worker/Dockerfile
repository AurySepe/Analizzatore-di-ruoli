FROM node:20-alpine AS builder

WORKDIR /app

# Copia pacchetto contracts condiviso
COPY packages/contracts ./packages/contracts
RUN cd packages/contracts && npm install && npm run build

# Copia servizio Curriculum Worker
WORKDIR /app/services/curriculum-worker
COPY services/curriculum-worker/package*.json ./
COPY services/curriculum-worker/prisma ./prisma/
COPY services/curriculum-worker/prisma.config.ts ./

RUN npm install --legacy-peer-deps
RUN npm link /app/packages/contracts

COPY services/curriculum-worker ./

RUN npm link /app/packages/contracts
RUN npm run prisma:generate
RUN npm run build

FROM node:20-alpine AS runner

# Installazione dipendenze di sistema necessarie per Chromium / Puppeteer
RUN apk add --no-cache \
      chromium \
      nss \
      freetype \
      harfbuzz \
      ca-certificates \
      ttf-freefont

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

WORKDIR /app

COPY --from=builder /app/packages/contracts/dist /app/packages/contracts/dist
COPY --from=builder /app/packages/contracts/package.json /app/packages/contracts/package.json

WORKDIR /app/services/curriculum-worker

COPY --from=builder /app/services/curriculum-worker/package*.json ./
COPY --from=builder /app/services/curriculum-worker/node_modules ./node_modules
COPY --from=builder /app/services/curriculum-worker/dist ./dist
COPY --from=builder /app/services/curriculum-worker/prisma ./prisma
COPY --from=builder /app/services/curriculum-worker/prisma.config.ts ./prisma.config.ts
COPY --from=builder /app/services/curriculum-worker/src/templates ./dist/templates

CMD ["node", "dist/src/main"]
