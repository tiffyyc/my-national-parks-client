'use strict'
// require the store object, we will use it to share data between different files
const store = require('../store') 

// a function to run when we successfully get all the books from the API
const onIndexParksSuccess = function (responseData) {
	// extract the books from our response data into a variable to make it easier to use
	const parks = responseData.parks
	console.log(responseData)

	// create a string that will store all of our books as html
	// so we can use the '.html' method to display the books on the page later
	let parksHtml = ''

	// loop over all of the books
	parks.forEach((park) => {
		// add html for each book to the parksHtml variable
		parksHtml += `
        <div>
        <h4>Name: ${park.name}</h4>
        <p>Location: ${park.location}</p>
        <p>Description: ${park.description}</p>
        <p>Owner: ${park._id}</p>
  <!-- Add park's id to the delete button. we can access it with jQuery's data() method later in events.js-->
        <button class="parks-destroy-dynamic" data-id=${park._id} data-title="${park.name}">
        delete book</button>

        <form class="parks-update-dynamic" data-id=${park._id}>
            <input type="text" name="park[name]" placeholder="Name" required>
            <input type="text" name="park[location]" placeholder="Location" required>
            <input type="text" name="park[description]" placeholder="Description" required>
            
              <button>update park</button>
              </form>
        </div>
        `
	})

	// select the div with id park-display ($('park-display'))
	// and updated it's html, to be the html of all the books we want to show
	$('#park-display').html(parksHtml)
}

const onShowParkSuccess = function (responseData) {
	// extract the park object from our response's data
	const park = responseData.parks
	console.log(responseData)

	// create the html to display a single park
	const parksHtml = `
    <div>
        <h4>Name: ${park.name}</h4>
        <p>Location: ${park.location}</p>
        <p>Description: ${park.description}</p>
        <p>Owner: ${park._id}</p>
        </div>
        `
	// for the div with the id books-display set its html to be our book's html
	$('#park-display').html(parksHtml)
	// select every form on the page, then reset the forms
	// (clear the inputs)
	$('form').trigger('reset')
}

const onDestroyParkSuccess = function () {
	$('#park-display').text('Your park has been deleted.')
	$('#park-display').addClass('text-success')
	$('form').trigger('reset')

	// after 5 second(5000milliseconds, run our callback function)
	setTimeout(() => {
		// remove the message from books-display
		$('#park-display').html('')
		// remove the green color causes by 'text-success'
		$('#park-display').removeClass('text-success')
	}, 5000)
}

const onUpdateParkSuccess = function () {
	$('#park-display').text('Your park has been updated.')
	$('form').trigger('reset')
}

const onCreateParkSuccess = function () {
	$('#park-display').text('Your park has been created.')
	$('form').trigger('reset')
}

// a function to run anytime an error occurs
const onError = function (err) {
	// if an error occurs, we will log the error (err)
	console.error(err)

	$('#error-message').text('please try again')
	// make our error-message red by adding the bootstrap text-danger class
	$('#error-message').addClass('text-danger')

	// after 5 second(5000milliseconds, run our callback function)
	setTimeout(() => {
		// remove the message from books-display
		$('#error-message').html('')
		// remove the green color causes by 'text-success'
		$('#error-message').removeClass('text-danger')
	}, 5000)
}
// export our ui success and failure handler functions
// so they can be imported in 'event.js'
module.exports = {
	onIndexParksSuccess,
	onShowParkSuccess,
	onDestroyParkSuccess,
	onUpdateParkSuccess,
	onCreateParkSuccess,
	onError,
}
