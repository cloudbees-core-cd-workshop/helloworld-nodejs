FROM node:10.9.0-alpine

RUN npm install express
RUN npm install pug --save

ARG buildNumber="NOT_SET"

ENV BUILD_NUMBER $buildNumber

EXPOSE 8080

COPY views ./views 

COPY hello.css .
COPY hello.js .

CMD node hello.js
