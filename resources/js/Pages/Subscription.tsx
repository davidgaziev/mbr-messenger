import React from 'react'
import { PageProps } from '../types'
import { Head } from '@inertiajs/react'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import SubscriptionForm from '../Components/Subscription/SubcriptionForm'

const stripePromise = loadStripe(
	'pk_test_51ONB0UGzb4rlRPFsuG8YaZzw6wPlSGZVNoT2u7RZ0ZxX3AH1n28PV2oGCoM9BLGrXswN77ILXwfmsow4cNRRXgcI003WyuZexc'
)

const Subscription = ({ auth }: PageProps) => {
	return (
		<AuthenticatedLayout user={auth.user}>
			<Head title="Buy a subscription" />
			<section className="h-full py-12">
				<div className="h-full rounded-xl bg-white py-64">
					<Elements stripe={stripePromise}>
						<SubscriptionForm />
					</Elements>
				</div>
			</section>
		</AuthenticatedLayout>
	)
}

export default Subscription
