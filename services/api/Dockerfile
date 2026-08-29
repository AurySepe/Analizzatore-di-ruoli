FROM node:20-alpine AS builder

WORKDIR /app

# Copia pacchetti condivisi
COPY packages/contracts ./packages/contracts
RUN cd packages/contracts && npm install && npm run build

COPY packages/database ./packages/database
RUN cd packages/database && npm install && npm run prisma:generate && npm run build

# Copia servizio API
WORKDIR /app/services/api
COPY services/api/package*.json ./

RUN npm install --legacy-peer-deps
RUN npm link /app/packages/contracts /app/packages/database

COPY services/api ./

RUN npm link /app/packages/contracts /app/packages/database
RUN npm run build

FROM node:20-alpine AS runner

WORKDIR /app

COPY --from=builder /app/packages/contracts/dist /app/packages/contracts/dist
COPY --from=builder /app/packages/contracts/package.json /app/packages/contracts/package.json
COPY --from=builder /app/packages/database/dist /app/packages/database/dist
COPY --from=builder /app/packages/database/package.json /app/packages/database/package.json
COPY --from=builder /app/packages/database/node_modules /app/packages/database/node_modules

WORKDIR /app/services/api

COPY --from=builder /app/services/api/package*.json ./
COPY --from=builder /app/services/api/node_modules ./node_modules
COPY --from=builder /app/services/api/dist ./dist

EXPOSE 3000

CMD ["node", "dist/main"]
