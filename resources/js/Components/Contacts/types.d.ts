export interface IContact {
	id: number
	login: string
	name: string
	bio?: string
	avatar_url: string
}

export type Status = 'none' | 'pending' | 'success' | 'respond' | 'contacted'
