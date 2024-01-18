import NavBar from './components/NavBar'
import { ThemeProvider } from './context/ThemeContext'
import './index.css'

function App() {
	return (
		<>
			<ThemeProvider>
				<NavBar />
			</ThemeProvider>
		</>
	)
}

export default App
