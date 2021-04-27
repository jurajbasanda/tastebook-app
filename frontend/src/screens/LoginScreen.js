import React, { useState, useEffect, Fragment } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/userAction'
//componets
import Loader from '../components//Loader'
//Style
import '../style/LoginScreen.scss'

const LoginScreen = () => {
	//*Router Hooks
	const { search } = useLocation()
	const { push } = useHistory()
	//*State
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	//*Redux State
	const dispatch = useDispatch()
	const userLogin = useSelector((state) => state.userLogin)
	const { loading, error, userInfo } = userLogin
	//

	const redirect = search ? search.split('=')[1] : '/'
	//Check if user is log in
	useEffect(() => {
		if (userInfo) {
			push('/')
		}
	}, [push, userInfo])

	//Log in
	const submitHandler = (e) => {
		e.preventDefault()
		dispatch(login(email, password))
	}
	return (
		<section className='loginpage'>
			{loading ? (
				<Loader />
			) : error ? (
				<h1>{error}</h1>
			) : (
				<Fragment>
					<div className='login-bg'></div>
					<h1>Log In</h1>
					<form onSubmit={submitHandler}>
						<label>Email</label>
						<input
							type='email'
							name='email'
							id='email'
							onChange={(e) => setEmail(e.target.value)}
						/>
						<label>Password</label>
						<input
							type='password'
							name='password'
							id='password'
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
						<button>Submit</button>
					</form>
					<br />
					<div className='registerme-group'>
						Not Registered yet ?{' '}
						<Link
							to={redirect ? `/register?redirect=${redirect}` : `/register`}
							style={{ color: '#284a6c' }}
						>
							Sign up
						</Link>
					</div>
				</Fragment>
			)}
		</section>
	)
}

export default LoginScreen
