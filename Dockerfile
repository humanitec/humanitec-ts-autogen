FROM node:16-alpine

RUN apk add --no-cache openjdk17

COPY package.json package-lock.json /app/

WORKDIR /app

RUN --mount=type=cache,target=/root/.npm \
  npm ci
