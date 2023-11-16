import React, { FC, SVGProps } from 'react'
import { SVGAttributes } from 'react'

interface ISVG extends SVGProps<SVGAElement> {
	active?: boolean
}

const HomeIcon: FC<ISVG> = (props) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="Icon/Outline/grid">
				<path
					id="Mask"
					fillRule="evenodd"
					clipRule="evenodd"
					d="M15 19V15H19L19.001 19H15ZM19 13H15C13.897 13 13 13.897 13 15V19C13 20.103 13.897 21 15 21H19C20.103 21 21 20.103 21 19V15C21 13.897 20.103 13 19 13ZM5 19V15H9L9.001 19H5ZM9 13H5C3.897 13 3 13.897 3 15V19C3 20.103 3.897 21 5 21H9C10.103 21 11 20.103 11 19V15C11 13.897 10.103 13 9 13ZM15 9V5H19L19.001 9H15ZM19 3H15C13.897 3 13 3.897 13 5V9C13 10.103 13.897 11 15 11H19C20.103 11 21 10.103 21 9V5C21 3.897 20.103 3 19 3ZM5 9V5H9L9.001 9H5ZM9 3H5C3.897 3 3 3.897 3 5V9C3 10.103 3.897 11 5 11H9C10.103 11 11 10.103 11 9V5C11 3.897 10.103 3 9 3Z"
					fill={props.active ? 'url(#paint0_linear_40_126)' : '#231F20'}
				/>
				<mask
					id="mask0_1_43"
					maskUnits="userSpaceOnUse"
					x="3"
					y="3"
					width="18"
					height="18"
				>
					<path
						id="Mask_2"
						fillRule="evenodd"
						clipRule="evenodd"
						d="M15 19V15H19L19.001 19H15ZM19 13H15C13.897 13 13 13.897 13 15V19C13 20.103 13.897 21 15 21H19C20.103 21 21 20.103 21 19V15C21 13.897 20.103 13 19 13ZM5 19V15H9L9.001 19H5ZM9 13H5C3.897 13 3 13.897 3 15V19C3 20.103 3.897 21 5 21H9C10.103 21 11 20.103 11 19V15C11 13.897 10.103 13 9 13ZM15 9V5H19L19.001 9H15ZM19 3H15C13.897 3 13 3.897 13 5V9C13 10.103 13.897 11 15 11H19C20.103 11 21 10.103 21 9V5C21 3.897 20.103 3 19 3ZM5 9V5H9L9.001 9H5ZM9 3H5C3.897 3 3 3.897 3 5V9C3 10.103 3.897 11 5 11H9C10.103 11 11 10.103 11 9V5C11 3.897 10.103 3 9 3Z"
						fill="white"
					/>
				</mask>
				<g mask="url(#mask0_1_43)">
					<g id="&#240;&#159;&#142;&#168; Color">
						<rect
							id="Base"
							width="24"
							height="24"
							fill={props.active ? 'url(#paint0_linear_40_126)' : '#707C97'}
						/>
					</g>
				</g>
			</g>
			<defs>
				<linearGradient
					id="paint0_linear_40_126"
					x1="12"
					y1="0"
					x2="12"
					y2="24"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#60A9F6" />
					<stop
						offset="1"
						stopColor="#707C97"
					/>
				</linearGradient>
			</defs>
		</svg>
	)
}

export default HomeIcon
