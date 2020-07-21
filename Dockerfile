FROM node:lts-alpine

RUN mkdir /app
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn

COPY . .
RUN yarn build

ENV HOST 0.0.0.0

CMD ["yarn", "start"]
