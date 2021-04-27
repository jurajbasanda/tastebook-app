import React, { useState, useEffect, Fragment } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../actions/userAction'

//componets
import Loader from '../components/Loader'
//Style
import '../style/LoginScreen.scss'

const SignUpScreen = () => {
	//Router Hooks
	const { push } = useHistory()
	//State
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [terms, setTemrms] = useState(false)
	const [message, setMessage] = useState(null)
	//*Redux State
	const dispatch = useDispatch()
	const userRegister = useSelector((state) => state.userRegister)
	const { loading, error, userInfo } = userRegister
	const userLogin = useSelector((state) => state.userLogin)

	useEffect(() => {
		if (userInfo || userLogin.userInfo) {
			push('/')
		}
	}, [push, userInfo, userLogin])

	const submitHandler = (e) => {
		e.preventDefault()
		if (password === confirmPassword && terms) {
			dispatch(register(firstName, lastName, email, password))
		} else {
			setMessage('Password do not match / please confirm Term & Conditions')
		}
	}
	return (
		<section className='loginpage'>
			{loading ? (
				<Loader />
			) : error ? (
				<h1>{error}</h1>
			) : message ? (
				<Fragment>
					<div className='get-back'>
						<Link to='/'>
							<i className='fas fa-chevron-left'></i> Go back
						</Link>
					</div>{' '}
					<h1>{message}</h1>
				</Fragment>
			) : (
				<Fragment>
					<div className='login-bg'></div>
					<h1>Sign Up</h1>
					<form onSubmit={submitHandler}>
						<label htmlFor='firts-name'>First Name</label>
						<input
							type='first-name'
							name='first-name'
							id='first-name'
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
							required
						/>
						<label htmlFor='last-name'>Last Name</label>
						<input
							type='last-name'
							name='last-name'
							id='last-name'
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
							required
						/>
						<label htmlFor='email'>Email</label>
						<input
							type='email'
							name='email'
							id='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
						<label htmlFor='password'>Password</label>
						<input
							type='password'
							name='password'
							id='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
						<label htmlFor='confirm-passowrd'>Confirm Password</label>
						<input
							type='password'
							name='password'
							id='confirm-password'
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							required
						/>
						<div className='terms-group'>
							<label htmlFor='terms'>Terms & Conditions</label>
							<input
								type='checkbox'
								name='terms'
								id='terms'
								value={terms}
								onChange={(e) => setTemrms(e.target.value)}
							/>
						</div>
						<button>Submit</button>
					</form>
				</Fragment>
			)}
		</section>
	)
}

export default SignUpScreen
