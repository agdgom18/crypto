import axios from 'axios'

export const CoinsService = {
	async getAll() {
		return axios.get(
			'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&locale=en',
			{
				headers: {
					'cache-control': 'max-age=30,public,must-revalidate,s-maxage=30 ',
					'content-type': ' application/json; charset=utf-8 ',
				},
			}
		)
	},
}
