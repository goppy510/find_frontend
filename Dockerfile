FROM node:20-slim

ENV APP_ROOT /app
ENV LANG C.UTF-8
ENV TZ Asia/Tokyo

ADD ./app $APP_ROOT
WORKDIR $APP_ROOT

RUN npm install -g npm@10.2.0

RUN npm install
