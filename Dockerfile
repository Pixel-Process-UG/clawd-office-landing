# Stage 1: Install dependencies
FROM node:22-bookworm-slim AS deps
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci --no-audit --no-fund

# Stage 2: Build the application
FROM node:22-bookworm-slim AS builder
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci --no-audit --no-fund

COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

RUN npm run build

# Stage 3: Production runtime
FROM node:22-bookworm-slim AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

RUN mkdir .next && chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

CMD ["node", "server.js"]
