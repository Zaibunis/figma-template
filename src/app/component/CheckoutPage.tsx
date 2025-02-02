'use client'
import { useState, useEffect } from 'react'
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js'
import convertToSubCurrency from '../lib/ConvertToSubCurrency'

const CheckoutPage = ({ amount }: { amount: number }) => {
    const [myhost, setMyHost] = useState<string | null>(null);
    
    useEffect(() => {
        if (typeof window !== "undefined") {
            setMyHost(window.location.host);
        }
    }, []);

    let URL = myhost === 'localhost:3000' ? 'http://localhost:3000' : 'https://stripe-payment-one-nu.vercel.app';

    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setError] = useState<string>();
    const [clientSecret, setClientSecret] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch('/api/payment-intent', { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount: convertToSubCurrency(amount) }),
        })
        .then(res => res.json())
        .then(data => {
            if (data.clientSecret) {
                setClientSecret(data.clientSecret);
                console.log("✅ Client Secret received:", data.clientSecret);
            } else {
                console.error("❌ Error: clientSecret not received", data);
            }
        })
        .catch(error => console.error("❌ Error fetching payment intent:", error));
    }, [amount]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        if (!stripe || !elements || !clientSecret) {
            console.error("❌ Stripe.js not ready or clientSecret missing");
            setError("Payment system is not initialized. Please try again.");
            setLoading(false);
            return;
        }

        console.log("🟢 Submitting Payment:", clientSecret);

        const { error: submitErrors } = await elements.submit();
        if (submitErrors) {
            setError(submitErrors.message);
            setLoading(false);
            return;
        }

        const { error } = await stripe.confirmPayment({
            elements,
            clientSecret,
            confirmParams: { return_url: `${URL}/payment-success?amount=${amount}` }, // FIXED: Removed extra space before /payment-success
        });

        if (error) {
            setError(error.message);
            console.error("❌ Payment Error:", error);
        } else {
            setError('');
        }

        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} className='p-8'>
            {clientSecret ? <PaymentElement /> : <p>Loading payment form...</p>}
            <button 
                className='w-full bg-black text-white py-2 mt-5' 
                disabled={!stripe || !elements || !clientSecret || loading}
            >
                {loading ? 'Thank You' : 'Pay Now'}
            </button>
            {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        </form>
    );
};

export default CheckoutPage;