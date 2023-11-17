import { Head } from '@inertiajs/react'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout'
import { PageProps } from '../types'
import TextInput from '@/Components/TextInput'
import { Loader } from '@mantine/core'
import SearchIcon from '@/icons/SearchIcon'
import { useEffect, useState } from 'react'
import { IContact } from '@/Components/Contacts/types'
import Contact from '@/Components/Contacts/Contact'
import axios from 'axios'

const Contacts = ({ auth }: PageProps) => {
	const [contacts, setContacts] = useState<IContact[]>([])

	useEffect(() => {
		const fetchContacts = async () => {
			try {
				const response = await axios.get('http://localhost:3030/api/contacts')
				setContacts(response.data)
			} catch (error) {
				console.error('Error fetching users:', error)
			}
		}

		fetchContacts()
	}, [])

	return (
		<AuthenticatedLayout user={auth.user}>
			<Head title="Contacts" />

			<section className="h-full py-12">
				<div className="flex h-full rounded-xl bg-white">
					<aside className="w-1/4 rounded-l-xl bg-gradient-to-b from-cyan-600 to-blue-500  text-white">
						<div className="relative flex pl-12 pt-4">
							<SearchIcon className="absolute top-1/3" />
							<TextInput
								className="grow border-0 border-b-2 border-white bg-transparent pb-6 pl-8"
								placeholder="Search..."
							/>
						</div>

						{contacts.length ? (
							<ul className="py-4">
								{contacts.map((contact) =>
									contact.id != auth.user.id ? (
										<Contact
											key={contact.id}
											contact={contact}
										/>
									) : null
								)}
							</ul>
						) : (
							<div className="flex h-5/6 w-full items-center justify-center">
								<Loader
									type="bars"
									size="xl"
									color="white"
								/>
							</div>
						)}
					</aside>
					<div className="grow">user profile</div>
				</div>
			</section>
		</AuthenticatedLayout>
	)
}

export default Contacts
