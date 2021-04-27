import React from 'react'
import PropTypes from 'prop-types'

const UserRecipeList = ({ allUserRecipes, handleDeleteRecipe }) => {
	//Date format
	const dateFormat = (recipeDate) => {
		const dateObj = new Date(recipeDate)
		const month = dateObj.getMonth() + 1
		const day = dateObj.getDate()
		const year = dateObj.getFullYear()

		return `${day}/${month}/${year}`
	}
	return (
		<table className='recipe-table'>
			<thead>
				<tr>
					<th>Date</th>
					<th>Title</th>
					<th>Keywords</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{allUserRecipes?.map((recipe) => (
					<tr key={recipe._id}>
						<td>{dateFormat(recipe.date)} </td>
						<td>{recipe.title}</td>
						<td>{recipe.keywords}</td>
						<td>
							<button className='red-btn' onClick={() => handleDeleteRecipe(recipe?._id)}>
								Delete
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}
UserRecipeList.propTypes = {
	allUserRecipe: PropTypes.array,
}

export default UserRecipeList
