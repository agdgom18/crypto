import axios from 'axios'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import { ThemeProvider } from './context/ThemeContext'
import './index.css'
import Account from './routes/Account'
import Home from './routes/Home'
import SignIn from './routes/SignIn'
import SignUp from './routes/SignUp'
function App() {
	// const { isLoading, data, error } = useQuery({
	// 	queryFn: () => CoinsService.getAll(),
	// 	queryKey: ['coins'],
	// })

	const url =
		'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&locale=en'

	const [coins, setCoins] = useState([])

	useEffect(() => {
		axios
			.get(url, {
				headers: {
					'cache-control': 'max-age=30,public,must-revalidate,s-maxage=30 ',
					'content-type': ' application/json; charset=utf-8 ',
				},
			})
			.then(response => {
				setCoins(response.data)
				// console.log(coins)
			})
	}, [url])

	return (
		<>
			<ThemeProvider>
				<NavBar />
				<Routes>
					<Route path='/' element={<Home coins={coins} />} />
					<Route path='/signin' element={<SignIn />} />
					<Route path='/signUp' element={<SignUp />} />
					<Route path='/account' element={<Account />} />
				</Routes>
			</ThemeProvider>
		</>
	)
}

export default App
