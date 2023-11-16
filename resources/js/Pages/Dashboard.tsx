import { Head, useForm, usePage } from '@inertiajs/react'
import React from 'react'
import { PageProps } from '../types'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout'

export default function Dashboard({ auth }: PageProps) {
	return (
		<AuthenticatedLayout user={auth.user}>
			<Head title="Dashboard" />

			<div className="flex flex-col gap-2 py-12">
				<div className="mx-auto flex max-w-7xl justify-center sm:px-6 lg:px-8">
					<div className="w-fit overflow-hidden bg-white shadow-sm sm:rounded-lg">
						<div className="w-full p-6 text-gray-900"></div>
					</div>
				</div>

				<div className="mx-auto flex max-w-7xl justify-center sm:px-6 lg:px-8">
					<div className="w-fit overflow-hidden bg-white shadow-sm sm:rounded-lg">
						<div className="w-full p-6 text-gray-900"></div>
					</div>
				</div>
			</div>
		</AuthenticatedLayout>
	)
}
