# Usa una imagen base oficial de Node.js
FROM node:18

# Crea un directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos de package.json y package-lock.json al contenedor
COPY package*.json ./

# Instala las dependencias de Node.js
RUN npm install

# Copia el resto del código al contenedor
COPY . .

# Expone el puerto 3000 (puerto en el que tu app corre)
EXPOSE 3000

# Comando para iniciar la app cuando el contenedor arranque
CMD ["node", "server.js"]
