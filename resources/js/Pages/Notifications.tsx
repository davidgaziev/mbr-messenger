import { useEffect, useState } from 'react'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout'
import { PageProps } from '../types'
import axios from 'axios'
import { Button, Loader } from '@mantine/core'

interface INotification {
	id: number
	requester: number
	requesterID: number
	type: string
}

const Notifications = ({ auth }: PageProps) => {
	const [notifications, setNotifications] = useState<INotification[]>([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		fetchNotifications()
	}, [])

	const fetchNotifications = async () => {
		try {
			const response = await axios.get('/api/notifications', {
				params: { id: auth.user.id }
			})
			setNotifications(response.data)
			console.log(response)
		} catch (error) {
			console.error('Error fetching users:', error)
		}
	}

	const rejectRequest = async (id: number) => {
		try {
			const response = await axios.get('/reject-contact', {
				params: { contactID: id }
			})
			if (response.status == 200) {
				setLoading(false)
				fetchNotifications()
			}
		} catch (error) {
			console.error('Error:', error)
		}
	}

	const acceptRequest = async (id: number) => {
		try {
			const response = await axios.get('/accept-contact', {
				params: { contactID: id }
			})
			if (response.status == 200) {
				setLoading(false)
				fetchNotifications()
			}
		} catch (error) {
			console.error('Error:', error)
		}
	}

	return (
		<AuthenticatedLayout user={auth.user}>
			<section className="h-full py-12">
				<div className="flex h-full rounded-xl bg-white px-6 py-12">
					{notifications ? (
						<ul className="w-full">
							{notifications.map((n) => (
								<li
									className="flex w-full justify-between rounded-xl bg-blue-500 p-4 text-white"
									key={n.id}
								>
									<p>
										You have {n.type} request from {n.requester}
									</p>

									<div className="flex w-1/4 justify-around">
										{loading ? (
											<Loader
												size="md"
												color="white"
											/>
										) : (
											<>
												<Button
													className="rounded-lg"
													onClick={() => {
														acceptRequest(n.requesterID)
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
														rejectRequest(n.requesterID)
													}}
													variant="filled"
													color="red"
												>
													Reject
												</Button>
											</>
										)}
									</div>
								</li>
							))}
						</ul>
					) : (
						<h2>You don't have notifications</h2>
					)}
				</div>
			</section>
		</AuthenticatedLayout>
	)
}

export default Notifications
