import React from 'react'
import PropTypes from 'prop-types'
//Styles
import '../style/NewRecipe.scss'

const NewRecipe = ({
	openComponent,
	setTitle,
	setServings,
	setKeywords,
	setIngredients,
	setDirections,
	setVegetarian,
	setHot,
	setGlutenFree,
	uploadFileHandler,
	submitHandler,
}) => {
	return (
		<div className={`new-recipe ${openComponent}`}>
			<form encType='multipart/form-data' onSubmit={submitHandler}>
				<h2>New Recipe</h2>
				<div>
					<label htmlFor='title'>Recipe title*</label>
					<input
						type='text'
						name='title'
						id='title'
						placeholder='Chicken curry'
						onChange={(e) => setTitle(e.target.value)}
						required
					/>
				</div>
				<div>
					<label htmlFor='number-of-servings'>Number of serving*</label>
					<input
						type='number'
						name='number-of-servings'
						id='number-of-servings'
						onChange={(e) => setServings(e.target.value)}
						defaultValue='1'
					/>
				</div>
				<div>
					<label htmlFor='keywords'>Keywords*</label>
					<input
						type='text'
						name='keywords'
						id='keywords'
						placeholder='chicken, rice, curry, onion'
						onChange={(e) => setKeywords(e.target.value)}
						required
					/>
				</div>
				<div className='chceck-box-group'>
					<div>
						<label htmlFor='hot'>Spicy food</label>
						<input
							type='checkbox'
							name='hot'
							id='hot'
							defaultValue='false'
							onChange={(e) => setHot(e.target.value)}
						/>
					</div>
					<div>
						{' '}
						<label htmlFor='vegetarian'>Suitable for vegetarian</label>
						<input
							type='checkbox'
							name='vegetarian'
							id='vegetarian'
							defaultValue='false'
							onChange={(e) => setVegetarian(e.target.value)}
						/>
					</div>
					<div>
						{' '}
						<label htmlFor='gluten-free'>Gluten free</label>
						<input
							type='checkbox'
							name='gluten-free'
							id='gluten-free'
							defaultValue='false'
							onChange={(e) => setGlutenFree(e.target.value)}
						/>
					</div>
				</div>
				<div>
					<label htmlFor='ingredients'>Ingredients*</label>
					<textarea
						type='text'
						name='ingredients'
						id='ingredients'
						rows='4'
						placeholder={'1 onion;\n1 tbs oil;\nSplit ingrediences using semicolon (;)'}
						onChange={(e) => setIngredients(e.target.value)}
						required
					></textarea>
				</div>
				<div>
					<label htmlFor='directions'>Directions*</label>
					<textarea
						type='text'
						name='directions'
						id='directions'
						rows='7'
						placeholder={
							'Chope onion; \nMix sugar with flour;\nSplit Steps using semicolon (;)'
						}
						onChange={(e) => setDirections(e.target.value)}
						required
					/>
				</div>
				<div className='uploadPhoto-group'>
					<label
						htmlFor='uploadPhoto'
						role='button'
						aria-hidden='true'
						title='Upload the photo of your dish'
					>
						Upload the photo of your dish*
					</label>
					<input
						type='file'
						name='image'
						aria-label='Recipe image uploader'
						accept='.jpeg, .png, .jpg'
						id='uploadPhoto'
						onChange={uploadFileHandler}
						required
					/>
					<small>JPEG/PNG/JPG, max 10MB</small>
					<div className='photo-guideline'>
						<h3>Photo Guidelines</h3>
						<ul>
							<li>
								<i className='fas fa-check'></i> Landscape (horizontal) photos
							</li>
							<li>
								<i className='fas fa-check'></i> Photos including your dish
							</li>
						</ul>
						<br></br>
						<ul>
							<li>
								<i className='fas fa-times'></i> No portrait (vertical) photos
							</li>
							<li>
								<i className='fas fa-times'></i> No people or pets in your photo
							</li>
							<li>
								<i className='fas fa-times'></i> No personal information (name, age, etc.)
							</li>
						</ul>
					</div>
				</div>
				<button className='red-btn'>Submit</button>
			</form>
		</div>
	)
}
NewRecipe.propTypes = {
	openComponent: PropTypes.any,
	setTitle: PropTypes.any,
	setServings: PropTypes.any,
	setKeywords: PropTypes.any,
	setIngredients: PropTypes.any,
	setDirections: PropTypes.any,
}

export default NewRecipe
