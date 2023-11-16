import { Link, InertiaLinkProps } from '@inertiajs/react'

export default function NavLink({
	active = false,
	className = '',
	children,
	...props
}: InertiaLinkProps & { active: boolean }) {
	return (
		<Link
			{...props}
			className={
				'inline-flex items-center px-1 pt-1 text-sm leading-5 transition duration-150 ease-in-out focus:outline-none ' +
				(active
					? 'before:w-0.2 text-sky-700 before:absolute before:left-0 before:h-12 before:rounded-full before:bg-sky-700  before:shadow-active-link before:content-[""] focus:text-sky-700'
					: 'hover:before:w-0.2 text-gray-600 hover:text-sky-700 hover:before:absolute hover:before:left-0 hover:before:h-12 hover:before:rounded-full hover:before:bg-sky-700  hover:before:shadow-active-link hover:before:content-[""] focus:text-sky-700') +
				className
			}
		>
			{children}
		</Link>
	)
}
