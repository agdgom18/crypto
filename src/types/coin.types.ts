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
//  trending item
export interface TrendRoot {
	item: Item
}

export interface Item {
	id: string
	coin_id: number
	name: string
	symbol: string
	market_cap_rank: number
	thumb: string
	small: string
	large: string
	slug: string
	price_btc: number
	score: number
}
