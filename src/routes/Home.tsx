import React from 'react'
import Search from '../components/Search'

type MyProps = {
	coins: []
}

const Home: React.FC<MyProps> = ({ coins }) => {
	return (
		<>
			<Search coins={coins} />
		</>
	)
}

export default Home
