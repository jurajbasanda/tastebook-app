import React from 'react'
import { Link } from 'react-router-dom'
//Style
import '../style/footer.scss'

const Footer = () => {
	return (
		<footer>
			<section className='social-footer'>
				<h3>
					Have a recipe of your own <br /> to share ?
				</h3>
				<Link to='/register' className='red-btn'>
					Submit your recipe
				</Link>
			</section>
			<section className='newsletter-footer'>
				<form>
					<h3>Newsletter</h3>
					<label htmlFor='email'>subscribe for more fresh recipes</label>
					<div>
						<input
							id='email'
							name='email'
							type='text'
							placeholder='Your email...'
						/>
						<button>Sign up</button>
					</div>
				</form>
			</section>
		</footer>
	)
}
export default Footer
