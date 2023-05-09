FROM node:18

RUN apt-get update && apt-get install -y mariadb-client

WORKDIR /dakee

RUN mkdir front-end

COPY front-end/package*.json ./front-end
COPY front-end/yarn.lock ./front-end

COPY front-end ./front-end

RUN cd front-end && yarn install && yarn build

EXPOSE 3000

CMD sh -c "cd front-end && yarn start"