const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Payment = require('../models/Payment'); // Adjust path if necessary
const User = require('../models/User'); // Adjust path if necessary

// Create a new payment
const createPayment = async (req, res) => {
    const { userId, amount, method, transactionId } = req.body;

    try {
        // Create a charge using Stripe
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount * 100, // Amount in cents
            currency: 'usd',
            payment_method: method,
            confirm: true,
        });

        // Save payment details to the database
        const payment = new Payment({
            userId,
            amount,
            method: 'Stripe',
            status: 'completed',
            transactionId: paymentIntent.id,
            createdAt: new Date(),
            updatedAt: new Date()
        });

        await payment.save();

        res.status(200).json({ success: true, payment });
    } catch (error) {
        console.error('Stripe payment error:', error);
        res.status(500).json({ success: false, message: 'Payment failed' });
    }
};

module.exports = { createPayment };
