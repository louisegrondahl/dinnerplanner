var SideBarView = function (container, model) {
 	var view = this;
	var priceContainer = container.find('#totalPrice');
	var numberOfGuests = container.find('#numberOfGuests');
	
	this.dishContainer = container.find('#stringfuck');
	this.plusGuest = container.find('#plusGuest');
	this.minusGuest = container.find('#minusGuest');
	
	
	
	this.update = function() {

		var number = model.getNumberOfGuests();	
		var menu = model.getFullMenu();
		var name='';
		var dishprice = '';
		var htmlstr = '';
		var length = 12;


		for (var i = 0; i < menu.length; i++) {
			
			var sum = menu[i].pricePerServing*number;
			dishprice = sum;
			name = menu[i].title.substring(0, length) + '...';
				dishprice = sum;
				htmlstr += '<div class="row">'
				htmlstr += '<div id="' + menu[i].id + '" class="remove-button col-sm-2"><span class="glyphicon glyphicon-remove"></span></div>';
				htmlstr += '<div class="menudishname col-sm-8" >' + name + '</div>';
				htmlstr += '<div class="col-sm-2" >' + Math.round(dishprice) + '</div>';
				htmlstr += '</div>'
				htmlstr += '<br>';
		


		}


		view.dishContainer.html(htmlstr);

		priceContainer.html(model.getTotalMenuPrice());
		numberOfGuests.html(model.getNumberOfGuests());

	};

	this.update();
	model.addObserver(this)	
	
}
