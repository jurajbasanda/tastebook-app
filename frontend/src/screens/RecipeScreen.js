import React, { Fragment, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { recipeDetail } from '../actions/recipeActions'
//Componets
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'
//Style
import '../style/RecipeScreen.scss'
//Images
import vegetarian from '../images/Vegetarian.png'
import hot from '../images/hot-food.png'
import glutenFree from '../images/gluten-free.png'
import time from '../images/time.png'

const RecipeScreen = () => {
	//Router hooks
	const { id } = useParams()
	//*Redux State
	const dispatch = useDispatch()
	const recipeDetails = useSelector((state) => state.recipeDetails)
	const { loading, error, recipe } = recipeDetails

	//Create Array
	const arrayMaking = (string) => {
		return string?.split(';')
	}
	useEffect(() => {
		dispatch(recipeDetail(id))
	}, [id, dispatch])

	return (
		<Fragment>
			{loading ? (
				<Loader />
			) : error ? (
				<ErrorMessage messageErr={error} />
			) : recipe?.message ? (
				<ErrorMessage message={recipe.message} />
			) : recipe ? (
				<Fragment>
					<section className='recipepage'>
						<div className='get-back'>
							<Link to='/'>
								<i className='fas fa-chevron-left'></i> Go back
							</Link>
						</div>
						<div className='recipepage-title'>
							<h1>{recipe.title}</h1>
							<ul>
								<li>
									<img src={time} alt='' crossOrigin='true' />
									<span>{recipe.prepTime} min</span>
								</li>
								{recipe.hot ? (
									<li>
										<img src={hot} alt='Hot food' crossOrigin='true' />
									</li>
								) : null}
								{recipe.vegeterian ? (
									<li>
										<img src={vegetarian} alt='Vegeterian food' crossOrigin='true' />
									</li>
								) : null}
								{recipe.glutenFree ? (
									<li>
										<img src={glutenFree} alt='Gluten free food' crossOrigin='true' />
									</li>
								) : null}
							</ul>
						</div>
						<div className='dsc-group'>
							<div className='dsc-ingredients-group'>
								<h2>Ingredients</h2>
								{recipe.serving ? (
									<h3>
										For {recipe.serving}
										{''}
										{recipe.servings > 1 ? <span>servings</span> : <span>serving</span>}
									</h3>
								) : null}
								<ul>
									{arrayMaking(recipe?.ingredients)?.map((step, i) => (
										<li key={i}>{step}</li>
									))}
								</ul>
							</div>
							<div className='dsc-lists'>
								<div className='dsc-imgs-group'>
									<img src={recipe?.img} alt={recipe.title} crossOrigin='true' />
								</div>
							</div>
						</div>
						<div className='dsc-method-group'>
							<h2>Directions</h2>
							<ol className='dsc-ol'>
								{arrayMaking(recipe?.directions)?.map((step, i) => (
									<li key={i}>{step}</li>
								))}
							</ol>
						</div>
					</section>
				</Fragment>
			) : null}
		</Fragment>
	)
}

export default RecipeScreen
