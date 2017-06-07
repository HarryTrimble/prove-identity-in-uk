	var express = require('express')
	var fs = require('fs')
	var marked = require('marked')
	var path = require('path')
	var router = express.Router()
	var utils = require('../lib/utils.js')

	// Route index page
	router.get('/', function (req, res) {
	  res.render('index')
	})

	// WORK-OUT-METHOD routes

	// Route for /work-out-method/multiple-nationalites

	router.get('/work-out-method/select-documents', function (req, res) {
	  // get the answer from the query string (eg. ?over18=false)
	  var time_in_uk = req.session.data['time_in_uk']

	  if (time_in_uk === 'less than a year' ) {
	    // if user DOES mutiple nationalities
	    res.redirect('/work-out-method/nationality')	  
	  } else {
	    // if user ONE nationality
	    res.render('work-out-method/select-documents')
	  }
	})

	// Route for /work-out-method/multiple-nationalites

	router.get('/work-out-method/result', function (req, res) {

		console.log("multiple_nationalities");

	  // get the answer from the query string (eg. ?over18=false)
	  var multiple_nationalities = req.session.data['multiple_nationalities']
	  var other_nationality = req.session.data['other_nationality']

	  if (multiple_nationalities === 'Yes' && other_nationality === undefined ) {
	    // if user DOES mutiple nationalities
	    res.redirect('/work-out-method/other-nationality')	  
	  } else {
	    // if user ONE nationality
	    res.render('work-out-method/result')
	  }
	})

	// Route for /access-your-data

	router.get('/single-brand/eu/dutch/registered', function (req, res) {
	  // get the answer from the query string (eg. ?over18=false)
	  var journey = req.session.data['journey']

	  if (journey === 'multiple-brands' ) {
	    // if user DOES mutiple nationalities
	    res.redirect('/multiple-brands/eu/dutch/redirect')	 
	  } else {
	    // if user ONE nationality
	    res.render('single-brand/eu/dutch/registered/index.html')
	  }
	})

	// Route for /passing-data

	router.get('/multiple-brands/verify/account-created', function (req, res) {
	  // get the answer from the query string (eg. ?over18=false)
	  var journey = req.session.data['journey']

	  if (journey === 'single-brand' ) {
	    // if user DOES mutiple nationalities
	    res.redirect('/single-brand/confirm-your-details')
	  } else if (journey === "share-code" ){
	    // if user wants to login with MOBILE APP
	    res.redirect('/share-code/confirm-your-details')
	  } else if (journey === "send" ){
	    // if user wants to login with MOBILE APP
	    res.redirect('/send/confirm-your-details')	 
	  } else {
	    // if user ONE nationality
	    res.render('multiple-brands/verify/account-created/index.html')
	  }
	})

	// SINGLE-BRAND routes

	// /single-brand/eu/dutch/registered

	router.get('/single-brand/eu/dutch/registered/password/login', function (req, res) {
	  // get the answer from the query string (eg. ?over18=false)
	  var login_type = req.session.data['login_type']

	  if (login_type === 'text message' ) {
	    // if user wants to login with TEXT MESSAGE
	    res.redirect('/single-brand/eu/dutch/registered/text-message/login')
	  } else if (login_type === "mobile app" ){
	    // if user wants to login with MOBILE APP
	    res.redirect('/single-brand/eu/dutch/registered/mobile-app/login')
	  } else {
	    // if user wants to login with USERNAME and PASSWORD
	    res.render('single-brand/eu/dutch/registered/password/login.html')
	  }
	})

	// SHARE-CODE routes

	// Route for /share-code/used-service-before

	router.get('/share-code/login-from-last-time', function (req, res) {
	  // get the answer from the query string (eg. ?over18=false)
	  var used_service_before = req.session.data['used_service_before']

	  if (used_service_before === 'No' ) {
	    // if user DOES mutiple nationalities
	    res.redirect('/share-code/data-to-share')
	  } else {
	    // if user ONE nationality
	    res.render('share-code/login-from-last-time.html')
	  }
	})


	// Route for /share-code/data-to-share

	router.get('/share-code/intro-page', function (req, res) {
	  // get the answer from the query string (eg. ?over18=false)
	  var data_to_share = req.session.data['data_to_share']
	  var specify_data = req.session.data['specify_data']

	  if (data_to_share === 'other' && specify_data === undefined ) {
	    // if user DOES mutiple nationalities
	    res.redirect('/share-code/specify-data')
	  } else {
	    // if user ONE nationality
	    res.render('share-code/intro-page.html')
	  }
	})

	// Route for /send/email/notify

	router.get('/share-code/create-code/how-to-notify', function (req, res) {
	  // get the answer from the query string (eg. ?over18=false)
	  var notify = req.session.data['notify']

	  if (notify === 'No' ) {
	    // if user DOES mutiple nationalities
	    res.redirect('/share-code/create-code/confirmation-page')
	  } else {
	    // if user ONE nationality
	    res.render('share-code/create-code/how-to-notify.html')
	  }
	})

	// SEND routes

	// Route for /send/used-service-before

	router.get('/send/login-from-last-time', function (req, res) {
	  // get the answer from the query string (eg. ?over18=false)
	  var used_service_before = req.session.data['used_service_before']

	  if (used_service_before === 'No' ) {
	    // if user DOES mutiple nationalities
	    res.redirect('/send/data-to-share')
	  } else {
	    // if user ONE nationality
	    res.render('send/login-from-last-time.html')
	  }
	})

	// Route for /send/data-to-share

	router.get('/send/intro-page', function (req, res) {
	  // get the answer from the query string (eg. ?over18=false)
	  var data_to_share = req.session.data['data_to_share']
	  var specify_data = req.session.data['specify_data']

	  if (data_to_share === 'other' && specify_data === undefined ) {
	    // if user DOES mutiple nationalities
	    res.redirect('/send/specify-data')
	  } else {
	    // if user ONE nationality
	    res.render('send/intro-page.html')
	  }
	})

	// Route for /send/email/notify

	router.get('/send/email/how-to-notify', function (req, res) {
	  // get the answer from the query string (eg. ?over18=false)
	  var notify = req.session.data['notify']

	  if (notify === 'No' ) {
	    // if user DOES mutiple nationalities
	    res.redirect('/send/email/confirmation-page')
	  } else {
	    // if user ONE nationality
	    res.render('send/email/how-to-notify.html')
	  }
	})

	module.exports = router

