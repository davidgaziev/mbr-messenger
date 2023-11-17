const generateAvatar = (name: string) => {
	const initial = name.split('')[0]

	const avatarUrl = `https://ui-avatars.com/api/?name=${initial}&background=random`

	return avatarUrl
}

export default generateAvatar
