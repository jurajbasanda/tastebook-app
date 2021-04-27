import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Recipes = ({ food }) => {
	return (
		<Fragment>
			<div className='recipe-group'>
				{food.map((item) => (
					<Link to={`/recipe/${item._id}`} key={item._id}>
						<div className='item'>
							<div className='image'>
								<img src={item.img} alt={item.title} srcSet='' crossorigin />
							</div>
							<h3>{item.title}</h3>
						</div>
					</Link>
				))}
			</div>
		</Fragment>
	)
}
Recipes.propTypes = {
	food: PropTypes.array,
}
export default Recipes
