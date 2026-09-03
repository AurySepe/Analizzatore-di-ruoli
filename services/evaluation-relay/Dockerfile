FROM node:22-alpine AS builder

WORKDIR /app
RUN corepack enable && corepack prepare pnpm@latest --activate

# 1. Copia manifest e pnpm workspace config
COPY pnpm-workspace.yaml package.json ./
COPY packages/contracts/package*.json ./packages/contracts/
COPY packages/database/package*.json ./packages/database/
COPY services/evaluation-relay/package*.json ./services/evaluation-relay/

# 2. Installazione dipendenze con cache mount BuildKit di pnpm
RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store \
    pnpm install --prod=false --filter @analizzatore/evaluation-relay...

# 3. Copia codice sorgente e compilazione
COPY packages/contracts ./packages/contracts
RUN pnpm --filter @analizzatore/contracts run build

COPY packages/database ./packages/database
RUN --mount=type=cache,target=/root/.cache/prisma \
    pnpm --filter @analizzatore/database run prisma:generate && \
    pnpm --filter @analizzatore/database run build

WORKDIR /app/services/evaluation-relay
COPY services/evaluation-relay ./
RUN pnpm run build

FROM node:22-alpine AS runner

WORKDIR /app
RUN corepack enable && corepack prepare pnpm@latest --activate
ENV PATH="/app/packages/database/node_modules/.bin:/app/node_modules/.bin:${PATH}"
ENV NODE_PATH="/app/node_modules:/app/node_modules/.pnpm/node_modules"

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/packages/contracts/dist /app/packages/contracts/dist
COPY --from=builder /app/packages/contracts/package.json /app/packages/contracts/package.json
COPY --from=builder /app/packages/database/dist /app/packages/database/dist
COPY --from=builder /app/packages/database/client /app/packages/database/client
COPY --from=builder /app/packages/database/package.json /app/packages/database/package.json
COPY --from=builder /app/packages/database/node_modules /app/packages/database/node_modules
COPY --from=builder /app/packages/database/prisma /app/packages/database/prisma
COPY --from=builder /app/packages/database/prisma.config.ts /app/packages/database/prisma.config.ts

WORKDIR /app/services/evaluation-relay

COPY --from=builder /app/services/evaluation-relay/package*.json ./
COPY --from=builder /app/services/evaluation-relay/node_modules ./node_modules
COPY --from=builder /app/services/evaluation-relay/dist ./dist

CMD ["node", "dist/main"]
