import React from 'react'
import { PageProps } from '../types'
import { Head } from '@inertiajs/react'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout'

const Subscription = ({ auth }: PageProps) => {
	return (
		<AuthenticatedLayout user={auth.user}>
			<Head title="Buy a subscription" />
		</AuthenticatedLayout>
	)
}

export default Subscription
