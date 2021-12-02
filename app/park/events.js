'use strict'

// import the api functions from 'api.js'
const api = require('./api')
// import the ui success and failure handler functions
const ui = require('./ui')
// importing the getFormFields function, to get data out of our form
const getFormFields = require('../../lib/get-form-fields')

// this function is called whenever the 'books-index' button is clicked
const onIndexParks = () => {
	// make our index request GET /books
	api
		.index()
		// if our HTTP request to get the books was successful, *then* update our page to show all of the books
		.then(ui.onIndexParksSuccess)
		// otherwise, if an error occurred, log it as a red error message
		.catch(ui.onError)
}

const onShowPark = (event) => {
	// prevent the default action of the form refreshing the page
	// when it is submitted.
	event.preventDefault()

	// event.target is whatever submitted the event, we are storing it in the user friendly variable 'form'
	const form = event.target
	// get the data our of the form
	const formData = getFormFields(form)
	console.log(formData)

	// extract the id from our form's data
	const id = formData.park.id
	// make an HTTP request to show a single book based on it's id
	api
		.show(id)
		// if getting a single book was successful, show it on the page
		.then(ui.onShowParkSuccess)
		// otherwise, show error message
		.catch(ui.onError)
}

const onDestroyPark = (event) => {
	// prevent the default action of the form refreshing the page
	// when it is submitted.
	event.preventDefault()

	// event.target is whatever submitted the event, we are storing it in the user friendly variable 'form'
	const form = event.target
	// get the data our of the form
	const formData = getFormFields(form)
	console.log(formData)

	// extract the id from our form's data
	const id = formData.park.id
	// make an HTTP request to
	api
		.destroy(id)
		// if getting a single book was successful, show it on the page
		.then(ui.onDestroyParkSuccess)
		// otherwise, show error message
		.catch(ui.onError)
}

const onUpdatePark = (event) => {
	// prevent the default action of the form refreshing the page
	// when it is submitted.
	event.preventDefault()

	// event.target is whatever submitted the event, we are storing it in the user friendly variable 'form'
	const form = event.target
	// get the data our of the form
	const formData = getFormFields(form)
	console.log(formData)

	// extract the id from our form's data
	const id = formData.park.id
	// make an HTTP request to update a single book based on it's id
	// pass 'formData' to update the book with a new title & author
	api
		.update(id, formData)
		// if getting a single book was successful, show it on the page
		.then(ui.onUpdateParkSuccess)
		// otherwise, show error message
		.catch(ui.onError)
}

const onCreatePark = (event) => {
	// prevent the default action of the form refreshing the page
	// when it is submitted.
	event.preventDefault()

	// event.target is whatever submitted the event, we are storing it in the user friendly variable 'form'
	const form = event.target
	// get the data out of the form
	const formData = getFormFields(form)
	console.log(formData)

	// extract the id from our form's data
	// const id = formData.park.id
	// make an HTTP request to update a single park based on it's id
	// pass 'formData' to update post with a new content
	api
		.create(formData)
		// if getting a single book was successful, show it on the page
		.then(ui.onCreateParkSuccess)
		// otherwise, show error message
		.catch(ui.onError)
}

const onDynamicDestroyPark = (event) => {
	// select the button(event.target) and access its data-id attribute
	const id = $(event.target).data('id')

	// make an HTTP request to destroy a single book based on its id
	api
		.destroy(id)
		// if getting a single book was successful, show it on the page
		.then(ui.onDestroyParkSuccess)
		// otherwise, show error message
		.catch(ui.onError)
}

const onDynamicUpdatePark = (event) => {
	// prevent the default action of the form refreshing the page
	// when it is submitted.
	event.preventDefault()

	// event.target is whatever submitted the event, we are storing it in the user friendly variable 'form'
	const form = event.target
	// get the data our of the form
	const formData = getFormFields(form)
	console.log(formData)

	// select the id from the data-id attribute on the form
	const id = $(event.target).data('id')
	// make an HTTP request to update a single book based on it's id
	// pass 'formData' to update the book with a new title & author
	api
		.update(id, formData)
		// if getting a single book was successful, show it on the page
		.then(ui.onUpdateParkSuccess)
		// otherwise, show error message
		.catch(ui.onError)
}

// export the 'onIndexBooks' function, so that it can be 'imported' and used in app.js
module.exports = {
	// onIndexBooks: onIndexBooks
	// since the name and the value are the same, we can use the shorthand syntax
	onIndexParks,
	onShowPark,
	onDestroyPark,
	onUpdatePark,
	onCreatePark,
	onDynamicDestroyPark,
	onDynamicUpdatePark,
}
