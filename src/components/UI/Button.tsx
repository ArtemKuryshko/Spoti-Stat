import { FC, ReactNode } from 'react'
import cn from 'clsx'
import Image from 'next/image'

interface IButton {
	children: ReactNode
	type?: 'submit' | 'reset' | 'button'
	style?: 'primary' | 'secondary'
	size?: 'sm' | 'md' | 'lg'
	icon?: string
	className?: string
	onClick?: () => void
}

const Button: FC<IButton> = ({
	children,
	type = 'button',
	style = 'primary',
	size = 'lg',
	icon,
	className,
	onClick
}) => {
	return (
		<button
			type={type}
			onClick={onClick}
			className={cn(
				'rounded-lg cursor-pointer flex items-center justify-center gap-2',
				{
					'bg-green-600 text-white': style === 'primary',
					'bg-white text-black border-2 border-green-600':
						style === 'secondary',
					'px-4 py-2': size === 'sm',
					'px-6 py-3': size === 'md',
					'px-8 py-4 w-full': size === 'lg'
				},
				className
			)}
		>
			{icon && <Image src={icon} alt='Icon' />}
			{children}
		</button>
	)
}

export default Button
