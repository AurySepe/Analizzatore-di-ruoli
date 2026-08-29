FROM node:20-alpine AS builder

WORKDIR /app

# Copia pacchetto contracts condiviso
COPY packages/contracts ./packages/contracts
RUN cd packages/contracts && npm install && npm run build

# Copia servizio Evaluator Worker
WORKDIR /app/services/evaluator-worker
COPY services/evaluator-worker/package*.json ./
COPY services/evaluator-worker/prisma ./prisma/
COPY services/evaluator-worker/prisma.config.ts ./

RUN npm install --legacy-peer-deps
RUN npm link /app/packages/contracts

COPY services/evaluator-worker ./

RUN npm link /app/packages/contracts
RUN npm run prisma:generate
RUN npm run build

FROM node:20-alpine AS runner

WORKDIR /app

COPY --from=builder /app/packages/contracts/dist /app/packages/contracts/dist
COPY --from=builder /app/packages/contracts/package.json /app/packages/contracts/package.json

WORKDIR /app/services/evaluator-worker

COPY --from=builder /app/services/evaluator-worker/package*.json ./
COPY --from=builder /app/services/evaluator-worker/node_modules ./node_modules
COPY --from=builder /app/services/evaluator-worker/dist ./dist
COPY --from=builder /app/services/evaluator-worker/prisma ./prisma
COPY --from=builder /app/services/evaluator-worker/prisma.config.ts ./prisma.config.ts

CMD ["node", "dist/src/main"]
