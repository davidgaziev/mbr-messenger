import React, { FC } from 'react'
import { IContact } from './types'

const Contact: FC<{
	contact: IContact
	onClick?: React.MouseEventHandler<HTMLLIElement>
}> = ({ contact, onClick }) => {
	return (
		<li
			onClick={onClick}
			className="flex cursor-pointer gap-2 py-2 pl-12 hover:bg-white hover:bg-opacity-25"
		>
			<img
				className="h-10 w-10 rounded-full border-2 border-blue-900"
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
