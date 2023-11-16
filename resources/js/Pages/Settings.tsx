import React from 'react'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout'
import { PageProps } from '../types'

const Settings = ({ auth }: PageProps) => {
	return (
		<AuthenticatedLayout user={auth.user}>
			<div>Settings</div>
		</AuthenticatedLayout>
	)
}

export default Settings
