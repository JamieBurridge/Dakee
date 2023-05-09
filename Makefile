build:
	docker build -t dakee .

run:
	docker run --rm -it -p 3000:3000 dakee
