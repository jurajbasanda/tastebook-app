import React from 'react'
import PropTypes from 'prop-types'

const errorStyle = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	flexDirection: 'column',
	textAlign: 'center',
	minHeight: '60vh',
	fontSize: '1.2rem',
}
const ErrorMessage = ({ messageErr, message }) => {
	return message ? (
		<div style={errorStyle}>
			<h1 style={errorStyle}>
				<i className='fas fa-exclamation-triangle'></i>
				<br />
				You hit a wrong path <br />/{message.stringValue}
			</h1>
		</div>
	) : messageErr ? (
		<div style={errorStyle}>
			<h1>
				<i className='fas fa-exclamation-triangle'></i> {messageErr}{' '}
				<i className='fas fa-exclamation-triangle'></i>
			</h1>
		</div>
	) : null
}


ErrorMessage.propTypes = {
	message: PropTypes.string,
	messageErr: PropTypes.string
  }
export default ErrorMessage
