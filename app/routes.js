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

	// Branching

	// Route for //single-brand/choose-method/multiple-nationalites

	router.get('/single-brand/choose-method/time-in-uk', function (req, res) {
	  // get the answer from the query string (eg. ?over18=false)
	  var multiple_nationalities = req.session.data['multiple_nationalities']
	  var other_nationality = req.session.data['other_nationality']

	  if (multiple_nationalities === 'Yes' && other_nationality === undefined ) {
	    // if user DOES mutiple nationalities
	    res.redirect('/single-brand/choose-method/other-nationality')
	  } else {
	    // if user ONE nationality
	    res.render('single-brand/choose-method/time-in-uk')
	  }
	})

	// Route for //share-code/work-out-method/multiple-nationalites

	router.get('/share-code/work-out-method/time-in-uk', function (req, res) {
	  // get the answer from the query string (eg. ?over18=false)
	  var multiple_nationalities = req.session.data['multiple_nationalities']
	  var other_nationality = req.session.data['other_nationality']

	  if (multiple_nationalities === 'Yes' && other_nationality === undefined ) {
	    // if user DOES mutiple nationalities
	    res.redirect('/share-code/work-out-method/other-nationality')
	  } else {
	    // if user ONE nationality
	    res.render('share-code/work-out-method/time-in-uk')
	  }
	})

	// Dutch journey

	// /single-brand/eu/dutch/done-it-before

	router.get('/single-brand/eu/dutch/registered', function (req, res) {
	  // get the answer from the query string (eg. ?over18=false)
	  var done_it_before = req.session.data['done_it_before']

	  if (done_it_before === 'No' ) {
	    // if user DOES mutiple nationalities
	    res.redirect('/single-brand/eu/dutch/not-registered')
	  } else {
	    // if user ONE nationality
	    res.render('single-brand/eu/dutch/registered/index.html')
	  }
	})

	// /single-brand/eu/dutch/done-it-before

	router.get('/single-brand/eu/dutch/registered', function (req, res) {
	  // get the answer from the query string (eg. ?over18=false)
	  var done_it_before = req.session.data['done_it_before']

	  if (done_it_before === 'No' ) {
	    // if user DOES mutiple nationalities
	    res.redirect('/single-brand/eu/dutch/not-registered')
	  } else {
	    // if user ONE nationality
	    res.render('single-brand/eu/dutch/registered/index.html')
	  }
	})

	// /single-brand/eu/dutch/registered

	router.get('/single-brand/eu/dutch/registered/password', function (req, res) {
	  // get the answer from the query string (eg. ?over18=false)
	  var login_type = req.session.data['login_type']

	  if (login_type === 'text message' ) {
	    // if user wants to login with TEXT MESSAGE
	    res.redirect('/single-brand/eu/dutch/registered/text-message')
	  } else if (login_type === "mobile app" ){
	    // if user wants to login with MOBILE APP
	    res.redirect('/single-brand/eu/dutch/registered/mobile-app')
	  } else {
	    // if user wants to login with USERNAME and PASSWORD
	    res.render('single-brand/eu/dutch/registered/password/index.html')
	  }
	})

	// /share-code/done-it-before

	router.get('/share-code/login-from-last-time', function (req, res) {
	  // get the answer from the query string (eg. ?over18=false)
	  var used_service_before = req.session.data['used_service_before']

	  if (used_service_before === 'No' ) {
	    // if user DOES mutiple nationalities
	    res.redirect('/share-code/intro-page')
	  } else {
	    // if user ONE nationality
	    res.render('share-code/login-from-last-time.html')
	  }
	})

	module.exports = router

