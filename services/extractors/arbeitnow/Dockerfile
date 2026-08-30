FROM node:20-alpine AS builder

WORKDIR /app

# 1. Copia solo manifest per cache npm install
COPY packages/contracts/package*.json ./packages/contracts/
COPY services/extractors/arbeitnow/package*.json ./services/extractors/arbeitnow/
COPY services/extractors/arbeitnow/prisma ./services/extractors/arbeitnow/prisma/
COPY services/extractors/arbeitnow/prisma.config.ts ./services/extractors/arbeitnow/

RUN --mount=type=cache,target=/root/.npm \
    cd packages/contracts && npm install

WORKDIR /app/services/extractors/arbeitnow
RUN --mount=type=cache,target=/root/.npm \
    npm install --legacy-peer-deps

RUN npm link /app/packages/contracts

# 2. Copia sorgenti e build
WORKDIR /app
COPY packages/contracts ./packages/contracts
RUN cd packages/contracts && npm run build

WORKDIR /app/services/extractors/arbeitnow
COPY services/extractors/arbeitnow ./

RUN --mount=type=cache,target=/root/.cache/prisma \
    npm run prisma:generate

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
