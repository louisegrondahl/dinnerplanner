
var SideBarView = function (container, model) {

	var priceContainer = container.find('#totalPrice');
	var fullMenuContainer = container.find('#dishname');
	var dishPriceContainer = container.find('#dishprice');
	var numberOfGuests = container.find('#numberOfGuests');
	
	this.plusGuest = container.find('#plusGuest');
	this.minusGuest = container.find('#minusGuest');
	
	
	this.update = function() {

		var number = model.getNumberOfGuests();
		var name='';	
		var price='';
		
		var dishes = model.getFullMenu();
		console.log("sidebarView dishes" + dishes);
		var html='';
		for (var i = 0; i < dishes.length; i++) {
			name += dishes[i].name + '<br>';
			
			
			// html += '<div class="col-xs-9">';
			// html += '' + dishes[i].name + ' ';
			// html += '<div class="col-xs-3>' + model.getTotalMenuPrice() + '</div>';
			// html += '</div>'
			// html += '<br>';

		}

		dishPriceContainer.html(price);
		numberOfGuests.html(model.getNumberOfGuests());
		priceContainer.html(model.getTotalMenuPrice());
		fullMenuContainer.html(name);
	};

	this.update();
	model.addObserver(this)	
	
}
