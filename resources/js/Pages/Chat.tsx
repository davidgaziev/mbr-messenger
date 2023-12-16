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
	const [chatId, setChatId] = useState<null | number>(0)
	const [userContacts, setUserContacts] = useState<IContact[]>([])
	const [contacts, setContacts] = useState<IContact[]>([])
	const [chatContact, setChatContact] = useState<IContact>()

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
		setLoading(true)
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

		if (auth.user.contacts.length > 2 && contacts.length) {
			getUserContacts()
			setLoading(false)
		}
	}, [contacts])

	const getChat = async (chatID: number) => {
		try {
			setChatId(null)
			const response = await axios.get(`/api/chats/${chatID}`)
			if (response.data.error) {
				return false
			} else return response.data.chat_id
		} catch (error) {
			console.error('Error fetching users:', error)
		}
	}

	const createChat = async (chatID: number) => {
		try {
			const response = await axios.post('/api/chats', {
				id: chatID
			})
			if (response.data.chat_id) return response.data.chat_id
		} catch (e) {
			console.error('Error creating chat', e)
		}
		return false
	}

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
							<div className="flex h-5/6 w-full items-center justify-center">
								<Loader
									type="bars"
									size="xl"
									color="white"
								/>
							</div>
						) : userContacts.length ? (
							<ul>
								{userContacts.map((c) => (
									<Contact
										key={c.id}
										contact={c}
										onClick={async () => {
											setChatContact(c)
											const chat1 = await getChat(c.id)
											const chat2 = await getChat(auth.user.id)
											if (chat1 || chat2) {
												const chatID = chat1 ? chat1 : chat2
												setChatId(chatID)
											} else {
												setChatId(await createChat(c.id))
											}
										}}
									/>
								))}
							</ul>
						) : (
							<div className="flex h-5/6 w-full items-center justify-center">
								<p>У вас нет контактов</p>
							</div>
						)}
					</aside>
					{chatContact ? (
						chatId == null ? (
							<div className="flex w-3/4 items-center justify-center">
								<Loader
									type="bars"
									size="xl"
									color="blue"
								/>
							</div>
						) : (
							<ChatCard
								contact={chatContact}
								chatID={chatId}
								user={auth.user}
							/>
						)
					) : null}
				</div>
			</section>
		</AuthenticatedLayout>
	)
}

export default Chat
