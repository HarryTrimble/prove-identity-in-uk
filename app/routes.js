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

	  var time_in_uk = req.session.data['time_in_uk']

	  if (time_in_uk === 'less than a year' ) {
	    // if user has been in uk MORE than a year
	    res.redirect('/work-out-method/nationality')	  
	  } else {
	    // if user has been in UK MORE than a year
	    res.render('work-out-method/select-documents')
	  }
	})

	// Route for /work-out-method/multiple-nationalites

	router.get('/work-out-method/result', function (req, res) {

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

	  var journey = req.session.data['journey']

	  if (journey === 'multiple-brands' ) {
	    // if users is verifying across MULTIPLE BRANDS
	    res.redirect('/multiple-brands/eu/dutch/redirect')	 
	  } else {
	    // if users is verifying across SINGLE BRAND
	    res.render('single-brand/eu/dutch/registered/index.html')
	  }
	})

	// Route for /passing-data

	router.get('/multiple-brands/confirm-your-details', function (req, res) {
	  // get the answer from the query string (eg. ?over18=false)
	  var journey = req.session.data['journey']

	  if (journey === 'single-brand' ) {
	    // if going through /single-brand journey
	    res.redirect('/single-brand/confirm-your-details')
	  } else if (journey === "share-code" ){
	    // if going through /share-code journey
	    res.redirect('/share-code/confirm-your-details')
	  } else if (journey === "send" ){
	    // if going through /send journey
	    res.redirect('/send/confirm-your-details')	 
	  } else {
	    // // if going through /multiple-brands journey
	    res.render('multiple-brands/confirm-your-details/index.html')
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

	  var used_service_before = req.session.data['used_service_before']

	  if (used_service_before === 'No' ) {
	    // if user has NOT used service before
	    res.redirect('/share-code/data-to-share')
	  } else {
	    // if user HAS used service before
	    res.render('share-code/login-from-last-time.html')
	  }
	})


	// Route for /share-code/data-to-share

	router.get('/share-code/intro-page', function (req, res) {

	  var data_to_share = req.session.data['data_to_share']
	  var specify_data = req.session.data['specify_data']

	  if (data_to_share === 'other' && specify_data === undefined ) {
	    // if users reason to share data ISN'T listed
	    res.redirect('/share-code/specify-data')
	  } else {
	    // if users reason to share data IS listed
	    res.render('share-code/intro-page.html')
	  }
	})

	// Route for /share-code/email/notify

	router.get('/share-code/create-code/how-to-notify', function (req, res) {

	  var notify = req.session.data['notify']

	  if (notify === 'No' ) {
	    // if user DOESN'T want to be notifed when information is checked
	    res.redirect('/share-code/create-code/confirmation-page')
	  } else {
	    // if user DOES want to be notifed when information is checked
	    res.render('share-code/create-code/how-to-notify.html')
	  }
	})

	// SEND routes

	// Route for /send/used-service-before

	router.get('/send/login-from-last-time', function (req, res) {

	  var used_service_before = req.session.data['used_service_before']

	  if (used_service_before === 'No' ) {
	    // if user has NOT used service before
	    res.redirect('/send/data-to-share')
	  } else {
	    // if user HAS used service before
	    res.render('send/login-from-last-time.html')
	  }
	})

	// Route for /send/data-to-share

	router.get('/send/intro-page', function (req, res) {

	  var data_to_share = req.session.data['data_to_share']
	  var specify_data = req.session.data['specify_data']

	  if (data_to_share === 'other' && specify_data === undefined ) {
	    // if users reason to share data ISN'T listed
	    res.redirect('/send/specify-data')
	  } else {
	    // if users reason to share data IS listed
	    res.render('send/intro-page.html')
	  }
	})

	// Route for /send/email/notify

	router.get('/send/email/how-to-notify', function (req, res) {

	  var notify = req.session.data['notify']

	  if (notify === 'No' ) {
	    // if user DOESN'T want to be notifed when information is checked
	    res.redirect('/send/email/confirmation-page')
	  } else {
	    // if user DOES want to be notifed when information is checked
	    res.render('send/email/how-to-notify.html')
	  }
	})

	module.exports = router

