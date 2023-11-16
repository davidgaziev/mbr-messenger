import React from 'react'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout'
import { PageProps } from '../types'

const Notifications = ({ auth }: PageProps) => {
	return (
		<AuthenticatedLayout user={auth.user}>
			<div>Notifications</div>
		</AuthenticatedLayout>
	)
}

export default Notifications
