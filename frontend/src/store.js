import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {
	recipeListReducer,
	recipeDetailsReducer,
	recipeUserReducer,
	recipeCreateReducer,
	recipeDeleteReducer
} from './reducers/recipeReducer'
import {
	userLoginReducer,
	userRegisterReducer,
	userDetailsReducer,
	userUpdateReducer,
	userListReducer,
	userUpdateProfileReducer,
} from './reducers/userReducer'

const loginFromStorage = localStorage.getItem('userInfo')
	? JSON.parse(localStorage.getItem('userInfo'))
	: null

const initialState = { userLogin: { userInfo: loginFromStorage } }
const reducer = combineReducers({
	recipeList: recipeListReducer,
	recipeDetails: recipeDetailsReducer,
	recipeUser: recipeUserReducer,
	createRecipe:recipeCreateReducer,
	recipeDelete: recipeDeleteReducer,
	userLogin: userLoginReducer,
	userRegister: userRegisterReducer,
	userDetails: userDetailsReducer,
	userUpdateProfile: userUpdateProfileReducer,
	userUpdate: userUpdateReducer,
	userList: userListReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
	reducer,
	initialState,
	composeEnhancer(applyMiddleware(thunk))
)

export default store
