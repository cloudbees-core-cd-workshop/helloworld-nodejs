FROM node:10.9.0-alpine

RUN npm install express

EXPOSE 8080

COPY hello.js .

CMD node hello.js
