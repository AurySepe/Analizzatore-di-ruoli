FROM node:22-alpine AS builder

WORKDIR /app
RUN corepack enable && corepack prepare pnpm@latest --activate

# 1. Copia manifest e pnpm workspace config
COPY pnpm-workspace.yaml package.json ./
COPY packages/contracts/package*.json ./packages/contracts/
COPY services/extractors/arbeitnow/package*.json ./services/extractors/arbeitnow/
COPY services/extractors/arbeitnow/prisma ./services/extractors/arbeitnow/prisma/
COPY services/extractors/arbeitnow/prisma.config.ts ./services/extractors/arbeitnow/

# 2. Installazione dipendenze con cache mount BuildKit di pnpm
RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store \
    pnpm install --prod=false --filter @analizzatore/extractor-arbeitnow...

# 3. Copia contratti e compilazione
COPY packages/contracts ./packages/contracts
RUN pnpm --filter @analizzatore/contracts run build

WORKDIR /app/services/extractors/arbeitnow
COPY services/extractors/arbeitnow ./

RUN --mount=type=cache,target=/root/.cache/prisma \
    pnpm run prisma:generate

RUN pnpm run build

FROM node:22-alpine AS runner

WORKDIR /app
RUN corepack enable && corepack prepare pnpm@latest --activate
ENV PATH="/app/services/extractors/arbeitnow/node_modules/.bin:/app/node_modules/.bin:${PATH}"
ENV NODE_PATH="/app/node_modules:/app/node_modules/.pnpm/node_modules"

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/packages/contracts/dist /app/packages/contracts/dist
COPY --from=builder /app/packages/contracts/package.json /app/packages/contracts/package.json

WORKDIR /app/services/extractors/arbeitnow

COPY --from=builder /app/services/extractors/arbeitnow/package*.json ./
COPY --from=builder /app/services/extractors/arbeitnow/node_modules ./node_modules
COPY --from=builder /app/services/extractors/arbeitnow/dist ./dist
COPY --from=builder /app/services/extractors/arbeitnow/src/generated ./src/generated
COPY --from=builder /app/services/extractors/arbeitnow/src/generated ./dist/generated
COPY --from=builder /app/services/extractors/arbeitnow/prisma ./prisma
COPY --from=builder /app/services/extractors/arbeitnow/prisma.config.ts ./prisma.config.ts

CMD ["node", "dist/main"]
