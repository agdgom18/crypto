import React, { createContext, useEffect, useState } from 'react'

type Props = {
	initialTheme?: string
	children: React.ReactNode
}

const getInitialTheme = () => {
	if (typeof window !== 'undefined' && window.localStorage) {
		const storedPrefs = window.localStorage.getItem('color-theme')

		if (typeof storedPrefs === 'string') {
			return storedPrefs
		}
		const userMedia = window.matchMedia('(prefers-color-scheme: dark)')
		if (userMedia.matches) {
			return 'dark'
		}
	}
	return 'light'
}
export const ThemeContext = createContext<
	| undefined
	| {
			theme: string
			setTheme: React.Dispatch<React.SetStateAction<string>>
	  }
>(undefined)

export const ThemeProvider: React.FC<Props> = ({ initialTheme, children }) => {
	const [theme, setTheme] = useState(getInitialTheme)

	const rawSetTheme = (theme: string) => {
		const root = window.document.documentElement
		const isDark = theme === 'dark'

		root.classList.remove(isDark ? 'light' : 'dark')
		root.classList.add(theme)

		localStorage.setItem('color-theme', theme)
	}

	if (initialTheme) {
		rawSetTheme(initialTheme)
	}

	useEffect(() => {
		rawSetTheme(theme)
	}, [theme])

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}
