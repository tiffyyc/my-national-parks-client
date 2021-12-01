// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvent = require('./auth/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
	$('#sign-up').on('submit', authEvent.onSignUp)
	$('#sign-in').on('submit', authEvent.onSignIn)
	$('#sign-out').on('click', authEvent.onSignOut)
})
