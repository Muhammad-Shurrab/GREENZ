import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

// Initialize Stripe
const stripePromise = loadStripe("pk_test_51PnmyzLnJej27waJMLMa1v5bytDTIMqPrzKtmEsLslorjlsqAe7WKblwcWJ8ZKyKcixgSPtuPQVp5nW9tRTt44s400crytM4qt");

const PaymentForm = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const stripe = useStripe();
    const elements = useElements();

    const handlePayment = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        if (!stripe || !elements) {
            setError('Stripe or elements not loaded');
            setLoading(false);
            return;
        }

        const { paymentMethod, error } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });

        if (error) {
            setError(error.message);
            setLoading(false);
        } else {
            const response = await fetch('http://localhost:5000/api/payments/stripe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId: 'user-id',
                    amount: 10.00, // Amount in dollars
                    method: paymentMethod.id,
                    transactionId: paymentMethod.id
                }),
            });

            const result = await response.json();
            if (result.success) {
                setSuccess('Payment successful');
            } else {
                setError('Payment failed');
            }
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Payment Form</h2>
            <form onSubmit={handlePayment}>
                <div className="mb-4">
                    <label htmlFor="card-element" className="block text-gray-700">Card Details</label>
                    <CardElement className="mt-2 p-2 border border-gray-300 rounded-md" />
                </div>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                {success && <p className="text-green-500 mb-4">{success}</p>}
                <button
                    type="submit"
                    className={`w-full py-2 px-4 rounded-md ${loading ? 'bg-gray-400' : 'bg-blue-500'} text-white font-semibold`}
                    disabled={loading}
                >
                    {loading ? 'Processing...' : 'Pay Now'}
                </button>
            </form>
        </div>
    );
};

const Payment = () => (
    <Elements stripe={stripePromise}>
        <PaymentForm />
    </Elements>
);

export default Payment;
