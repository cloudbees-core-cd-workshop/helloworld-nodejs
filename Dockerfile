FROM node:10.9.0-alpine

RUN npm install express
RUN npm install pug --save

ARG buildNumber="NOT_SET"
ARG shortCommit="NOT_SET"

ENV BUILD_NUMBER $buildNumber
ENV SHORT_COMMIT $shortCommit

EXPOSE 8080

COPY views ./views 
COPY public ./public
COPY hello.js .

CMD node hello.js
