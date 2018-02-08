var DishView = function(container, model) {
	//För att få bilderna på första sidan.
	var dishContainer = container.find('#dishContainer');
	//För att komma vidare från sök till selected type/dish


	//Skapa ny variabel för bilderna
	var dishes = model.getAllDishes('starter');

	
	//Skapa sträng för bilderna.
	var htmlstring = "";

	for (var i = 0; i < dishes.length; i++) {
		htmlstring += '<div class="col-sm-2">';
		htmlstring += '<img src="' + dishes[i].image + '"/>';
		htmlstring += '' + dishes[i].name +' ';
		htmlstring += '</div>';							
		
	}
	dishContainer.html(htmlstring);

	

}	


