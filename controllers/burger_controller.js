/*
Below are the routes which will be needed by the app
*/
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

// Routes when user goes to the main page
router.get('/', function (req, res) {
	res.redirect('/burgers');
});

// Route to pull all order
router.get('/burgers', function (req, res) {
	burger.all(function (data) {
		var hbsObject = { burgers: data };
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

// Route to add an order to the burger database
router.post('/burgers/create', function (req, res) {
	burger.create(['burger_name', 'devoured'], [req.body.name, req.body.devoured], function () {
		result.redirect('/burgers');
	});
});

// Route to update burger databse when order picked up
router.put('burgers/update/:id', function (req, res) {
	var condition = 'id = ' + re.params.id;

	console.log('condition', condition);

	burger.update({ devoured: req.body.devoured }, condition, function () {
		res.redirect('/burgers');
	});
});

//Route to delete an order - Future use
router.delete('burgers/delete/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	burger.delete(condition, function () {
		res.redirect('/burgers');
	});
});

module.exports = router;