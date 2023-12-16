import { FC } from 'react'
import { IContact } from '../Contacts/types'
import TextInput from '../TextInput'
import SendIcon from '@/icons/SendIcon'

const ChatCard: FC<{ contact: IContact }> = ({ contact }) => {
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
			<main className="h-full"></main>
			<footer className="flex items-center border-t-2 px-12 py-6">
				<TextInput
					className="w-11/12 border-0 bg-transparent"
					placeholder="Type a message here"
				/>
				<button className="rounded-full bg-blue-400 p-2">
					<SendIcon />
				</button>
			</footer>
		</div>
	)
}

export default ChatCard
