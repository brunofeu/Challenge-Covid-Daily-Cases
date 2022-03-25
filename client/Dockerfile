FROM node:16-alpine

WORKDIR /app

ENV HTTP_PROXY="http://127.0.0.1:3001"

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]