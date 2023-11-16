import React from 'react'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout'
import { PageProps } from '../types'

const Contacts = ({ auth }: PageProps) => {
	return (
		<AuthenticatedLayout user={auth.user}>
			<div>Contacts</div>
		</AuthenticatedLayout>
	)
}

export default Contacts
