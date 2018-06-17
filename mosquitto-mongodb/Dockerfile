FROM node:alpine

WORKDIR /mosquitto-mongodb

ADD .babelrc ./
ADD package.json ./
ADD yarn.lock ./
ADD ./src ./src

RUN mkdir build
RUN npm i -g yarn
RUN yarn install
RUN yarn build

CMD [ "yarn", "start" ]
