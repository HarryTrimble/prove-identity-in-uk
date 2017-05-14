	var express = require('express')
	var fs = require('fs')
	var marked = require('marked')
	var path = require('path')
	var router = express.Router()
	var utils = require('../lib/utils.js')

	// Branching

	router.get('/single-brand/choose-method/time-in-uk', function (req, res) {
	  // get the answer from the query string (eg. ?over18=false)
	  var multiple_nationalities = req.session.data['multiple_nationalities']

	  if (multiple_nationalities === 'Yes' && other_nationality === undefined) {
	    // redirect to the relevant page
	    res.redirect('/single-brand/choose-method/other-nationality')
	  } else {
	    // if over18 is any other value (or is missing) render the page requested
	    res.render('single-brand/choose-method/time-in-uk')
	  }
	})

	module.exports = router

