FROM node:20-alpine AS builder

WORKDIR /app

# 1. Copia solo manifest per cache npm install
COPY packages/contracts/package*.json ./packages/contracts/
COPY services/extractors/jobicy/package*.json ./services/extractors/jobicy/
COPY services/extractors/jobicy/prisma ./services/extractors/jobicy/prisma/
COPY services/extractors/jobicy/prisma.config.ts ./services/extractors/jobicy/

RUN --mount=type=cache,target=/root/.npm \
    cd packages/contracts && npm install

WORKDIR /app/services/extractors/jobicy
RUN --mount=type=cache,target=/root/.npm \
    npm install --legacy-peer-deps

RUN npm link /app/packages/contracts

# 2. Copia sorgenti e build
WORKDIR /app
COPY packages/contracts ./packages/contracts
RUN cd packages/contracts && npm run build

WORKDIR /app/services/extractors/jobicy
COPY services/extractors/jobicy ./

RUN --mount=type=cache,target=/root/.cache/prisma \
    npm run prisma:generate

RUN npm run build

FROM node:20-alpine AS runner

WORKDIR /app

COPY --from=builder /app/packages/contracts/dist /app/packages/contracts/dist
COPY --from=builder /app/packages/contracts/package.json /app/packages/contracts/package.json

WORKDIR /app/services/extractors/jobicy

COPY --from=builder /app/services/extractors/jobicy/package*.json ./
COPY --from=builder /app/services/extractors/jobicy/node_modules ./node_modules
COPY --from=builder /app/services/extractors/jobicy/dist ./dist
COPY --from=builder /app/services/extractors/jobicy/src/generated ./src/generated
COPY --from=builder /app/services/extractors/jobicy/src/generated ./dist/src/generated
COPY --from=builder /app/services/extractors/jobicy/prisma ./prisma
COPY --from=builder /app/services/extractors/jobicy/prisma.config.ts ./prisma.config.ts

CMD ["node", "dist/src/main"]
