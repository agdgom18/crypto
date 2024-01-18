// import { Link } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { ThemeToggle } from './ThemeToggle'

const NavBar = () => {
	return (
		<div>
			<Link to='/'>
				<h1>CryptoBase</h1>
			</Link>
			<div>
				<ThemeToggle />
			</div>
			<div>
				<Link to='/signin'>Sign In</Link>
				<Link to='/signup'>Sign Up</Link>
			</div>
			<div>
				<AiOutlineMenu />
			</div>
		</div>
	)
}

export default NavBar
