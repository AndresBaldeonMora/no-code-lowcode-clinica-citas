FROM node:18-alpine

# Crear directorio de trabajo
WORKDIR /backend

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto (usa 3000 como en tu server.js)
EXPOSE 3000

# Comando de inicio
CMD ["node", "server.js"]
