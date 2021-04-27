import React from 'react'
import PropTypes from 'prop-types'

const ProfileInfo = ({ user }) => {
	// const submitHandler = (e) => {
	// 	e.preventDefault()
	// 	if (password !== confirmPassword) {
	// 		setMessage('Passwords do not match')
	// 	} else {
	// 		dispatch(
	// 			updateUserProfile({
	// 				id: user._id,
	// 				firstName,
	// 				lastName,
	// 				email,
	// 				password,
	// 			})
	// 		)
	// 	}
	// }
	return (
		<table className='profile-table'>
			<tbody>
				<tr>
					<td>User ID: </td>
					<td>{user._id}</td>
				</tr>
				<tr>
					<td>First name: </td>
					<td>{user.firstName}</td>
				</tr>
				<tr>
					<td>Last name: </td>
					<td>{user.lastName}</td>
				</tr>
				<tr>
					<td>E-mail adress: </td>
					<td>{user.email}</td>
				</tr>
			</tbody>
		</table>
	)
}
ProfileInfo.propTypes = {
	user: PropTypes.object
}

export default ProfileInfo
