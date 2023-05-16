FROM node:18

RUN apt-get update && apt-get install -y mariadb-client

WORKDIR /dakee

RUN mkdir front-end
RUN mkdir back-end

COPY front-end/package*.json ./front-end
COPY front-end/yarn.lock ./front-end

COPY back-end/package.json ./back-end
COPY back-end/yarn.lock ./back-end

COPY front-end ./front-end
COPY back-end ./back-end

RUN cd front-end && yarn install && yarn build
RUN cd back-end && yarn install

COPY back-end/init.sql /docker-entrypoint-initdb.d/

RUN /etc/init.d/mariadb-client start && mariadb-client -u root < /docker-entrypoint-initdb.d/init.sql

EXPOSE 3000
EXPOSE 3306
EXPOSE 5000

CMD sh -c "cd front-end && yarn start & cd back-end && yarn start & wait"