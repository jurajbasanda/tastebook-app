import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function NoMatch() {
	let location = useLocation()

	return (
		<section
			style={{
				minHeight: '60vh',
				backgroundColor: 'white',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				marginTop: '1rem',
				marginBottom: '1rem',
			}}
		>
			<h1>
				No match for <code>{location.pathname}</code>
			</h1>
			<Link
				to='/'
				style={{
					marginTop: '1rem',
					fontSize: '1.2rem',
					textDecoration: 'underline',
				}}
			>
				Go back
			</Link>
		</section>
	)
}
export default NoMatch
