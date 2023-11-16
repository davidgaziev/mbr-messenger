import { User } from '@/types'
import React from 'react'
import ResponsiveNavLink from './ResponsiveNavLink'
import { routeConfig } from '@/AppRoutes/appRoutes'
import NavLink from './NavLink'
import Dropdown from './Dropdown'

interface ISideBarProps {
	user: User
}

const SideBar: React.FC<ISideBarProps> = ({ user }) => {
	return (
		<nav className="flex h-screen min-h-screen w-1/6 flex-col justify-between py-12">
			<div className="flex flex-col items-center">
				<div>
					<img
						src="/images/userPhoto.png"
						alt=""
					/>
				</div>

				<Dropdown>
					<Dropdown.Trigger>
						<span className="inline-flex rounded-md">
							<button
								type="button"
								className="border-transparen inline-flex items-center rounded-md py-2 text-sm font-medium leading-4 text-blue-950 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"
							>
								<h2 className="text-lg">{user.name}</h2>
								<svg
									className="-mr-0.5 ml-2 h-4 w-4"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
										clipRule="evenodd"
									/>
								</svg>
							</button>
						</span>
					</Dropdown.Trigger>

					<Dropdown.Content>
						<Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
					</Dropdown.Content>
				</Dropdown>
			</div>

			<ul className="flex flex-col gap-8 pt-16">
				{Object.values(routeConfig).map(({ name, path, icon, activeIcon }) => (
					<li
						key={path}
						className="text-lg font-bold"
					>
						<NavLink
							active={route().current(path)}
							href={route(path)}
							className="flex items-center gap-4 font-bold"
						>
							{route().current(path) ? activeIcon : icon}
							{name}
						</NavLink>
					</li>
				))}
			</ul>

			<div className="flex flex-grow items-end">
				<ResponsiveNavLink
					method="post"
					href={route('logout')}
					as="button"
				>
					LOG OUT
				</ResponsiveNavLink>
			</div>
		</nav>
	)
}

export default SideBar
