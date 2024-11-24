import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Make sure to use your own public Stripe key
const stripePromise = loadStripe('your-stripe-public-key');

const Checkout = () => {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('stripe');
  const navigate = useNavigate();

  const handlePayment = async () => {
    try {
      if (paymentMethod === 'stripe') {
        const { data } = await axios.post('http://localhost:5000/api/payment/stripe', { amount, userId: 'user-id' });
        const { clientSecret } = data;
        const stripe = await stripePromise;
        const { error } = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: {
              number: '4242424242424242', // Test card number
              exp_month: '12',
              exp_year: '2024',
              cvc: '123'
            }
          }
        });

        if (error) {
          console.error('Payment failed:', error);
        } else {
          navigate('/success');
        }
      } else if (paymentMethod === 'paypal') {
        const { data } = await axios.post('http://localhost:5000/api/payment/paypal', { amount, userId: 'user-id' });
        window.location.href = data.approvalUrl;
      }
    } catch (error) {
      console.error('Payment error:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <div className="mb-4">
        <label className="block text-lg font-medium">Amount</label>
        <input
          type="number"
          className="mt-1 p-2 border rounded w-full"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-lg font-medium">Payment Method</label>
        <select
          className="mt-1 p-2 border rounded w-full"
          value={paymentMethod}
          onChange={e => setPaymentMethod(e.target.value)}
        >
          <option value="stripe">Stripe</option>
          <option value="paypal">PayPal</option>
        </select>
      </div>
      <button
        onClick={handlePayment}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
      >
        Pay Now
      </button>
    </div>
  );
};

export default Checkout;
