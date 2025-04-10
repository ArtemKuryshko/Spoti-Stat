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
				'cursor-pointer flex items-center justify-center gap-2',
				{
					'bg-primary text-black font-extrabold ': style === 'primary',
					'bg-white text-black border-2 border-green-600':
						style === 'secondary',
					'rounded-[30px] px-4 py-2': size === 'sm',
					'rounded-[50px] px-6 py-3 w-[384] h-[60]': size === 'md',
					'rounded-[70px] px-8 py-4 w-[600] h-[65] text-2xl': size === 'lg'
				},
				className
			)}
		>
			{icon && <Image width={12} height={12} src={icon} alt='Icon' />}
			{children}
		</button>
	)
}

export default Button
