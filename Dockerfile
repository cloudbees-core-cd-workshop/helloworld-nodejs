FROM node:10.9.0-alpine

RUN npm install express
RUN npm install pug --save

ARG buildNumber

ENV BUILD_NUMBER $buildNumber

EXPOSE 8080

ADD views ./views 

COPY hello.js .

CMD node hello.js
