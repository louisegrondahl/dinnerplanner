
var SideBarView = function (container, model) {
	
	this.confirmButton = container.find('#confirmButton');
	this.plusButton = container.find('#plusGuest');
	this.minusButton = container.find('#minusGuest');


	var priceContainer = container.find('#totalPrice');
	var fullMenuContainer = container.find('#fullMenu');
	var gus = 0;
	var plusGuest = container.find('#plusGuest');
	var minusGuest = container.find('#minusGuest');
	var numberOfGuests = container.find('#numberOfGuests');
	
	this.update = function() {
		plusGuest.click(function(){
			gus = gus + 1;
			numberOfGuests.html(gus);
		});
		minusGuest.click(function(){
			if (gus > 0){
				gus = gus - 1;
				numberOfGuests.html(gus);
			};

		});

	numberOfGuests.html(model.getNumberOfGuests());
	priceContainer.html(model.getTotalMenuPrice());
	fullMenuContainer.html(model.getFullMenu());
	};

	this.update()
	model.addObserver(this)	
	
}
 
