# Install deps locally
install-deps:
	cd front-end && yarn install; cd ../back-end && yarn install; cat .env.example > .env

run-local:
	cd front-end && yarn dev & cd back-end && yarn dev

# Run docker 
build:
	docker build -t dakee .

run:
	docker run --rm -it -p 3000:3000 dakee
