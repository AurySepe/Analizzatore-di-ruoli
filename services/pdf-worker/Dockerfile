FROM node:22-alpine AS builder

WORKDIR /app
RUN corepack enable && corepack prepare pnpm@latest --activate

# 1. Installazione Chromium e font di sistema
RUN apk add --no-cache \
      chromium \
      nss \
      freetype \
      harfbuzz \
      ca-certificates \
      ttf-freefont

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

# 2. Copia manifest pacchetti per massimizzare cache pnpm
COPY pnpm-workspace.yaml package.json ./
COPY packages/contracts/package*.json ./packages/contracts/
COPY packages/database/package*.json ./packages/database/
COPY services/pdf-worker/package*.json ./services/pdf-worker/

RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store \
    pnpm install --prod=false --filter @analizzatore/pdf-worker...

# 3. Copia codice sorgente e build
COPY packages/contracts ./packages/contracts
RUN pnpm --filter @analizzatore/contracts run build

COPY packages/database ./packages/database
RUN --mount=type=cache,target=/root/.cache/prisma \
    pnpm --filter @analizzatore/database run prisma:generate && \
    pnpm --filter @analizzatore/database run build

WORKDIR /app/services/pdf-worker
COPY services/pdf-worker ./
RUN pnpm run build

FROM node:22-alpine AS runner

WORKDIR /app
RUN corepack enable && corepack prepare pnpm@latest --activate

RUN apk add --no-cache \
      chromium \
      nss \
      freetype \
      harfbuzz \
      ca-certificates \
      ttf-freefont

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser
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

WORKDIR /app/services/pdf-worker

COPY --from=builder /app/services/pdf-worker/package*.json ./
COPY --from=builder /app/services/pdf-worker/node_modules ./node_modules
COPY --from=builder /app/services/pdf-worker/dist ./dist
COPY --from=builder /app/services/pdf-worker/src/templates ./dist/templates

CMD ["node", "dist/main"]
