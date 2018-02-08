var DinnerOverView = function(container, model) {
	var finalmenuContainer = container.find('#finalmenuContainer');
	var priceContainer = container.find('#totalPrice');
//var dishes = model.getFullMenu("allt typ");
	
	var dishes = model.getAllDishes('starter');

	this.update = function() {	
		var htmlstring = "";

		for (var i = 0; i < dishes.length; i++) {
			htmlstring += '<div class="col-sm-2">';
			htmlstring += '<img src="' + dishes[i].image + '"/>';
			htmlstring += '' + dishes[i].name +' ';
			htmlstring += '</div>';	

		}

		finalmenuContainer.html(htmlstring);
		priceContainer.html(model.getTotalMenuPrice());	
	};	
	this.update()
	model.addObserver(this)	
}	