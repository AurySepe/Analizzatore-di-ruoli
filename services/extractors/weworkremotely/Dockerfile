FROM node:20-alpine AS builder

WORKDIR /app

# Copia pacchetto contracts condiviso
COPY packages/contracts ./packages/contracts
RUN cd packages/contracts && npm install && npm run build

# Copia servizio WeWorkRemotely
WORKDIR /app/services/extractors/weworkremotely
COPY services/extractors/weworkremotely/package*.json ./
COPY services/extractors/weworkremotely/prisma ./prisma/
COPY services/extractors/weworkremotely/prisma.config.ts ./

RUN npm install --legacy-peer-deps
RUN npm link /app/packages/contracts

COPY services/extractors/weworkremotely ./

RUN npm link /app/packages/contracts
RUN npm run prisma:generate
RUN npm run build

FROM node:20-alpine AS runner

WORKDIR /app

COPY --from=builder /app/packages/contracts/dist /app/packages/contracts/dist
COPY --from=builder /app/packages/contracts/package.json /app/packages/contracts/package.json

WORKDIR /app/services/extractors/weworkremotely

COPY --from=builder /app/services/extractors/weworkremotely/package*.json ./
COPY --from=builder /app/services/extractors/weworkremotely/node_modules ./node_modules
COPY --from=builder /app/services/extractors/weworkremotely/dist ./dist
COPY --from=builder /app/services/extractors/weworkremotely/prisma ./prisma
COPY --from=builder /app/services/extractors/weworkremotely/prisma.config.ts ./prisma.config.ts

CMD ["node", "dist/src/main"]
