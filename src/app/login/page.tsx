import LoginForm from '@/components/forms/LoginForm'
import Image from 'next/image'

export default function LoginPage() {
	return (
		<div className='flex flex-col items-center justify-center'>
			<div className='flex flex-col text-center items-center justify-center bg-gradient-to-b from-[#121212] to-[#151515] w-[800] h-[460] rounded-[10] my-8'>
				<div className='flex flex-col text-center items-center  justify-center mb-8'>
					<Image
						src='/logo.svg'
						alt='logo'
						width={80}
						height={85}
						className='mb-8'
					/>
					<h1 className='text-3xl font-bold'>Welcome to Spoti-Stat!</h1>
				</div>
				<LoginForm />
			</div>
		</div>
	)
}
