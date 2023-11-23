import { Head, Link } from '@inertiajs/react'
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
	const [contact, setContact] = useState<IContact | null>(null)

	useEffect(() => {
		const fetchContacts = async () => {
			try {
				const response = await axios.get('/api/contacts')
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
											onClick={() => setContact(contact)}
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
					{contact ? (
						<div className="flex grow flex-col items-center justify-center px-12 py-20">
							<div className="h-3/4 w-2/5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-500 text-white">
								<div
									className="after:content-[' '] relative flex flex-col items-center pb-4 pt-8 after:absolute after:bottom-1 after:h-2 
													after:w-full after:border after:border-cyan-800 after:bg-cyan-800 after:opacity-50"
								>
									<img
										className="w-24 rounded-full"
										src={contact.avatar_url}
										alt=""
									/>
									<h2 className="py-2 text-3xl font-medium">{contact.name}</h2>
								</div>

								<div className="px-16">
									{contact.bio ? (
										<div className="my-4 leading-5">
											<p className="text-lg leading-5">{contact.bio}</p>
											<span className="text-sm font-medium text-gray-500">
												Bio
											</span>
										</div>
									) : null}

									<div className="my-4 leading-5">
										<p className="text-lg">@{contact.login}</p>
										<span className="text-sm font-medium text-gray-500">
											Username
										</span>
									</div>
								</div>

								<div
									className="hover:after:content-[' '] relative px-16 after:cursor-pointer hover:after:absolute hover:after:-bottom-1 hover:after:left-0 hover:after:w-full 
									hover:after:border hover:after:border-cyan-800 hover:after:bg-cyan-800 hover:after:py-4 hover:after:opacity-50"
								>
									<button className="font-medium ">ADD TO CONTACTS</button>
								</div>
							</div>
						</div>
					) : null}
				</div>
			</section>
		</AuthenticatedLayout>
	)
}

export default Contacts
