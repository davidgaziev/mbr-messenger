import { ISVG } from '@/types'
import { FC } from 'react'

const ChatIcon: FC<ISVG> = (props) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<mask
				id="mask0_31_66"
				maskUnits="userSpaceOnUse"
				x="2"
				y="2"
				width="21"
				height="20"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M15.9996 12.9992C15.4476 12.9992 14.9996 12.5512 14.9996 11.9992C14.9996 11.4472 15.4476 10.9992 15.9996 10.9992C16.5516 10.9992 16.9996 11.4472 16.9996 11.9992C16.9996 12.5512 16.5516 12.9992 15.9996 12.9992M11.9996 12.9992C11.4476 12.9992 10.9996 12.5512 10.9996 11.9992C10.9996 11.4472 11.4476 10.9992 11.9996 10.9992C12.5516 10.9992 12.9996 11.4472 12.9996 11.9992C12.9996 12.5512 12.5516 12.9992 11.9996 12.9992M7.99961 12.9992C7.44761 12.9992 6.99961 12.5512 6.99961 11.9992C6.99961 11.4472 7.44761 10.9992 7.99961 10.9992C8.55161 10.9992 8.99961 11.4472 8.99961 11.9992C8.99961 12.5512 8.55161 12.9992 7.99961 12.9992M19.0706 4.92817C16.7866 2.64417 13.6256 1.62517 10.3966 2.12417C6.31961 2.76017 2.93961 6.04417 2.17661 10.1112C1.80961 12.0692 2.02061 14.0632 2.78761 15.8762C2.88561 16.1062 2.91561 16.3222 2.87661 16.5152L2.01961 20.8032C1.95361 21.1312 2.05661 21.4702 2.29261 21.7062C2.48161 21.8952 2.73661 21.9992 2.99961 21.9992C3.06461 21.9992 3.13061 21.9932 3.19561 21.9792L7.47861 21.1232C7.72461 21.0762 7.96361 21.1452 8.12261 21.2112C9.93661 21.9782 11.9306 22.1882 13.8876 21.8222C17.9546 21.0592 21.2386 17.6792 21.8746 13.6022C22.3776 10.3742 21.3556 7.21317 19.0706 4.92817"
					fill="white"
				/>
			</mask>
			<g mask="url(#mask0_31_66)">
				<rect
					width="24"
					height="24"
					fill={props.active ? 'url(#paint0_linear_40_126)' : '#707C97'}
				/>
			</g>
			<g filter="url(#filter0_dd_31_66)">
				<circle
					cx="8"
					cy="12"
					r="1"
					fill="white"
				/>
			</g>
			<g filter="url(#filter1_dd_31_66)">
				<circle
					cx="12"
					cy="12"
					r="1"
					fill="white"
				/>
			</g>
			<g filter="url(#filter2_dd_31_66)">
				<circle
					cx="16"
					cy="12"
					r="1"
					fill="white"
				/>
			</g>
			<defs>
				<filter
					id="filter0_dd_31_66"
					x="5"
					y="10"
					width="6"
					height="6"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood
						floodOpacity="0"
						result="BackgroundImageFix"
					/>
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy="1" />
					<feGaussianBlur stdDeviation="0.5" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
					/>
					<feBlend
						mode="normal"
						in2="BackgroundImageFix"
						result="effect1_dropShadow_31_66"
					/>
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy="1" />
					<feGaussianBlur stdDeviation="1" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
					/>
					<feBlend
						mode="normal"
						in2="effect1_dropShadow_31_66"
						result="effect2_dropShadow_31_66"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect2_dropShadow_31_66"
						result="shape"
					/>
				</filter>
				<filter
					id="filter1_dd_31_66"
					x="9"
					y="10"
					width="6"
					height="6"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood
						floodOpacity="0"
						result="BackgroundImageFix"
					/>
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy="1" />
					<feGaussianBlur stdDeviation="0.5" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
					/>
					<feBlend
						mode="normal"
						in2="BackgroundImageFix"
						result="effect1_dropShadow_31_66"
					/>
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy="1" />
					<feGaussianBlur stdDeviation="1" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
					/>
					<feBlend
						mode="normal"
						in2="effect1_dropShadow_31_66"
						result="effect2_dropShadow_31_66"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect2_dropShadow_31_66"
						result="shape"
					/>
				</filter>
				<filter
					id="filter2_dd_31_66"
					x="13"
					y="10"
					width="6"
					height="6"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood
						floodOpacity="0"
						result="BackgroundImageFix"
					/>
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy="1" />
					<feGaussianBlur stdDeviation="0.5" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
					/>
					<feBlend
						mode="normal"
						in2="BackgroundImageFix"
						result="effect1_dropShadow_31_66"
					/>
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy="1" />
					<feGaussianBlur stdDeviation="1" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
					/>
					<feBlend
						mode="normal"
						in2="effect1_dropShadow_31_66"
						result="effect2_dropShadow_31_66"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect2_dropShadow_31_66"
						result="shape"
					/>
				</filter>
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

export default ChatIcon
