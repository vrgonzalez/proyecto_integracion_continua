# Usa una imagen base de Nginx
FROM nginx:alpine

# Copia los archivos de tu proyecto al directorio donde Nginx los servirá
COPY . /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

