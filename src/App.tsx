import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import { ThemeProvider } from './context/ThemeContext'
import './index.css'
import Account from './routes/Account'
import Home from './routes/Home'
import SignIn from './routes/SignIn'
import SignUp from './routes/SignUp'
function App() {
	return (
		<>
			<ThemeProvider>
				<NavBar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/signin' element={<SignIn />} />
					<Route path='/signUp' element={<SignUp />} />
					<Route path='/account' element={<Account />} />
				</Routes>
			</ThemeProvider>
		</>
	)
}

export default App
