FROM node:20-alpine AS builder

WORKDIR /app

# 1. Copia solo manifest per cache npm install
COPY packages/contracts/package*.json ./packages/contracts/
COPY services/extractors/himalayas/package*.json ./services/extractors/himalayas/
COPY services/extractors/himalayas/prisma ./services/extractors/himalayas/prisma/
COPY services/extractors/himalayas/prisma.config.ts ./services/extractors/himalayas/

RUN --mount=type=cache,target=/root/.npm \
    cd packages/contracts && npm install

WORKDIR /app/services/extractors/himalayas
RUN --mount=type=cache,target=/root/.npm \
    npm install --legacy-peer-deps

RUN npm link /app/packages/contracts

# 2. Copia sorgenti e build
WORKDIR /app
COPY packages/contracts ./packages/contracts
RUN cd packages/contracts && npm run build

WORKDIR /app/services/extractors/himalayas
COPY services/extractors/himalayas ./

RUN --mount=type=cache,target=/root/.cache/prisma \
    npm run prisma:generate

RUN npm run build

FROM node:20-alpine AS runner

WORKDIR /app

COPY --from=builder /app/packages/contracts/dist /app/packages/contracts/dist
COPY --from=builder /app/packages/contracts/package.json /app/packages/contracts/package.json

WORKDIR /app/services/extractors/himalayas

COPY --from=builder /app/services/extractors/himalayas/package*.json ./
COPY --from=builder /app/services/extractors/himalayas/node_modules ./node_modules
COPY --from=builder /app/services/extractors/himalayas/dist ./dist
COPY --from=builder /app/services/extractors/himalayas/src/generated ./src/generated
COPY --from=builder /app/services/extractors/himalayas/src/generated ./dist/src/generated
COPY --from=builder /app/services/extractors/himalayas/prisma ./prisma
COPY --from=builder /app/services/extractors/himalayas/prisma.config.ts ./prisma.config.ts

CMD ["node", "dist/src/main"]
