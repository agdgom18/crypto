import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'

type myProps = {
	coins: Coin[]
}

export interface Coin {
	id: string
	symbol: string
	name: string
	image: string
	current_price: number
	market_cap: number
	market_cap_rank: number
	fully_diluted_valuation: number
	total_volume: number
	high_24h: number
	low_24h: number
	price_change_24h: number
	price_change_percentage_24h: number
	market_cap_change_24h: number
	market_cap_change_percentage_24h: number
	circulating_supply: number
	total_supply: number
	max_supply: number
	ath: number
	ath_change_percentage: number
	ath_date: Date
	atl: number
	atl_change_percentage: number
	atl_date: Date
	roi: null
	last_updated: Date
	sparkline_in_7d: SparklineIn7D
}

export interface SparklineIn7D {
	price: number[]
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
						return (
							<tr>
								<td>
									<AiOutlineStar />
								</td>
								<td>{coin.market_cap_rank}</td>
								<td>
									<div>
										<img src={coin.image} alt={coin.id} />
										<p>{coin.name}</p>
									</div>
								</td>
								<td>{coin.symbol}</td>
								<td>{coin.current_price}</td>
								<td>{coin.price_change_percentage_24h}</td>
								<td>{coin.total_volume}</td>
								<td>{coin.market_cap}</td>
								<td>{coin.sparkline_in_7d.price}</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</>
	)
}

export default Search
