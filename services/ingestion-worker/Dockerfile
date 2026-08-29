FROM node:20-alpine AS builder

WORKDIR /app

# Copia pacchetto contracts condiviso
COPY packages/contracts ./packages/contracts
RUN cd packages/contracts && npm install && npm run build

# Copia servizio Ingestion Worker
WORKDIR /app/services/ingestion-worker
COPY services/ingestion-worker/package*.json ./
COPY services/ingestion-worker/prisma ./prisma/
COPY services/ingestion-worker/prisma.config.ts ./

RUN npm install --legacy-peer-deps

COPY services/ingestion-worker ./

RUN npm run prisma:generate
RUN npm run build

FROM node:20-alpine AS runner

WORKDIR /app

COPY --from=builder /app/packages/contracts/dist /app/packages/contracts/dist
COPY --from=builder /app/packages/contracts/package.json /app/packages/contracts/package.json

WORKDIR /app/services/ingestion-worker

COPY --from=builder /app/services/ingestion-worker/package*.json ./
COPY --from=builder /app/services/ingestion-worker/node_modules ./node_modules
COPY --from=builder /app/services/ingestion-worker/dist ./dist
COPY --from=builder /app/services/ingestion-worker/prisma ./prisma
COPY --from=builder /app/services/ingestion-worker/prisma.config.ts ./prisma.config.ts

CMD ["node", "dist/src/main"]
