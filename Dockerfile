# Estágio de Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json .
# LINHA REMOVIDA: COPY package-lock.json .
RUN npm install
COPY . .
RUN npm run build

# Estágio de Produção
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["node", "dist/main.js"]

