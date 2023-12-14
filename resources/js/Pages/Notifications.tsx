import { useEffect, useState } from 'react'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout'
import { PageProps } from '../types'

import axios from 'axios'

interface INotification {
	id: number
	requester: number
	type: string
}

const Notifications = ({ auth }: PageProps) => {
	const [notifications, setNotifications] = useState<INotification[]>([])

	useEffect(() => {
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
		fetchNotifications()
	}, [])

	return (
		<AuthenticatedLayout user={auth.user}>
			<div>
				{notifications ? (
					<ul>
						{notifications.map((n) => (
							<li key={n.id}>
								<p>{n.requester}</p>
								<span>{n.type}</span>
							</li>
						))}
					</ul>
				) : null}
			</div>
		</AuthenticatedLayout>
	)
}

export default Notifications
