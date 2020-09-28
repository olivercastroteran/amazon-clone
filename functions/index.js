//const { response, request } = require('express');
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51HW9jiHlSfG5NgkZ2sNkbdMmHUBCBVOdcPflJOeHvmEdidLmYNMnmdlrGt0oc1kqlAzEwFcxjjI4dkCnN3Uw3RGy00s5ILrn2z'
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;

  console.log('Payment recieved: ', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
  });

  // OK created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// example endpoint
// http://localhost:5001/clone-41942/us-central1/api
