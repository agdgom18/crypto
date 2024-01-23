import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import { Sparklines, SparklinesLine } from 'react-sparklines'
import { Coin } from '../types/coin.types'

const CoinItem: React.FC<Coin> = ({
	symbol,
	current_price,
	id,
	market_cap_rank,
	image,
	name,
	total_volume,
	market_cap,
	price_change_percentage_24h,
	sparkline_in_7d: { price },
}) => {
	return (
		<>
			<tr key={id}>
				<td>
					<AiOutlineStar />
				</td>
				<td>{market_cap_rank}</td>
				<td>
					<div>
						<img src={image} alt={id} />
						<p>{name}</p>
					</div>
				</td>
				<td>{symbol}</td>
				<td>{current_price}</td>
				<td>{price_change_percentage_24h}</td>
				<td>{total_volume}</td>
				<td>{market_cap}</td>
				<td>
					<Sparklines data={price}>
						<SparklinesLine color='teal' />
					</Sparklines>
				</td>
			</tr>
		</>
	)
}

export default CoinItem
