# # Usamos una imagen base para Node.js
# FROM node:18

# # Configuramos el directorio de trabajo
# WORKDIR /app

# # Copiamos los archivos package.json y package-lock.json del front-end al contenedor
# COPY frontEnd/package.json frontEnd/package-lock.json ./frontEnd/

# # Copiamos toda la carpeta frontEnd al contenedor
# COPY frontEnd /app/frontEnd/

# # Instalamos las dependencias del front-end
# WORKDIR /app/frontEnd
# RUN npm install

# # Instalar curl y wait-for-it en el contenedor backend
# RUN apt-get update && apt-get install -y curl
# RUN curl -o /wait-for-it.sh https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh && chmod +x /wait-for-it.sh


# # Construimos la aplicación front-end
# RUN npm run build

# # Volvemos al directorio raíz para el back-end
# WORKDIR /app/backEnd

# # Copiamos toda la carpeta backEnd al contenedor
# COPY backEnd /app/backEnd/

# # Instalamos las dependencias del back-end
# RUN npm install

# # Exponemos el puerto en el que el servidor va a correr (puerto 3000 para Express)
# EXPOSE 3000

# # Comando para iniciar el back-end
# CMD ["npm", "server.js"]


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

# Instalar curl y wait-for-it en el contenedor backend
RUN apt-get update && apt-get install -y curl
RUN curl -o /wait-for-it.sh https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh && chmod +x /wait-for-it.sh

# Construimos la aplicación front-end
RUN npm run build

# Volvemos al directorio raíz para el back-end
WORKDIR /app/backEnd

# Copiamos toda la carpeta backEnd al contenedor
COPY backEnd/package.json ./backEnd/package.json
COPY backEnd/package-lock.json ./backEnd/package-lock.json
COPY backEnd /app/backEnd/

# Instalamos las dependencias del back-end
RUN npm install

# Exponemos el puerto en el que el servidor va a correr (puerto 3000 para Express)
EXPOSE 3000

# Comando para iniciar el back-end
CMD ["npm", "start"]

