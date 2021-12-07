'use strict'
// require the getFormFields function to get data from our forms
const getFormFields = require('../../lib/get-form-fields')

// require our api auth functions
const api = require('./api')
// require our ui functions to update the page
const ui = require('./ui')

const onSignUp = function (event) {
	// prevent the default action of refreshing the page
	event.preventDefault()

	// event.target is the form that cause the 'submit' event
	const form = event.target
	// get the data from our form element
	const formData = getFormFields(form)

	// make a POST (sign-up) request, pass it t0 email/password/confirmation
	api
		.signUp(formData)
		// if our sign up request is successful, run the signUpSuccess function
		.then(ui.signUpSuccess)
		// otherwise, signUpFailure function will run if an error occurred
		.catch(ui.signUpFailure)
}

const onSignIn = function (event) {
	// prevent the default action of refreshing the page
	event.preventDefault()

	// event.target is the form that cause the 'submit' event
	const form = event.target
	// get the data from our form element
	const formData = getFormFields(form)

	// make a POST (sign-in) request, pass it t0 email/password
	api
		.signIn(formData)
		// if our sign in request is successful, run the signInSuccess function
		.then(ui.signInSuccess)
		// otherwise, signInFailure function will run if an error occurred
		.catch(ui.signInFailure)
}

const onSignOut = function () {
	// make a PATCH (change-password) request, pass it t0 old and new passwords
	api
		.signOut()
		// if our sign up request is successful, run the changePasswordSuccess function
		.then(ui.signOutSuccess)
		// otherwise, signUpFailure function will run if an error occurred
		.catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
	// prevent the default action of refreshing the page
	event.preventDefault()

	// event.target is the form that cause the 'submit' event
	const form = event.target
	// get the data from our form element
	const formData = getFormFields(form)

	// make a PATCH (change-password) request, pass it t0 old and new passwords
	api
		.changePassword(formData)
		// if our sign up request is successful, run the changePasswordSuccess function
		.then(ui.changePasswordSuccess)
		// otherwise, signUpFailure function will run if an error occurred
		.catch(ui.changePasswordFailure)
}

// export event handler functions, so we can use them in app.js
module.exports = {
	onSignUp,
	onSignIn,
	onSignOut,
	onChangePassword
}
