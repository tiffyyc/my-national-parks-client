// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvent = require('./auth/events')
const parkEvents = require('./park/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
	// user authentication
	$('#sign-up').on('submit', authEvent.onSignUp)
	$('#sign-in').on('submit', authEvent.onSignIn)
	$('#change-password').on('submit', authEvent.onChangePassword)
	$('#sign-out').on('click', authEvent.onSignOut)

	// park 
	$('#parks-index').on('click', parkEvents.onIndexParks)
	$('#park-create').on('submit', parkEvents.onCreatePark)
	$('#park-update').on('submit', parkEvents.onUpdatePark)
	$('#park-destroy').on('submit', parkEvents.onDestroyPark)
	$('#park-show').on('submit', parkEvents.onShowPark)
	  $('#park-display').on(
			'click',
			'.parks-destroy-dynamic',
			parkEvents.onDynamicDestroyPark
		)

		$('#park-display').on(
			'submit',
			'.parks-update-dynamic',
			parkEvents.onDynamicUpdatePark
		)
})
