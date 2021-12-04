'use strict'
// require the store object, we will use it to share data between different files
const store = require('../store') 

$('#after-sign-in').hide()
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
        <div class="container">
			<div class="row">
        		<div class="col-4">
				<div class="park-name">${park.name}</div>
        		<div class="park-location">${park.location}</div>
				</div>
			
        		<div class="col-8">
				<div class="park-description">${park.description}</div>
        		<!--<div class="park-id">Park ID: ${park._id}</div>-->

				
					<div class="row">
						<div class="col-4">
						<!-- collapse menu -->
						 <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    					Update</button>
						<div class="collapse" id="collapseExample">
  <div class="card card-body">
    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
  </div>
</div>
							<li class="nav-item dropdown">
								<a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" 
								aria-expanded="false">Update</a>
								
								<ul class="dropdown-menu">
									<li>
										<form class="parks-update-dynamic" data-id=${park._id}>
								<fieldset>

									<div class="row-1 px-2">
										<label class="form-label"></label>
										<input type="text" class="form-control" name="park[name]" placeholder="Name" required>
									</div>

									<div class="row-1 px-2">
										<label class="form-label"></label>
										<input type="text" class="form-control" name="park[location]" placeholder="Location" required>
									</div>

									<div class="row-1 px-2">
  										<label class="form-label"></label>
  										<input textarea class="form-control" rows="3" name="park[description]" placeholder="Description" required></textarea>
									</div>

									<div class="px-2">
									<button id="confirm-btn" class="btn btn-secondary ">Submit</button>
									</div>
								</fieldset>
										</form>
									</li>
								</ul>
								
							</li>
						</div>

						<div class="col-8">
							<button class="parks-destroy-dynamic btn btn-secondary" data-id=${park._id} data-title="${park.name}">Delete</button>
						</div>
					 </div>
				</div>
			</div>	
			<hr>
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
