# Usamos una imagen base para Node.js
FROM node:18

# Configuramos el directorio de trabajo
WORKDIR /app

# Copiamos los archivos package.json y package-lock.json del front-end al contenedor
COPY frontEnd/package.json ./frontEnd/package.json
COPY frontEnd/package-lock.json ./frontEnd/package-lock.json

# Copiamos toda la carpeta frontEnd al contenedor
COPY frontEnd /app/frontEnd/

# Instalamos las dependencias del front-end
WORKDIR /app/frontEnd
RUN npm install

# Construimos la aplicación front-end
RUN npm run build

# Volvemos al directorio raíz para el back-end
WORKDIR /app/backEnd

# Copiamos los archivos package.json y package-lock.json del back-end al contenedor
COPY backEnd/package.json ./backEnd/package.json
COPY backEnd/package-lock.json ./backEnd/package-lock.json

# Copiamos toda la carpeta backEnd al contenedor
COPY backEnd /app/backEnd/

# Instalamos las dependencias del back-end
RUN npm install

# Exponemos el puerto en el que el servidor va a correr (puerto 3000 para Express)
EXPOSE 3000

# Comando para iniciar el backend (sin espera a la base de datos)
CMD ["npm", "start"]
