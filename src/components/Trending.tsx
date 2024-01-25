import { useQuery } from '@tanstack/react-query'
import { CoinsService } from '../service/coins.service'
import { TrendRoot } from '../types/coin.types'

const Trending = () => {
	const { isLoading, data } = useQuery({
		queryFn: () => CoinsService.getTrendinCoins(),
		queryKey: ['trendingCoins'],
	})
	if (isLoading) {
		return <div>Loading...</div>
	}
	return (
		<div className='rounded-div my-12 py-8 text-primary'>
			<h1 className='text-2xl font-bold py-4'>Trending Coins</h1>
			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
				{data.map(({ item }: TrendRoot) => {
					return (
						<div
							key={item.coin_id}
							className='rounded-div flex justify-between p-4 hover:scale-105 ease-in-out duration-300'
						>
							<div className='flex w-full items-center justify-between'>
								<div className='flex'>
									<img className='mr-4 rounded-full' src={item.small} alt='/' />
									<div>
										<p className='font-bold'>{item.name}</p>
										<p>{item.symbol}</p>
									</div>
								</div>
								<div className='flex items-center'>
									<img
										className='w-4 mr-2'
										src='https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579'
										alt='/'
									/>
									<p>{item.price_btc.toFixed(7)}</p>
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Trending
