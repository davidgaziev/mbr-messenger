import { Head } from '@inertiajs/react'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout'
import { PageProps } from '../types'
import TextInput from '@/Components/TextInput'
import { Loader } from '@mantine/core'
import SearchIcon from '@/icons/SearchIcon'
import { useEffect, useState } from 'react'
import { IContact, Status } from '@/Components/Contacts/types'
import Contact from '@/Components/Contacts/Contact'
import ContactCard from '@/Components/Contacts/ContactCard'
import axios from 'axios'
import { log } from 'console'

const Contacts = ({ auth }: PageProps) => {
	const [contacts, setContacts] = useState<IContact[]>([])
	const [userContacts, setUserContacts] = useState<IContact[]>([])
	const [contact, setContact] = useState<IContact>()
	const [requestStatus, setRequestStatus] = useState<Status>()
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const fetchContacts = async () => {
			try {
				const response = await axios.get('/api/contacts', {
					params: { userID: auth.user.id }
				})
				setContacts(response.data)
			} catch (error) {
				console.error('Error fetching users:', error)
			}
		}
		fetchContacts()
	}, [])

	useEffect(() => {
		if (auth.user.contacts.length > 2 && contacts.length) {
			getUserContacts()
		}
	}, [contacts])

	const selectContact = async (requester: number, addressee: number) => {
		setContact(undefined)
		setRequestStatus(undefined)
		setLoading(true)

		try {
			const response = await axios.get('/api/has-request', {
				params: { requester: requester, addressee: addressee }
			})

			setRequestStatus(response.data.status)
			setLoading(false)
		} catch (error) {
			console.error('Error fetching status:', error)
		}
	}

	const getUserContacts = () => {
		let userContacts = []
		const userContactsID = auth.user.contacts
			.slice(1, -1)
			.split('')
			.map((c) => Number(c))

		console.log(userContactsID)

		for (let i = 0; i < userContactsID.length; i++) {
			for (let j = 0; j < contacts.length; j++) {
				if (contacts[j].id == userContactsID[i]) {
					userContacts.push(contacts[j])
				}
			}
		}

		setUserContacts(userContacts)
	}

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
							<>
								<ul className="py-4">
									{contacts.map((contact) =>
										contact.id != auth.user.id ? (
											<Contact
												key={contact.id}
												contact={contact}
												onClick={() => {
													selectContact(auth.user.id, contact.id)
													setContact(contact)
												}}
											/>
										) : null
									)}
								</ul>
								<div>
									<h2 className="flex justify-center text-xl font-bold">
										Ваши контакты
									</h2>
									{userContacts.length ? (
										<ul>
											{userContacts.map((c) => (
												<Contact
													key={c.id}
													contact={c}
													onClick={() => {
														setRequestStatus('contacted')
														setContact(c)
													}}
												/>
											))}
										</ul>
									) : (
										<p>У вас нет контактов</p>
									)}
								</div>
							</>
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
					{!loading ? (
						contact && requestStatus ? (
							<ContactCard
								user={auth.user}
								contact={contact}
								status={requestStatus}
								setStatus={setRequestStatus}
								afterAcceptHandle={getUserContacts}
							/>
						) : null
					) : (
						<div className="flex w-3/4 items-center justify-center">
							<Loader
								type="bars"
								size="xl"
								color="blue"
							/>
						</div>
					)}
				</div>
			</section>
		</AuthenticatedLayout>
	)
}

export default Contacts
