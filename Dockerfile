# Usa una imagen base con Node.js
FROM node:14

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos necesarios al contenedor
COPY package.json .
COPY index.js .

# Instala las dependencias
RUN npm install

# Expone el puerto utilizado por tu aplicación (ajusta según sea necesario)
EXPOSE 3000

# Comando para ejecutar la aplicación cuando el contenedor se inicia
CMD ["node", "index.js"]
