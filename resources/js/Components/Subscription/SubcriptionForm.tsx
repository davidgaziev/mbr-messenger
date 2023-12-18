import React, { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import axios from 'axios'
import { Loader } from '@mantine/core'
import NavLink from '../NavLink'
import route from 'ziggy-js'

const stripePromise = loadStripe('your-stripe-publishable-key')

const SubscriptionForm = () => {
	const stripe = useStripe()
	const elements = useElements()
	const [loading, setLoading] = useState(false)
	const [purchaseSuccessful, setPurchaseSuccessful] = useState(true)

	const handleSubmit = async (event) => {
		event.preventDefault()

		if (!stripe || !elements) {
			// Stripe.js has not yet loaded.
			return
		}

		setLoading(true)

		const { paymentMethod, error } = await stripe.createPaymentMethod({
			type: 'card',
			card: elements.getElement(CardElement) as any
		})

		if (error) {
			console.error(error)
			setLoading(false)
			return
		}

		try {
			const response = await axios.post('/subscribe', {
				payment_method: paymentMethod.id
			})

			if (response.status == 200) {
				setPurchaseSuccessful(true)
			}
		} catch (error) {
			console.error(error)
		}

		setLoading(false)
	}

	return (
		<>
			{purchaseSuccessful ? (
				<div className="text-center">
					<h2 className="mb-4 text-2xl font-semibold">You are subscribed!</h2>
					<p className="text-gray-600">Thank you.</p>
					<NavLink
						href="chat"
						active={route().current('chat')}
						className="text-gray-600"
					>
						Go back.
					</NavLink>
				</div>
			) : (
				<form
					onSubmit={handleSubmit}
					className="mx-auto mt-8 max-w-sm rounded-md bg-white p-6 shadow-md"
				>
					<div className="mb-4">
						<label
							htmlFor="card"
							className="text-gray-600"
						>
							Карта
						</label>
						<CardElement
							id="card"
							className="mt-2 rounded-md border border-gray-300 p-2"
						/>
					</div>

					<button
						type="submit"
						disabled={loading}
						className="w-full rounded-md bg-blue-500 px-4 py-2 text-white"
					>
						{loading ? (
							<Loader
								size="sm"
								color="white"
							/>
						) : (
							'Оплатить'
						)}
					</button>
				</form>
			)}
		</>
	)
}

export default SubscriptionForm
