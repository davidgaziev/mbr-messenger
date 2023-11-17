import React, { FC } from 'react'
import { IContact } from './types'

const Contact: FC<{ contact: IContact }> = ({ contact }) => {
	return (
		<li className="flex cursor-pointer gap-2 py-2 pl-12 hover:bg-white hover:bg-opacity-25">
			<img
				className="h-10 w-10 rounded-full"
				src={contact.avatar_url}
				alt=""
			/>
			<div className="leading-5">
				<p className="font-bold">{contact.name}</p>
				<span className="text-gray-700">@{contact.login}</span>
			</div>
		</li>
	)
}

export default Contact
