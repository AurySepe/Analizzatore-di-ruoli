FROM node:20-alpine AS builder

WORKDIR /app

# Installazione Chromium e font di sistema
RUN apk add --no-cache \
      chromium \
      nss \
      freetype \
      harfbuzz \
      ca-certificates \
      ttf-freefont

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

# Copia pacchetti condivisi
COPY packages/contracts ./packages/contracts
RUN cd packages/contracts && npm install && npm run build

COPY packages/database ./packages/database
RUN cd packages/database && npm install && npm run prisma:generate && npm run build

# Copia servizio Curriculum Worker
WORKDIR /app/services/curriculum-worker
COPY services/curriculum-worker/package*.json ./

RUN npm install --legacy-peer-deps
RUN npm link /app/packages/contracts /app/packages/database

COPY services/curriculum-worker ./

RUN npm link /app/packages/contracts /app/packages/database
RUN npm run build

FROM node:20-alpine AS runner

WORKDIR /app

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
COPY --from=builder /app/packages/database/package.json /app/packages/database/package.json
COPY --from=builder /app/packages/database/node_modules /app/packages/database/node_modules

WORKDIR /app/services/curriculum-worker

COPY --from=builder /app/services/curriculum-worker/package*.json ./
COPY --from=builder /app/services/curriculum-worker/node_modules ./node_modules
COPY --from=builder /app/services/curriculum-worker/dist ./dist
COPY --from=builder /app/services/curriculum-worker/src/templates ./dist/templates

CMD ["node", "dist/main"]
