
const express = require('express');
const router = express.Router();
const Payment = require('../models/Payment');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const paypal = require('paypal-rest-sdk');

paypal.configure({
  mode: 'sandbox', // Change to 'live' for production
  client_id: process.env.PAYPAL_CLIENT_ID,
  client_secret: process.env.PAYPAL_CLIENT_SECRET
});

// Create Stripe payment intent
router.post('/stripe', async (req, res) => {
  const { amount, userId } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // amount in cents
      currency: 'usd',
      metadata: { integration_check: 'accept_a_payment' }
    });

    // Save payment details in MongoDB
    const payment = new Payment({
      userId,
      amount,
      method: 'Stripe',
      transactionId: paymentIntent.id
    });
    await payment.save();

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create PayPal payment
router.post('/paypal', async (req, res) => {
  const { amount, userId } = req.body;

  const create_payment_json = {
    intent: 'sale',
    payer: { payment_method: 'paypal' },
    redirect_urls: {
      return_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cancel'
    },
    transactions: [{
      item_list: { items: [{ name: 'item', price: amount, currency: 'USD', quantity: 1 }] },
      amount: { currency: 'USD', total: amount },
      description: 'This is the payment description.'
    }]
  };

  paypal.payment.create(create_payment_json, async (error, payment) => {
    if (error) {
      res.status(500).json({ error: error.response });
    } else {
      // Save payment details in MongoDB
      const paymentDoc = new Payment({
        userId,
        amount,
        method: 'PayPal',
        transactionId: payment.id
      });
      await paymentDoc.save();

      res.json({ approvalUrl: payment.links.find(link => link.rel === 'approval_url').href });
    }
  });
});

// module.exports = router;
