import React, { useState } from 'react'
import { Coin } from '../types/coin.types'
import CoinItem from './CoinItem'
type myProps = {
	coins: Coin[]
}

const Search: React.FC<myProps> = ({ coins }) => {
	const [searchText, setSearchText] = useState('')
	return (
		<div className='rounded-div my-4'>
			<div className='flex items-center flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right'>
				<h1 className='text-2xl font-bold my-2'>Search Crypto</h1>
				<form>
					<input
						className='w-full bg-primary border border-input px-4 py-2 rounded-2xl shadow-xl'
						onChange={e => setSearchText(e.target.value)}
						type='text'
						placeholder='Search a coin'
					/>
				</form>
			</div>
			<table className='w-full border-collapse text-center'>
				<thead>
					<tr className='border-b'>
						<th></th>
						<th className='px-4'>#</th>
						<th className='text-left'>Coin</th>
						<th></th>
						<th>Price</th>
						<th>24h</th>
						<th className='hidden md:table-cell'>24h Volume</th>
						<th className='hidden sm:table-cell'>Mkt</th>
						<th>Last 7 days</th>
					</tr>
				</thead>
				<tbody>
					{coins
						.filter(value => {
							if (searchText === '') {
								return value
							} else if (
								value.name
									.toLocaleLowerCase()
									.includes(searchText.toLocaleLowerCase())
							) {
								return value
							}
						})
						.map(coin => {
							return <CoinItem key={coin.id} {...coin} />
						})}
				</tbody>
			</table>
		</div>
	)
}

export default Search
