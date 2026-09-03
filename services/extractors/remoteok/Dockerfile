FROM node:22-alpine AS builder

WORKDIR /app
RUN corepack enable && corepack prepare pnpm@latest --activate

# 1. Copia manifest e pnpm workspace config
COPY pnpm-workspace.yaml package.json ./
COPY packages/contracts/package*.json ./packages/contracts/
COPY services/extractors/remoteok/package*.json ./services/extractors/remoteok/
COPY services/extractors/remoteok/prisma ./services/extractors/remoteok/prisma/
COPY services/extractors/remoteok/prisma.config.ts ./services/extractors/remoteok/

# 2. Installazione dipendenze con cache mount BuildKit di pnpm
RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store \
    pnpm install --prod=false --filter @analizzatore/extractor-remoteok...

# 3. Copia contratti e compilazione
COPY packages/contracts ./packages/contracts
RUN pnpm --filter @analizzatore/contracts run build

WORKDIR /app/services/extractors/remoteok
COPY services/extractors/remoteok ./

RUN --mount=type=cache,target=/root/.cache/prisma \
    pnpm run prisma:generate

RUN pnpm run build

FROM node:22-alpine AS runner

WORKDIR /app
RUN corepack enable && corepack prepare pnpm@latest --activate
ENV PATH="/app/services/extractors/remoteok/node_modules/.bin:/app/node_modules/.bin:${PATH}"
ENV NODE_PATH="/app/node_modules:/app/node_modules/.pnpm/node_modules"

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/packages/contracts/dist /app/packages/contracts/dist
COPY --from=builder /app/packages/contracts/package.json /app/packages/contracts/package.json

WORKDIR /app/services/extractors/remoteok

COPY --from=builder /app/services/extractors/remoteok/package*.json ./
COPY --from=builder /app/services/extractors/remoteok/node_modules ./node_modules
COPY --from=builder /app/services/extractors/remoteok/dist ./dist
COPY --from=builder /app/services/extractors/remoteok/src/generated ./src/generated
COPY --from=builder /app/services/extractors/remoteok/src/generated ./dist/generated
COPY --from=builder /app/services/extractors/remoteok/prisma ./prisma
COPY --from=builder /app/services/extractors/remoteok/prisma.config.ts ./prisma.config.ts

CMD ["node", "dist/main"]
