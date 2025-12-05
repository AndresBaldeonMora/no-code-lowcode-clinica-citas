FROM node:18-alpine

WORKDIR /app

# Copiar package.json desde la carpeta backend
COPY backend/package*.json ./

RUN npm install

# Copiar todo el backend
COPY backend ./

EXPOSE 3000

CMD ["node", "server.js"]
