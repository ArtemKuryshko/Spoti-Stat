import { GeneralOptionsType } from '@/types/track.type'
import { memo, ReactNode, Dispatch, SetStateAction, JSX } from 'react'

interface IButtonSelector<T> {
	options: GeneralOptionsType[]
	currentValue: T
	onChange: Dispatch<SetStateAction<T>>
}

const BasicButtonSelector = <T,>({
	options,
	currentValue,
	onChange
}: IButtonSelector<T>) => {
	return (
		<div className='flex gap-4 mb-8 ml-28'>
			{options.map(option => (
				<button
					key={option.value}
					disabled={currentValue === option.value}
					onClick={() => onChange(option.value as T)}
					className={`px-4 py-2 rounded-full border-2 transition 
            			${
							currentValue === option.value
								? 'bg-black text-white border-primary'
								: 'bg-primary text-black border-black //'
						}`}
				>
					{option.label}
				</button>
			))}
		</div>
	)
}

const ButtonSelector = memo(BasicButtonSelector)

export default ButtonSelector as <T>(
  props: IButtonSelector<T> & { children?: ReactNode }
) => JSX.Element