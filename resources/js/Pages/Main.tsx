import React from 'react'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout'
import { PageProps } from '../types'
import { Head } from '@inertiajs/react'

export default function Main({ auth }: PageProps) {
	return (
		<AuthenticatedLayout user={auth.user}>
			<Head title="Home"></Head>
		</AuthenticatedLayout>
	)
}
