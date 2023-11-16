import { Link, InertiaLinkProps } from '@inertiajs/react'

export default function ResponsiveNavLink({
	active = false,
	className = '',
	children,
	...props
}: InertiaLinkProps & { active?: boolean }) {
	return (
		<Link
			{...props}
			className={`flex w-full items-center border-l-4 py-2 pl-3 pr-4 ${
				active
					? 'text-red-400  focus:text-red-400'
					: 'hover:before:shadow-hover-logout hover:before:w-0.2 border-transparent text-gray-600 hover:text-red-400 hover:before:absolute hover:before:left-0 hover:before:h-12 hover:before:rounded-full  hover:before:bg-red-400 hover:before:content-[""] focus:text-red-400'
			} text-base font-bold transition duration-150 ease-in-out focus:outline-none ${className}`}
		>
			{children}
		</Link>
	)
}
