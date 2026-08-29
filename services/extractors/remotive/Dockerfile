FROM node:20-alpine AS builder

WORKDIR /app

# Copia pacchetto contracts condiviso
COPY packages/contracts ./packages/contracts
RUN cd packages/contracts && npm install && npm run build

# Copia servizio Remotive
WORKDIR /app/services/extractors/remotive
COPY services/extractors/remotive/package*.json ./
COPY services/extractors/remotive/prisma ./prisma/
COPY services/extractors/remotive/prisma.config.ts ./

RUN npm install --legacy-peer-deps
RUN npm link /app/packages/contracts

COPY services/extractors/remotive ./

RUN npm link /app/packages/contracts
RUN npm run prisma:generate
RUN npm run build

FROM node:20-alpine AS runner

WORKDIR /app

COPY --from=builder /app/packages/contracts/dist /app/packages/contracts/dist
COPY --from=builder /app/packages/contracts/package.json /app/packages/contracts/package.json

WORKDIR /app/services/extractors/remotive

COPY --from=builder /app/services/extractors/remotive/package*.json ./
COPY --from=builder /app/services/extractors/remotive/node_modules ./node_modules
COPY --from=builder /app/services/extractors/remotive/dist ./dist
COPY --from=builder /app/services/extractors/remotive/prisma ./prisma
COPY --from=builder /app/services/extractors/remotive/prisma.config.ts ./prisma.config.ts

CMD ["node", "dist/src/main"]
