'use strict'
// require the config file, so we have access to our API's url
const config = require('../config')
const store = require('../store')

// this function will make a request to GET /parks =
const index = function () {
	// make sure to 'return' the promise from $.ajax
	return $.ajax({
		// optional: because the default is 'GET'
		method: 'GET',
		url: config.apiUrl + '/parks',
		headers: {
			Authorization: 'Bearer ' + store.user.token,
		},
	})
}
// this function will make a GET request for a single park
// id - of the book we want to show
const show = function (id) {
	return $.ajax({
		method: 'GET',
		// use the path to a single park
		url: config.apiUrl + '/parks/' + id,
		headers: {
			Authorization: 'Bearer ' + store.user.token,
		},
	})
}

// this function will make a DELETE request for a single park
const destroy = function (id) {
	return $.ajax({
		method: 'DELETE',
		url: config.apiUrl + '/parks/' + id,
		headers: {
			Authorization: 'Bearer ' + store.user.token,
		},
	})
}

// this function will make a PATCH request for a single park
const update = function (id, formData) {
	return $.ajax({
		method: 'PATCH',
		url: config.apiUrl + '/parks/' + id,
		// when making our $.ajax request, include the formData
		// so it has the new title & author
		data: formData,
		headers: {
			Authorization: 'Bearer ' + store.user.token,
		},
	})
}

const create = function (formData) {
	return $.ajax({
		method: 'POST',
		url: config.apiUrl + '/parks',
		// when making our $.ajax request, include the formData
		// so it has the new content
		data: formData,
		headers: {
			Authorization: 'Bearer ' + store.user.token,
		},
	})
}

// export the api function 'index', so it can be called in 'events.js'
module.exports = {
	index,
	show,
	destroy,
	update,
	create,
}
