// Below are the models to use the orms build in orm.js to interface with the orms.js.


var orm = require('../config/orm.js');

var burger = {
	// orm to show all values in the burger database.
	all: function (callback) {
		orm.all('burgers', function (res) {
			callback(res);
		});
	},
	// orm to add values to the burger database
	// cols and vals are arrays
	create: function (cols, vals, callback) {
		orm.create('burgers', cols, vals, function (res) {
			callback(res);
		});
	},
	// orm to update values in the burger database
	// objColVals would be the columns and values that you want to update	
	update: function (objColVals, condition, callback) {
		orm.update('burgers', objColVals, condition, function (res) {
			callback(res);
		});
	},
	// orm to delete from the burger database - future use.
	delete: function (condition, callback) {
		orm.delete('burgers', condition, function (res) {
			callback(res);
		});
	}
};

module.exports = burger;