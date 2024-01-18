import { useContext } from 'react'
import { HiMoon, HiSun } from 'react-icons/hi'
import { ThemeContext } from '../context/ThemeContext'

export const ThemeToggle = () => {
	const themeContext = useContext(ThemeContext)

	if (!themeContext) {
		console.error('Theme context is null or undefined')
		return null
	}
	const { theme, setTheme } = themeContext

	return (
		<div className='p-2'>
			{theme === 'dark' ? (
				<div
					className='flex items-center cursor-pointer'
					onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
				>
					<HiSun className='text-primary text-2xl mr-2' /> Light Mode
				</div>
			) : (
				<div
					className='flex items-center cursor-pointer'
					onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
				>
					<HiMoon className='text-primary text-2xl mr-3' /> Dark Mode
				</div>
			)}
		</div>
	)
}
