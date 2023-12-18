import { SVGProps } from 'react'

export interface User {
	id: number
	login: string
	name: string
	email: string
	email_verified_at: string
	avatar_url: string
	contacts: string
	premium: boolean
}

export interface ISVG extends SVGProps<SVGAElement> {
	active?: boolean
}

export type PageProps<
	T extends Record<string, unknown> = Record<string, unknown>
> = T & {
	auth: {
		user: User
	}
}
