var orm = require("../config/orm.js");

var getBurger = {
	selectAll : function(response){
		orm.selectAll(function(data){
			response(data);
		})
	},
	createOne : function(burger_name, response){
		orm.insertOne(burger_name, function(data){
			response(data);
		});
	},
	updateOne : function(id, response){
		orm.updateOne(id, function(data){
			response(data);
		});
	}	
}


module.exports = getBurger;