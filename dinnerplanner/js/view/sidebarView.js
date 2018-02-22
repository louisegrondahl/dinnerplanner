var SideBarView = function (container, model) {

	var priceContainer = container.find('#totalPrice');
	var numberOfGuests = container.find('#numberOfGuests');
	
	this.plusGuest = container.find('#plusGuest');
	this.minusGuest = container.find('#minusGuest');
	
	
	this.update = function() {

		var number = model.getNumberOfGuests();	
		var menu = model.getFullMenu();
		var name='';
		var dishprice = '';

		for (var i = 0; i < menu.length; i++) {
			name += menu[i].title + '<br>';
			var sum = menu[i].pricePerServing*number;
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
