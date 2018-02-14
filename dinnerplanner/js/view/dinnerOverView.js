var DinnerOverView = function(container, model) {
	var finalmenuContainer = container.find('#finalmenuContainer');
	var priceContainer = container.find('#totalPrice');
	var numberOfGuests = container.find('#guests');
	
	

	this.update = function() {	
		var dishes = model.getFullMenu();
		var guests = model.getNumberOfGuests();
		var html = '<h2 style="padding-left:20px;display:inline;">My Dinner:' + ' ' + guests + ' people</h2>';

		var htmlstring = "";

		for (var i = 0; i < dishes.length; i++) {
			htmlstring += '<div class="col-sm-2">';
			htmlstring += '<img src="' + dishes[i].image + '"/>';
			htmlstring += '<br>';
			htmlstring += '' + dishes[i].name +' ';
			htmlstring += '</div>';	

		}
		numberOfGuests.html(html);
		finalmenuContainer.html(htmlstring);
		priceContainer.html(model.getTotalMenuPrice());	
	};	
	this.update()
	model.addObserver(this)	
}	