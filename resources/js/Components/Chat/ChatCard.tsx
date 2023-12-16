import { FC, useEffect, useState } from 'react'
import { IContact } from '../Contacts/types'
import TextInput from '../TextInput'
import SendIcon from '@/icons/SendIcon'
import axios from 'axios'
import { Loader } from '@mantine/core'
import { Message } from './types'
import { User } from '@/types'

type messageResponse = {
	id: number
	content: string
	created_at: string
	user_id: number
	user: { avatar_url: string }
}

const ChatCard: FC<{ contact: IContact; chatID: number; user: User }> = ({
	contact,
	chatID,
	user
}) => {
	const [messages, setMessages] = useState<Message[]>([])
	const [loading, setLoading] = useState(false)
	const [sendLoading, setSendLoading] = useState(false)
	const [message, setMessage] = useState('')

	useEffect(() => {
		const getMessages = async (chatID: number) => {
			try {
				setLoading(true)
				const response = await axios
					.get(`api/chats/${chatID}/messages`)
					.then((r) =>
						r.data.map((i: messageResponse) => ({
							id: i.id,
							content: i.content,
							created_at: i.created_at,
							user_id: i.user_id,
							user_avatar: i.user.avatar_url
						}))
					)

				if (response) {
					setMessages(
						response.sort((a: Message, b: Message) => {
							const dateA = new Date(a.created_at)
							const dateB = new Date(b.created_at)

							return dateB.getTime() - dateA.getTime()
						})
					)
					console.log(messages)

					setLoading(false)
				}
			} catch (error) {
				console.error('Error fetching users:', error)
			}
		}
		getMessages(chatID)
	}, [])

	const sendMessage = async (chatID: number, content: string) => {
		if (content == '') return

		try {
			setSendLoading(true)
			const response = await axios.post(`/api/chats/${chatID}/messages`, {
				content: content,
				userID: user.id
			})
			if (response.status == 200) {
				setSendLoading(false)
				setMessages((m) => [
					{
						id: m[m.length - 1] ? m[m.length - 1].id : 1,
						content: message,
						created_at: '',
						user_avatar: user.avatar_url,
						user_id: user.id
					} as Message,
					...m
				])
				setMessage('')
			}
		} catch (e) {
			console.error('Error sending message', e)
		}
	}

	return (
		<div className="flex grow flex-col">
			<header className="flex h-32 items-center gap-2 border-b-2 px-12">
				<img
					className="w-12 rounded-full"
					src={contact.avatar_url}
					alt=""
				/>
				<p className="font-bold">{contact.name}</p>
			</header>
			<main className="flex h-full w-full flex-col-reverse rounded-md p-4">
				{loading ? (
					<div className="flex h-5/6 w-full items-center justify-center">
						<Loader
							size="xl"
							color="blue"
						/>
					</div>
				) : (
					messages.map((m) =>
						m.user_id == user.id ? (
							<div
								key={m.id}
								className="mb-2 flex justify-end"
							>
								<div className="mr-3">
									<div className="rounded-md bg-blue-500 p-2 text-white">
										<p>{m.content}</p>
									</div>
								</div>
								<div className="flex-shrink-0">
									<img
										src={m.user_avatar}
										alt="User Avatar"
										className="h-8 w-8 rounded-full"
									/>
								</div>
							</div>
						) : (
							<div
								key={m.id}
								className="mb-2 flex"
							>
								<div className="flex-shrink-0">
									<img
										src={m.user_avatar}
										alt="Avatar"
										className="h-8 w-8 rounded-full"
									/>
								</div>
								<div className="ml-3">
									<div className="rounded-md bg-blue-100 p-2 text-blue-700">
										<p>{m.content}</p>
									</div>
								</div>
							</div>
						)
					)
				)}
			</main>
			<footer className="flex items-center border-t-2 px-12 py-6">
				{sendLoading ? (
					<>
						<TextInput
							className="w-11/12 border-0 bg-transparent text-gray-500"
							placeholder="Type a message here"
							value={message}
							disabled={true}
						/>
						<div>
							<Loader
								size="sm"
								color="blue"
							/>
						</div>
					</>
				) : (
					<>
						<TextInput
							className="w-11/12 border-0 bg-transparent"
							placeholder="Type a message here"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						/>
						<button
							className="rounded-full bg-blue-400 p-2"
							onClick={() => sendMessage(chatID, message)}
						>
							<SendIcon />
						</button>
					</>
				)}
			</footer>
		</div>
	)
}

export default ChatCard
