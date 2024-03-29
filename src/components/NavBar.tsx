// import { Link } from 'react-router-dom'
import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { ThemeToggle } from './ThemeToggle'
const NavBar = () => {
	const [nav, setNav] = useState(false)

	const handleNav = () => {
		return setNav(!nav)
	}

	return (
		<div className='rounded-div flex items-center justify-between h-20 font-bold'>
			<Link to='/'>
				<h1 className='text-2xl'>CryptoBase</h1>
			</Link>
			<div className='hidden md:block'>
				<ThemeToggle />
			</div>
			<div className='hidden md:block'>
				<Link to='/signin' className='p-4 hover:text-accent'>
					Sign In
				</Link>
				<Link
					to='/signup'
					className='bg-button text-btnText px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl'
				>
					Sign Up
				</Link>
			</div>
			<div onClick={handleNav} className='block md:hidden cursor-pointer z-10'>
				{nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
			</div>
			{/* Mobile menu */}
			<div
				className={
					nav
						? 'md:hidden fixed left-0 top-20 flex-col items-center justify-between w-full h-[90%] bg-primary ease-out duration-300'
						: 'fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in duration-300'
				}
			>
				<ul className='w-full p-4'>
					<li className='border-b py-6'>
						<Link to='/'>Home</Link>
					</li>
					<li className='border-b py-6'>
						<Link to='/'>Account</Link>
					</li>
					<li className=' py-6'>
						<ThemeToggle />
					</li>
				</ul>
				<div>
					<Link
						className='w-full my-2 p-3 bg-primary text-primary border border-secondary rounded-2xl shadow-xl'
						to='/signin'
					>
						Sign In
					</Link>
					<Link
						className='w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl'
						to='/signup'
					>
						Sign Up
					</Link>
				</div>
			</div>
		</div>
	)
}

export default NavBar
