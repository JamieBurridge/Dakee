# Install deps locally
install-deps:
	cd front-end && yarn install; cd ../back-end && yarn install; cat .env.example > .env

run-local:
	cd front-end && yarn dev & cd back-end && yarn dev

# Run docker 
run:
	docker-compose up