import React from 'react'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout'
import { PageProps } from '../types'

const Chat = ({ auth }: PageProps) => {
	return (
		<AuthenticatedLayout user={auth.user}>
			<div>Chat</div>
		</AuthenticatedLayout>
	)
}

export default Chat
