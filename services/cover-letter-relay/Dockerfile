FROM node:20-alpine AS builder

WORKDIR /app

# 1. Copia solo manifest per cache npm install
COPY packages/contracts/package*.json ./packages/contracts/
COPY packages/database/package*.json ./packages/database/
COPY services/cover-letter-relay/package*.json ./services/cover-letter-relay/

# 2. Installazione dipendenze con cache mount BuildKit
RUN --mount=type=cache,target=/root/.npm \
    cd packages/contracts && npm install

RUN --mount=type=cache,target=/root/.npm \
    cd packages/database && npm install

WORKDIR /app/services/cover-letter-relay
RUN --mount=type=cache,target=/root/.npm \
    npm install --legacy-peer-deps

RUN npm link /app/packages/contracts /app/packages/database

# 3. Copia codice sorgente e compilazione
WORKDIR /app
COPY packages/contracts ./packages/contracts
RUN cd packages/contracts && npm run build

COPY packages/database ./packages/database
RUN --mount=type=cache,target=/root/.cache/prisma \
    cd packages/database && npm run prisma:generate && npm run build

WORKDIR /app/services/cover-letter-relay
COPY services/cover-letter-relay ./
RUN npm run build

FROM node:20-alpine AS runner

WORKDIR /app

COPY --from=builder /app/packages/contracts/dist /app/packages/contracts/dist
COPY --from=builder /app/packages/contracts/package.json /app/packages/contracts/package.json
COPY --from=builder /app/packages/database/dist /app/packages/database/dist
COPY --from=builder /app/packages/database/client /app/packages/database/client
COPY --from=builder /app/packages/database/package.json /app/packages/database/package.json
COPY --from=builder /app/packages/database/node_modules /app/packages/database/node_modules

WORKDIR /app/services/cover-letter-relay

COPY --from=builder /app/services/cover-letter-relay/package*.json ./
COPY --from=builder /app/services/cover-letter-relay/node_modules ./node_modules
COPY --from=builder /app/services/cover-letter-relay/dist ./dist

CMD ["node", "dist/main"]
