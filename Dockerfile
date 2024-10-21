FROM node:lts-alpine

ADD . /app/
WORKDIR /app

RUN yarn

EXPOSE 8080

# CMD ["yarn", "start"]
