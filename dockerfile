FROM node:18

RUN apt-get update && apt-get install -y mariadb-client

WORKDIR /dakee

COPY front-end/package*.json ./front-end/
COPY front-end/yarn.lock ./front-end/

COPY back-end/package*.json ./back-end/
COPY back-end/yarn.lock ./back-end/

RUN cd front-end && yarn install && yarn build
RUN cd back-end && yarn install

COPY front-end ./front-end
COPY back-end ./back-end

EXPOSE 3000
EXPOSE 5000

# ENV MARIADB_ROOT_PASSWORD="dev1234"
# ENV MARIADB_DATABASE="dakee"
# ENV MARIADB_USER="dev"
# ENV MARIADB_PASSWORD="dev1234"

# CMD sh -c "service mariadb start && cd front-end && yarn start & cd back-end && yarn start"
CMD sh -c "cd front-end && yarn start"