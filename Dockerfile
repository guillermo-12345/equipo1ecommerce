# Usamos una imagen base para Node.js
FROM node:18

# Configuramos el directorio de trabajo
WORKDIR /app

# Copiamos el package.json y package-lock.json desde la raíz
COPY package.json package-lock.json ./ 

# Instalamos las dependencias generales del proyecto (backend y frontend)
RUN npm install

# Copiamos todo el código fuente
COPY . . 

# Construimos la aplicación front-end
WORKDIR /app/frontEnd
RUN npm install
RUN npm run build

# Volvemos al directorio raíz para el back-end
WORKDIR /app/backEnd
RUN npm install  # Aseguramos que las dependencias del backend estén instaladas

# Exponemos el puerto en el que el servidor va a correr (puerto 3000 para Express)
EXPOSE 3000

# Comando para iniciar el back-end
CMD ["npm", "start"]
