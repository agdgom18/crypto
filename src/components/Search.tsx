import React from 'react'
import { Coin } from '../types/coin.types'
import CoinItem from './CoinItem'
type myProps = {
	coins: Coin[]
}

const Search: React.FC<myProps> = ({ coins }) => {
	console.log(coins)
	return (
		<>
			<div>
				<h1>Search Crypto</h1>
				<form>
					<input type='text' placeholder='Search a coin' />
				</form>
			</div>
			<table>
				<thead>
					<tr>
						<th></th>
						<th>#</th>
						<th>Coin</th>
						<th></th>
						<th>Price</th>
						<th>24h</th>
						<th>24h Volume</th>
						<th>Mkt</th>
						<th>Last 7 days</th>
					</tr>
				</thead>
				<tbody>
					{coins.map(coin => {
						return <CoinItem key={coin.id} {...coin} />
					})}
				</tbody>
			</table>
			npm install react-sparklines --save
		</>
	)
}

export default Search
