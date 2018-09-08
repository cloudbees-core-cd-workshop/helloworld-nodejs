FROM node:10.9.0-alpine

RUN npm install express
RUN npm install pug --save

EXPOSE 8080

COPY hello.js .

CMD node hello.js
