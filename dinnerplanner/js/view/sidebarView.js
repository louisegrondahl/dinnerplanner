
var SideBarView = function (container, model) {

	var priceContainer = container.find('#totalPrice');
	var fullMenuContainer = container.find('#sidebarmenu');
	var gus = 0;
	this.plusGuest = container.find('#plusGuest');
	this.minusGuest = container.find('#minusGuest');
	var numberOfGuests = container.find('#numberOfGuests');
	
	this.update = function() {
		
		var dishes = model.getFullMenu();
		var html='';
		for (var i = 0; i < dishes.length; i++) {
			html += '<div class="col-xs-9">';
			html += '' + dishes[i].name + ' ';
			html += '<div id="">' + model.getTotalMenuPrice(dishes[i].id) * numberOfGuests + '</div>';
			html += '</div>'
			html += '<br>';

		}
	
		numberOfGuests.html(model.getNumberOfGuests());
		priceContainer.html(model.getTotalMenuPrice());
		fullMenuContainer.html(html);
	};

	this.update();
	model.addObserver(this)	
	
}
