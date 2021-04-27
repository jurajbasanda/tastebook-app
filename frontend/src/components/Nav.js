import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userAction'
import { useHistory } from 'react-router-dom'
//Style
import '../style/nav.scss'
//images
import logo from '../images/tastyLogo.png'
import SearchBox from './SearchBox'
const Nav = () => {
	//Router Hooks
	const { push } = useHistory()
	//States
	const [Menu, setMenu] = useState('')
	const [MenuCategory, setMenuCategory] = useState('')
	const [MenuCategoryDesktop, setMenuCategoryDesktop] = useState('')
	//Redux State
	const dispatch = useDispatch()
	const userLogin = useSelector((state) => state.userLogin)
	const { userInfo } = userLogin
	//Mobile Menu
	const mobilMenu = () => {
		Menu === '' ? setMenu(' open') : setMenu('')
	}
	//Close Mobile Menu
	const closeMenus = () => {
		setMenu('')
		setMenuCategory('')
	}
	//Mobile Category Menu
	const mobilMenuCategory = () => {
		MenuCategory === '' ? setMenuCategory(' open') : setMenuCategory('')
	}
	//Desktop Category Menu
	const menuCategory = () => {
		MenuCategoryDesktop === ''
			? setMenuCategoryDesktop(' open-desktop')
			: setMenuCategoryDesktop('')
	}
	//all
	const mobilMenus = () => {
		mobilMenu()
		mobilMenuCategory()
	}

	const logoutHnadler = () => {
		dispatch(logout())
		push('/login')
	}

	return (
		<header>
			<section className='topbar'>
				<div className='soc-net'>
					<ul>
						<li>
							<a href='/fb'>
								<i className='fab fa-facebook-f' role='button' title='facebook'></i>
							</a>
						</li>
						<li>
							<a href='/insta'>
								<i className='fab fa-instagram' title='instagram'></i>
							</a>
						</li>
						<li>
							<a href='/twitter'>
								<i className='fab fa-twitter' title='twitter'></i>
							</a>
						</li>
					</ul>
				</div>
				<div className='user-menu-group'>
					{userInfo ? (
						<div className='account-menu'>
							<Link to='/myaccount'>
								<i className='fas fa-user'></i>
								<span>My account</span>
							</Link>{' '}
							| <span onClick={logoutHnadler}>Log out</span>
						</div>
					) : (
						<div className='account-menu'>
							<Link to='/login'>
								<i className='fas fa-user' title='user'></i>
								<span>Log In</span>
							</Link>
						</div>
					)}
				</div>
			</section>
			<nav>
				<div className='middlebar'>
					<div className='logo' onClick={closeMenus} onKeyDown={closeMenus}>
						<Link to='/'>
							<img src={logo} alt='tastebook-logo' srcSet='' />
							<span>Tastebook</span>
						</Link>
					</div>
					<div className='searchbox none570'>
						<SearchBox />
					</div>
					<div
						role='button'
						tabIndex='0'
						aria-pressed='false'
						aria-label='Menu'
						onClick={mobilMenu}
						onKeyDown={mobilMenu}
						className='burger '
					>
						<button>
							<i className='fas fa-bars' title='menu' />
						</button>
					</div>
					<ul className='menu'>
						<li>
							<Link to='/' rel='about' aria-label='about'>
								home
							</Link>
						</li>
						<li>
							<button
								onClick={menuCategory}
								onKeyDown={menuCategory}
								className='category-btn'
								aria-label='category'
							>
								category
							</button>
						</li>
					</ul>
					<ul className={`menu-category-desktop ${MenuCategoryDesktop}`}>
						<li>
							{' '}
							<button onClick={menuCategory} onKeyDown={menuCategory}>
								<i
									title='close'
									style={{ color: 'black', fontSize: '1.5rem' }}
									className='fas fa-chevron-right'
								></i>
							</button>
						</li>
						<li>
							<Link
								to='/search/beef'
								rel='next'
								aria-label='pork'
								onClick={menuCategory}
								onKeyDown={menuCategory}
							>
								#beef
							</Link>
						</li>
						<li>
							<Link
								to='/search/chicken'
								rel='next'
								aria-label='beef'
								onClick={menuCategory}
								onKeyDown={menuCategory}
							>
								#chicken
							</Link>
						</li>
						<li>
							<Link
								to='/search/vegetarian'
								rel='next'
								aria-label='chicken'
								onClick={menuCategory}
								onKeyDown={menuCategory}
							>
								#vegeterian
							</Link>
						</li>{' '}
					</ul>
					<ul className={`mobil ${Menu}`}>
						<li>
							<li>
								<Link
									to='/'
									rel='next'
									aria-label='home'
									onClick={mobilMenu}
									onKeyDown={mobilMenu}
								>
									home
								</Link>
							</li>
							<button
								title='category'
								className='category-btn'
								rel='next'
								aria-label='category'
								onClick={mobilMenuCategory}
								onKeyDown={mobilMenuCategory}
							>
								category
							</button>
						</li>

						<li>
							<button onClick={mobilMenu} onKeyDown={mobilMenu}>
								<i
									style={{ color: 'black', fontSize: '1.5rem' }}
									className='far fa-window-close'
									title='close'
								></i>
							</button>
						</li>
					</ul>
					<ul className={`mobil ${MenuCategory}`}>
						<li>
							<Link
								to='/search/beef'
								rel='next'
								aria-label='pork'
								onClick={mobilMenus}
								onKeyDown={mobilMenus}
							>
								#beef
							</Link>
						</li>
						<li>
							<Link
								to='/search/chicken'
								rel='next'
								aria-label='beef'
								onClick={mobilMenus}
								onKeyDown={mobilMenus}
							>
								#chicken
							</Link>
						</li>
						<li>
							<Link
								to='/search/vegetarian'
								rel='next'
								aria-label='chicken'
								onClick={mobilMenus}
								onKeyDown={mobilMenus}
							>
								#vegeterian
							</Link>
						</li>
						<li>
							<button onClick={mobilMenus} onKeyDown={mobilMenu}>
								<i
									style={{ color: 'black', fontSize: '1.5rem' }}
									className='far fa-window-close'
									title='close'
								></i>
							</button>
						</li>
					</ul>
				</div>
				<div className='searchbox flex570'>
					<SearchBox />
				</div>
			</nav>
		</header>
	)
}
export default Nav
