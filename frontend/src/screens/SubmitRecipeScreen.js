import React from 'react'
//Style
import '../style/SubmitRecipeScreen.scss'
//Imgs
import homemade from '../images/homemade.jpg'
const SubmitRecipeScreen = () => {
	return (
		<section className='submitpage'>
			<h1>Submit your own favorite recipe !</h1>
			<p>
				We are looking for new recipes! Got a recipe that's been passed down in
				the family?<br></br> A new recipe you came up with?
			</p>
			<img src={homemade} alt='home made food' />
			<form action=''>
				<h2>Recipe details</h2>
				<label htmlFor='title'>Recipe title</label>
				<input type='text' name='title' id='title'></input>
				<label htmlFor='servings'>Number of servings</label>
				<input type='text' name='servings' id='servings' />
				<label htmlFor='ingredients'>Ingredients</label>
				<textarea
					type='text'
					name='ingredients'
					id='ingredients'
					placeholder='1 teaspoon of paprika. '
				></textarea>
				<label htmlFor='descriptions'>Descriptions</label>
				<textarea
					type='text'
					name='descriptions'
					id='discriptions'
					placeholder='Melt the butter.'
				></textarea>
				<label htmlFor='image'>Upload a photo</label>
				<input type='file' id='image' name='image'></input>
				<label htmlFor='firstName'>First Name</label>
				<input type='text' id='firstName' name='firstName'></input>
				<label htmlFor='secondName'>Second Name</label>
				<input id='secondName' type='text' name='secondName'></input>
				<label htmlFor='email'>Email</label>
				<input type='email' id='email' name='email' />
                <div>
				<input type='checkbox' name='agree' id='agree' />
                <label htmlFor='agree'> Agree</label>
                </div>
			</form>
		</section>
	)
}

export default SubmitRecipeScreen
