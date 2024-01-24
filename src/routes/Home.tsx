import React from 'react'
import Search from '../components/Search'
import Trending from '../components/Trending'

type MyProps = {
	coins: []
}

const Home: React.FC<MyProps> = ({ coins }) => {
	return (
		<>
			<Search coins={coins} />
			<Trending />
		</>
	)
}

export default Home
