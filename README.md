# Plotline Frontend Assignment

Submitted by Aman Kumar (102006154)

Deployed Link: https://amaranth-grasshopper-sari.cyclic.app/

It is a node server coupled with frontend in React to for a functional billing system with immersive user experience. The backend is connected to MongoDB as a database. The platform is calculating taxes as indicated in the problem statement, with showing total bill and individual total amount of every product after adding all the taxes and price.

## Features

It has endpoints to use these functionalities:

- Create an account
- Fetch all the products and services
- Add a product or service to cart
- Delete a product or service from cart
- View total bill(along with taxes, quantity and inidividual total amount of a product)
- Admins service(so that admin can add product and services to the platform)

## How to run

Step 1: In root dir and client dir run the following command

```javascript
npm install
```

Step 2: In root dir(The command will run the server on http://localhost:4000)

```javascript
nodemon server
```

## Admin and User credentials

#### Admin

- email: admin@gmail.com
- password: plotlineadmin

### User

User can signup and create a new profile or can even use the following one to login directly.

- email: user@gmail.com
- password: 12345678
