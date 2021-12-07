'use strict'
// require the store object, we will use it to share data between different files
const store = require('../store')

$('#after-sign-in').hide()

const signUpSuccess = function (responseData) {
	// tell the user signup is successful
	$('#user-display').text(
		'You have signed up! Please sign in to start.'
	)

	// remove existing classes and add a bootstrap class - text-success
	$('#user-display').removeClass()
	$('#user-display').addClass('text-dark')

	// clear(reset) all of the forms
	$('form').trigger('reset')

	console.log('responseData is', responseData)
}

const signUpFailure = function (error) {
	// tell the user signup failed
	$('#error-message').text('failed ! try again')

	// remove existing classes and add a bootstrap class
	$('#error-message').removeClass()
	$('#error-message').addClass('text-danger')

	// set time to disappear text after 1 sec
	setTimeout(() => {
		$('#error-message').text('')
	}, 1000)

	// print the error
	console.error('error is', error)
}

const signInSuccess = function (responseData) {
	// add the 'user' we got back in our response's data to the 'store' object
	// so we can access the user's token later in api.js
	store.user = responseData.user
	console.log('store is', store)
	// tell the user signup is successful
	$('#user-display').text('welcome back!')

	// remove existing classes and add a bootstrap class - text-success
	$('#user-display').removeClass()
	$('#user-display').addClass('text-dark')

	// set time to disappear text after 1 sec
	setTimeout(() => {
		$('#user-display').text('')
	}, 1000)

	// clear(reset) all of the forms
	$('form').trigger('reset')

	// after sign in, hide the section with the id 'before-sign-in'
	$('#before-sign-in').hide()
	// after we sign in, hide the grid until 'new game' button is clicked
	$('#after-sign-in').show()
	$('#sign-out').show()

	console.log('responseData is', responseData)
}

const signInFailure = function (error) {
	// tell the user sign-in failed
	$('#error-message').text('failed! Please try again')

	// remove existing classes and add a bootstrap class
	$('#error-message').removeClass()
	$('#error-message').addClass('text-danger')

	// set time to disappear text after 1 sec
	setTimeout(() => {
		$('#error-message').text('')
	}, 1000)

	// print the error
	console.error('error is', error)
}

const signOutSuccess = function (id) {
	// tell the user change of password is successful
	$('#user-display').text('See you next time!')

	// remove existing classes and add a bootstrap class - text-success
	$('#user-display').removeClass()
	$('#user-display').addClass('text-dark')

	// set time to disappear
	setTimeout(() => {
		$('#user-display').text('')
	}, 1000)

	$('form').trigger('reset')

	$('#after-sign-in').hide()
	$('#before-sign-in').show()
}

const signOutFailure = function (error) {
	// tell the user sign-out failed
	$('#error-message').text('Failed to sign out.')

	// remove existing classes and add a bootstrap class
	$('#error-message').removeClass()
	$('#error-message').addClass('text-danger')

	// print the error
	console.error('error is', error)
}

const changePasswordSuccess = function (responseData) {
	// tell the user change of password is successful
	$('#user-display').text('You have changed your password.')

	// remove existing classes and add a bootstrap class - text-success
	$('#user-display').removeClass()
	$('#user-display').addClass('text-dark')

	// set time to disappear text after 1 sec
	setTimeout(() => {
		$('#user-display').text('')
	}, 1000)

	// clear(reset) all of the forms
	$('form').trigger('reset')

	console.log('responseData is', responseData)
}

const changePasswordFailure = function (error) {
	// tell the user sign-in failed
	$('#error-message').text('failed! Please try again')

	// remove existing classes and add a bootstrap class
	$('#error-message').removeClass()
	$('#error-message').addClass('text-danger')

	// set time to disappear text after 1 sec
	setTimeout(() => {
		$('#error-message').text('')
	}, 1000)

	// print the error
	console.error('error is', error)
}


module.exports = {
	signUpSuccess,
	signUpFailure,
	signInSuccess,
	signInFailure,
	signOutSuccess,
	signOutFailure,
	changePasswordSuccess,
	changePasswordFailure
}
