var SideBarView = function (container, model) {

	var priceContainer = container.find('#totalPrice');
	//var dishPriceContainer = container.find('#dishprice');
	var numberOfGuests = container.find('#numberOfGuests');
	
	this.plusGuest = container.find('#plusGuest');
	this.minusGuest = container.find('#minusGuest');
	
	
	this.update = function() {

		var number = model.getNumberOfGuests();	
		var menu = model.getFullMenu();
		var name='';
		var dishprice = '';

		for (var i = 0; i < menu.length; i++) {
			name += menu[i].name + '<br>';
			var sum = 0;
			for (var j = 0; j < menu[i].ingredients.length; j++) {
				sum += menu[i].ingredients[j].price*number;
			}
			dishprice += sum+"</br>";
			
		}

		container.find('#tdS1').html(name);
		container.find('#tdS2').html(dishprice);
		priceContainer.html(model.getTotalMenuPrice());
		numberOfGuests.html(model.getNumberOfGuests());

	};

	this.update();
	model.addObserver(this)	
	
}
