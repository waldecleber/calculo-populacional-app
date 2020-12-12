FROM node:12.16.1-alpine as angular
WORKDIR /app
COPY package.json /app
RUN npm install --silent
COPY . .
RUN npm run build --prod

FROM nginx:1.15.8-alpine
#VOLUME [ "/var/cache/nginx" ]
COPY --from=angular app/dist/calculo-populacional-app /usr/share/nginx/html

#COPY config/nginx.conf /etc/nginx/conf.d/default.conf