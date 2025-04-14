import Link from 'next/link'
import { PathEnum } from '@/types/path.enum'
import { ProfileService } from '@/services/profile.service'
import UserIcon from '../User/UserIcon'
import Logo from '@/components/UI/Logo'

export default async function Header() {
	let name = ''
	let image = '/profile-default.svg'

	try {
		const { data } = await ProfileService.getProfile()
		name = data.display_name
		image = data.images?.length ? data.images[0].url : '/profile-default.svg'
	} catch {
		name = ''
		image = '/profile-default.svg'
	}

	return (
		<div className='flex fixed position-fixed flex-row top-0 z-20 left-0 right-0 w-full bg-black items-center justify-between p-4 h-[70]'>
			<Link href={PathEnum.DASHBOARD} className='ml-24'>
				<Logo />
			</Link>

			<div className='flex flex-row gap-16 text-primary font-semibold text-[20px] '>
				<Link href={PathEnum.TRACKS}>Tracks</Link>
				<Link href={PathEnum.ARTISTS}>Artists</Link>
				<Link href={PathEnum.ALBUMS}>Albums</Link>
				<Link href={PathEnum.GENRES}>Genres</Link>
				<Link href={PathEnum.RECOMENDATIONS}>Recomendations</Link>
			</div>
			<Link
				href={PathEnum.SETTINGS}
				className='mr-24 border-2 border-primary rounded-full max-h-[54] max-w-[54] items-center'
			>
				<UserIcon name={name} image={image} />
			</Link>
		</div>
	)
}
