# Build environment
FROM node:lts-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm i --force
COPY . ./
RUN npm run build
# Alteração: Copiar os arquivos da pasta dist para uma nova pasta chamada "build"
RUN mkdir build
RUN cp -R dist/sg-extension/* build/

# Production environment
FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/nginx.conf
# Alteração: Remover a cópia do arquivo index.html, pois agora será copiado junto com a pasta build
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 81
CMD ["nginx", "-g", "daemon off;"]

