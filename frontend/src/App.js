import React from 'react'
import { BrowserRouter as BRouter, Route, Switch } from 'react-router-dom'
//Screens
import HomeScreen from './screens/HomeScreen'
import RecipeScreen from './screens/RecipeScreen'
import LoginScreen from './screens/LoginScreen'
import SubmitRecipeScreen from './screens/SubmitRecipeScreen'
import NoMatch from './screens/NoMatch'
//Components
import Nav from './components/Nav'
import Footer from './components/Footer'
//Style
import './style/App.scss'
import SignUpScreen from './screens/SignUpScreen'
import MyAccountScreen from './screens/MyAccountScreen'

function App() {
	return (
		<>
			<BRouter>
				<Nav />
				<Switch>
					<Route path='/search/:keyword' exact>
						<HomeScreen />
					</Route>
					<Route path='/page/:pageNumber' exact>
						<HomeScreen />
					</Route>
					<Route path='/search/:keyword/page/:pagenumber' exact>
						<HomeScreen />
					</Route>
					<Route path='/' exact>
						<HomeScreen />
					</Route>
					<Route path='/recipe/:id'>
						<RecipeScreen />
					</Route>
					<Route path='/submit-recipe'>
						<SubmitRecipeScreen />
					</Route>
					<Route path='/myaccount/:newrecipe'>
						<MyAccountScreen />
					</Route>
					<Route path='/myaccount'>
						<MyAccountScreen />
					</Route>
					<Route path='/register'>
						<SignUpScreen />
					</Route>
					<Route path='/login'>
						<LoginScreen />
					</Route>
					<Route path='*'>
						<NoMatch />
					</Route>
				</Switch>
				<Footer />
			</BRouter>
		</>
	)
}

export default App
