FROM node:20-alpine AS builder

WORKDIR /app

# Copia pacchetto contracts condiviso
COPY packages/contracts ./packages/contracts
RUN cd packages/contracts && npm install && npm run build

# Copia servizio Arbeitnow
WORKDIR /app/services/extractors/arbeitnow
COPY services/extractors/arbeitnow/package*.json ./
COPY services/extractors/arbeitnow/prisma ./prisma/
COPY services/extractors/arbeitnow/prisma.config.ts ./

RUN npm install --legacy-peer-deps

COPY services/extractors/arbeitnow ./

RUN npm run prisma:generate
RUN npm run build

FROM node:20-alpine AS runner

WORKDIR /app

COPY --from=builder /app/packages/contracts/dist /app/packages/contracts/dist
COPY --from=builder /app/packages/contracts/package.json /app/packages/contracts/package.json

WORKDIR /app/services/extractors/arbeitnow

COPY --from=builder /app/services/extractors/arbeitnow/package*.json ./
COPY --from=builder /app/services/extractors/arbeitnow/node_modules ./node_modules
COPY --from=builder /app/services/extractors/arbeitnow/dist ./dist
COPY --from=builder /app/services/extractors/arbeitnow/src/generated ./src/generated
COPY --from=builder /app/services/extractors/arbeitnow/src/generated ./dist/src/generated
COPY --from=builder /app/services/extractors/arbeitnow/prisma ./prisma
COPY --from=builder /app/services/extractors/arbeitnow/prisma.config.ts ./prisma.config.ts

CMD ["node", "dist/src/main"]
