import { memo, Dispatch, SetStateAction } from 'react'

interface IButtonSelector {
	options: any
	currentValue: string
	onChange: Dispatch<SetStateAction<any>>
}

function ButtonSelector({
	options,
	currentValue,
	onChange
}: IButtonSelector) {
	return (
		<div className='flex gap-4 mb-8 ml-28'>
			{options.map(option => (
				<button
					key={option.value }
					disabled={currentValue === option}
					onClick={() => onChange(option.value)}
					className={`px-4 py-2 rounded-full border-2 transition 
            ${
							currentValue === option.value
								? 'bg-black text-white border-primary'
								: 'bg-primary text-black border-black'
						}`}
				>
					{option.label}
				</button>
			))}
		</div>
	)
}

export default memo(ButtonSelector)
