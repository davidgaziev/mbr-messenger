import { ReactNode } from 'react'
import HomeIcon from '@/icons/HomeIcon'
import ChatIcon from '@/icons/ChatIcon'
import ContactsIcon from '@/icons/ContactsIcon'
import NotificationsIcon from '@/icons/NotificationsIcon'
import SettingsIcon from '@/icons/SettingsIcon'

export enum AppRoutes {
	HOME = 'home',
	CHAT = 'chat',
	CONTACTS = 'contacts',
	NOTIFICATIONS = 'notifications',
	SETTINGS = 'settings'
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.HOME]: ' ',
	[AppRoutes.CHAT]: 'chat',
	[AppRoutes.CONTACTS]: 'contacts',
	[AppRoutes.NOTIFICATIONS]: 'notifications',
	[AppRoutes.SETTINGS]: 'settings'
}

export const routeConfig: Record<
	AppRoutes,
	{ name: string; path: string; icon: ReactNode; activeIcon?: ReactNode }
> = {
	[AppRoutes.HOME]: {
		name: 'HOME',
		path: RoutePath.home,
		icon: <HomeIcon />,
		activeIcon: <HomeIcon active={true} />
	},
	[AppRoutes.CHAT]: {
		name: 'CHAT',
		path: RoutePath.chat,
		icon: <ChatIcon />,
		activeIcon: <ChatIcon active={true} />
	},
	[AppRoutes.CONTACTS]: {
		name: 'CONTACTS',
		path: RoutePath.contacts,
		icon: <ContactsIcon />,
		activeIcon: <ContactsIcon active={true} />
	},
	[AppRoutes.NOTIFICATIONS]: {
		name: 'NOTIFICATIONS',
		path: RoutePath.notifications,
		icon: <NotificationsIcon />,
		activeIcon: <NotificationsIcon active={true} />
	},
	[AppRoutes.SETTINGS]: {
		name: 'SETTINGS',
		path: RoutePath.settings,
		icon: <SettingsIcon />,
		activeIcon: <SettingsIcon active={true} />
	}
}
