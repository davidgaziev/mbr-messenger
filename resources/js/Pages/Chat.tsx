import AuthenticatedLayout from '../Layouts/AuthenticatedLayout'
import { PageProps } from '../types'
import { Head } from '@inertiajs/react'
import SearchIcon from '@/icons/SearchIcon'
import TextInput from '@/Components/TextInput'
import Contact from '@/Components/Contacts/Contact'
import { IContact } from '@/Components/Contacts/types'
import ChatCard from '@/Components/Chat/ChatCard'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Loader } from '@mantine/core'

const Chat = ({ auth }: PageProps) => {
	const [loading, setLoading] = useState(false)
	const [userContacts, setUserContacts] = useState<IContact[]>([])
	const [contacts, setContacts] = useState<IContact[]>([])
	const [chatContact, setChatContact] = useState<IContact>()

	useEffect(() => {
		setLoading(true)

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
		const getUserContacts = () => {
			let userContacts = []
			const userContactsID = auth.user.contacts
				.slice(1, -1)
				.split('')
				.map((c) => Number(c))

			for (let i = 0; i < userContactsID.length; i++) {
				for (let j = 0; j < contacts.length; j++) {
					if (contacts[j].id == userContactsID[i]) {
						userContacts.push(contacts[j])
					}
				}
			}
			setUserContacts(userContacts)
		}

		if (auth.user.contacts.length > 2) {
			getUserContacts()
			setLoading(false)
		}
	}, [contacts])

	return (
		<AuthenticatedLayout user={auth.user}>
			<Head title="Chat" />

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
						{loading ? (
							<Loader
								type="bars"
								size="xl"
								color="white"
							/>
						) : userContacts.length ? (
							<ul>
								{userContacts.map((c) => (
									<Contact
										key={c.id}
										contact={c}
										onClick={() => setChatContact(c)}
									/>
								))}
							</ul>
						) : (
							<p>У вас нет контактов</p>
						)}
					</aside>
					{chatContact ? <ChatCard contact={chatContact} /> : null}
				</div>
			</section>
		</AuthenticatedLayout>
	)
}

export default Chat
