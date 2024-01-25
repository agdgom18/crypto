import { useQuery } from '@tanstack/react-query'
import DOMPurify from 'dompurify'
import React from 'react'
import { FaFacebook, FaGithub, FaReddit, FaTwitter } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { Sparklines, SparklinesLine } from 'react-sparklines'
import { CoinsService } from '../service/coins.service'
const CoinPage: React.FC = () => {
	const { coinId } = useParams()
	const { data, isLoading } = useQuery({
		queryFn: () =>
			CoinsService.getCoinById(
				`https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&sparkline=true`
			),
		queryKey: ['coinById'],
	})
	if (isLoading) {
		return <div>Loading ...</div>
	}

	return (
		<div className='rounded-div my-12 py-8'>
			<div className='rounded-div my-12 py-8'>
				<div className='flex py-8'>
					<img className='w-20 mr-8' src={data.image?.large} alt='image' />
					<div>
						<p className='text-3xl font-bold'>{data?.name} price</p>
						<p>({data.symbol?.toUpperCase()} / USD)</p>
					</div>
				</div>

				<div className='grid md:grid-cols-2 gap-8'>
					<div>
						<div className='flex justify-between'>
							{data.market_data?.current_price ? (
								<p className='text-3xl font-bold'>
									${data.market_data.current_price.usd.toLocaleString()}
								</p>
							) : null}
							<p>7 Day</p>
						</div>
						<div>
							<Sparklines data={data.market_data?.sparkline_7d.price}>
								<SparklinesLine color='teal' />
							</Sparklines>
						</div>
						<div className='flex justify-between py-4'>
							<div>
								<p className='text-gray-500 text-sm'>Market Cap</p>
								{data.market_data?.market_cap ? (
									<p className='text-green-600'>
										${data.market_data.market_cap.usd.toLocaleString()}
									</p>
								) : null}
							</div>
							<div>
								<p className='text-gray-500 text-sm'>Volume (24h)</p>
								{data.market_data?.market_cap ? (
									<p>${data.market_data.total_volume.usd.toLocaleString()}</p>
								) : null}
							</div>
						</div>

						<div className='flex justify-between py-4'>
							<div>
								<p className='text-gray-500 text-sm'>24h High</p>
								{data.market_data?.high_24h ? (
									<p>${data.market_data.high_24h.usd.toLocaleString()}</p>
								) : null}
							</div>
							<div>
								<p className='text-gray-500 text-sm'>24h Low</p>
								{data.market_data?.low_24h ? (
									<p>${data.market_data.low_24h.usd.toLocaleString()}</p>
								) : null}
							</div>
						</div>
					</div>

					<div>
						<p className='text-xl font-bold'>Market Stats</p>
						<div className='flex justify-between py-4'>
							<div>
								<p className='text-gray-500 text-sm'>Market Rank</p>
								{data.market_cap_rank}
							</div>
							<div>
								<p className='text-gray-500 text-sm'>Hashing Algorithm</p>
								{data.hashing_algorithm ? (
									<p>{data.hashing_algorithm}</p>
								) : null}
							</div>
							<div>
								<p className='text-gray-500 text-sm'>Rank</p>
								{data.tickers ? (
									<p className='text-green-600'>
										{data.sentiment_votes_up_percentage}%
									</p>
								) : null}
							</div>
						</div>

						<div className='flex justify-between py-4'>
							<div>
								<p className='text-gray-500 text-sm'>Price Change (24h)</p>
								{data.market_data ? (
									<p>
										{data.market_data.price_change_percentage_24h.toFixed(2)}%
									</p>
								) : null}
							</div>
							<div>
								<p className='text-gray-500 text-sm'>Price Change (7d)</p>
								{data.market_data ? (
									<p>
										{data.market_data.price_change_percentage_7d.toFixed(2)}%
									</p>
								) : null}
							</div>
							<div>
								<p className='text-gray-500 text-sm'>Price Change (14d)</p>
								{data.market_data ? (
									<p>
										{data.market_data.price_change_percentage_14d.toFixed(2)}%
									</p>
								) : null}
							</div>
						</div>
						<div className='flex justify-between py-4'>
							<div>
								<p className='text-gray-500 text-sm'>Price Change (30d)</p>
								{data.market_data ? (
									<p>
										{data.market_data.price_change_percentage_30d.toFixed(2)}%
									</p>
								) : null}
							</div>
							<div>
								<p className='text-gray-500 text-sm'>Price Change (60d)</p>
								{data.market_data ? (
									<p>
										{data.market_data.price_change_percentage_60d.toFixed(2)}%
									</p>
								) : null}
							</div>
							<div>
								<p className='text-gray-500 text-sm'>Price Change (1y)</p>
								{data.market_data ? (
									<p>
										{data.market_data.price_change_percentage_1y.toFixed(2)}%
									</p>
								) : null}
							</div>
						</div>
						<div className='flex justify-around p-8 text-accent'>
							<FaTwitter />
							<FaFacebook />
							<FaReddit />
							<FaGithub />
						</div>
					</div>
				</div>

				{/* Description */}
				<div className='py-4'>
					<p className='text-xl font-bold mb-4'>About {data.name}</p>
					<p
						dangerouslySetInnerHTML={{
							__html: DOMPurify.sanitize(
								data.description ? data.description.en : ''
							),
						}}
					></p>
				</div>
			</div>
		</div>
	)
}

export default CoinPage
