import React, { Fragment, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { listRecipe } from '../actions/recipeActions'
//Style
import '../style/HomeScreen.scss'
//Components
import ErrorMessage from '../components/ErrorMessage'
import Recipes from '../components/Recipes'
import Loader from '../components/Loader'
//Images
import vegetarian from '../images/Vegetarian.png'
import hot from '../images/hot-food.png'
import glutenFree from '../images/gluten-free.png'

const HomeScreen = () => {
	const { keyword } = useParams()
	//*Redux State
	const dispatch = useDispatch()
	const recipeList = useSelector((state) => state.recipeList)
	const { loading, error, recipes, random } = recipeList
	//

	//Get all recipes
	useEffect(() => {
		dispatch(listRecipe(keyword))
	}, [dispatch, keyword])

	return (
		<Fragment>
			{!keyword ? (
				<Fragment>
					{loading ? (
						<Loader />
					) : error ? (
						<ErrorMessage messageErr={error} />
					) : (
						<Fragment>
							<section className='homepage'>
								{random ? (
									<Fragment>
										<Link to={`/recipe/${random?._id}`} className='order2'>
											<div className='info-group'>
												<ul className='time'>
													{random?.hot ? (
														<li>
															<img src={hot} alt='Hot food' crossOrigin='true' />
														</li>
													) : null}
													{random.vegeterian ? (
														<li>
															<img
																src={vegetarian}
																alt='Vegeterian food'
																crossOrigin='true'
															/>
														</li>
													) : null}
													{random?.glutenFree ? (
														<li>
															<img
																src={glutenFree}
																alt='Gluten free food'
																crossOrigin='true'
															/>
														</li>
													) : null}
												</ul>
												<h1>
													<strong>{random?.title}</strong>
												</h1>
											</div>
										</Link>
										<div
											className='first-bg'
											style={{ backgroundImage: `url(${random?.img})` }}
										></div>
									</Fragment>
								) : null}
							</section>
							<section className='recipe'>
								<h2>Popular</h2>
								<Recipes food={recipes} />
							</section>
							{recipes?.length > 8 ? (
								<div className='show-more-group'>
									<button className='show-more-btn'>Show more</button>
								</div>
							) : null}
						</Fragment>
					)}
				</Fragment>
			) : (
				<Fragment>
					{loading ? (
						<Loader />
					) : error ? (
						<ErrorMessage message={error} />
					) : (
						<section className='recipe'>
							<Recipes food={recipes} />
						</section>
					)}
				</Fragment>
			)}
		</Fragment>
	)
}

export default HomeScreen
