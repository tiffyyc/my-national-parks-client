'use strict'

// require the config file, so have our API's url
const config = require('../config')
// require the store file, so have access to store object
// so we had the user's token when making authenticated requests
const store = require('../store')

// 'formData' will be our credentials objects w/ email, password and confirmation
const signUp = function (formData) {
	// make a request to POST (sign-up)
	return $.ajax({
		url: `${config.apiUrl}/sign-up`,
		method: 'POST',
		// make sure to send the formData along as the body of our request
		// formData comes from curl-scripts
		data: formData,
	})
}

const signIn = function (formData) {
	// make a request to POST (sign-in)
	return $.ajax({
		url: `${config.apiUrl}/sign-in`,
		method: 'POST',
		// make sure to send the formData along as the body of our request
		// formData comes from curl-scripts
		data: formData,
	})
}

const signOut = function () {
	// make a request to DELETE (sign-out)
	return $.ajax({
		url: `${config.apiUrl}/sign-out`,
		method: 'DELETE',
		// add our authorization header, so the api can use the token to know who is trying to change the password
		headers: {
			Authorization: 'Bearer ' + store.user.token,
		},
	})
}

const changePassword = function (formData) {
	// make a request to PATCh (change-password)
	return $.ajax({
		url: `${config.apiUrl}/change-password`,
		method: 'PATCH',
		// add our authorization header, so the api can use the token to know who is trying to change the password
		data: formData,
		headers: {
			Authorization: 'Bearer ' + store.user.token,
		},
	})
}

module.exports = {
	signUp,
	signIn,
	signOut,
    changePassword
}
