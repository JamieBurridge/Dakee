# Dakee

Dakee is a project built with Next.js and Express.js.

## Prerequisites to work on the project

Make sure you have the following installed:

- Node.js (version 18)
- yarn or npm (Yarn is recommended)

## Getting Started

To run the Dakee project on your local machine, follow the steps below
(docker work in progress):

1. Clone the repository:

```
git clone https://github.com/JamieBurridge/Dakee.git
```

2. Install dependencies

```
make install-deps
```

This will install the dependencies for both the **front-end** and **back-end** projects and create a **.env file**.

3. Run the project

```
make run-local
```

What ports do the projects run on?

- The front-end project runs on localhost:3000
- The back-end project runs on localhost:5000

## Documentation

The **back-end** documentation can be accessed when running the back-end server locally (**http://localhost:5000/api-docs/**)

The **front-end** documentation can be accessed by looking at the README inside the front-end folder

## Extra development info

There is also a development deployment for the front-end project on vercel (https://dakee.vercel.app/)
