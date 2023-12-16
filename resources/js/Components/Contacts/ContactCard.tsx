import React, { FC, useState } from 'react'
import { IContact, Status } from './types'
import { Button, Loader } from '@mantine/core'
import axios from 'axios'
import { User } from '@/types'

const ContactCard: FC<{
	user: User
	contact: IContact
	status: Status
	setStatus: React.Dispatch<React.SetStateAction<Status | undefined>>
	afterAcceptHandle: Function
}> = ({ user, contact, status, setStatus, afterAcceptHandle }) => {
	const [loading, setLoading] = useState(false)

	const addContact = async (
		addresseeId: number,
		requesterId: number,
		type: string
	) => {
		try {
			const response = await axios.post('/api/make-request', {
				addresseeId: addresseeId,
				requesterId: requesterId,
				type: type
			})
			if (response.status == 200) {
				setLoading(false)
				setStatus('pending')
			}
		} catch (error) {
			console.error('Error:', error)
		}
	}

	const rejectRequest = async (contact: IContact) => {
		try {
			const response = await axios.get('/reject-contact', {
				params: { contactID: contact.id }
			})
			if (response.status == 200) {
				setLoading(false)
				setStatus('none')
			}
		} catch (error) {
			console.error('Error:', error)
		}
	}

	const acceptRequest = async (contact: IContact) => {
		try {
			const response = await axios.get('/accept-contact', {
				params: { contactID: contact.id }
			})
			if (response.status == 200) {
				setLoading(false)
				setStatus('contacted')
				afterAcceptHandle()
			}
		} catch (error) {
			console.error('Error:', error)
		}
	}

	const removeFromContacts = async (contact: IContact) => {
		try {
			const response = await axios.get('/remove-contact', {
				params: { contactID: contact.id }
			})

			if (response.status == 200) {
				setLoading(false)
				setStatus('none')
				afterAcceptHandle()
			}
		} catch (error) {
			console.error('Error:', error)
		}
	}

	function correctButton(status: Status) {
		switch (status) {
			case 'contacted':
				return (
					<div className="flex w-full justify-around">
						Send message
						<Button
							className="rounded-lg"
							onClick={() => {
								setLoading(true)
								removeFromContacts(contact)
							}}
							variant="filled"
							color="red"
						>
							Remove from contacts
						</Button>
					</div>
				)
			case 'pending':
				return <div>Request sent</div>
			case 'respond':
				return (
					<div className="flex w-full justify-around">
						<Button
							className="rounded-lg"
							onClick={() => {
								acceptRequest(contact)
								setLoading(true)
							}}
							variant="filled"
							color="green"
						>
							Accept
						</Button>

						<Button
							className="rounded-lg"
							onClick={() => {
								setLoading(true)
								rejectRequest(contact)
							}}
							variant="filled"
							color="red"
						>
							Reject
						</Button>
					</div>
				)
			default:
				return (
					<button
						className="rounded-lg"
						onClick={() => {
							setLoading(true)
							addContact(contact.id, user.id, 'friend')
						}}
					>
						ADD TO CONTACTS
					</button>
				)
		}
	}

	return (
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
							<span className="text-sm font-medium text-gray-500">Bio</span>
						</div>
					) : null}

					<div className="my-4 leading-5">
						<p className="text-lg">@{contact.login}</p>
						<span className="text-sm font-medium text-gray-500">Username</span>
					</div>
				</div>

				<div className="mt-6 flex justify-center">
					{!loading ? (
						correctButton(status)
					) : (
						<Loader
							type="bars"
							color="white"
							size="md"
						/>
					)}
				</div>
			</div>
		</div>
	)
}

export default ContactCard
