FROM node:16.13.2-stretch as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run config -- --environment=prod && npm run build

#Segunda Etapa
FROM nginx:1.17.10-perl
	#Si estas utilizando otra aplicacion cambia PokeApp por el nombre de tu app
COPY --from=build-step /app/dist/tfgangular /usr/share/nginx/html
