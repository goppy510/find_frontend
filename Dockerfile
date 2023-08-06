FROM node:17-alpine

ENV LANG C.UTF-8
ENV TZ Asia/Tokyo
ENV APP_ROOT /app

ADD ./app $APP_ROOT
WORKDIR $APP_ROOT
RUN yarn install
