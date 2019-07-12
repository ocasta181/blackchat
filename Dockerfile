FROM node:10.16.0-jessie

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

ENV NAME blackchat

CMD ["node", "start"]