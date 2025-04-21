import { FC } from 'react'
import styles from './Loader.module.css'
import cn from 'clsx'

const Loader: FC = () => {
	return <div className={cn(
		'flex items-center justify-center',
		'fixed top-0 left-0 right-0 bottom-0 z-10'
	)}>
		<div className={styles.loader}></div>
	</div>
}

export default Loader
