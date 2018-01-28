var DishView = function(container, model) {
	//För att få bilderna på första sidan.
	var dishContainer = container.find('#dishContainer');
	//För att komma vidare från sök till selected type/dish
	var dishtypeContainer = container.find('#dishtypeContainer');
	//För att hämta alla dishes, hela menyn
	var menuContainer = container.find('#menuContainer');
	/*
	var selectElement = container.find("#selectType");
	var typeList = ['starter', 'main dish', 'dessert'];
	var index = selectElement.options[e.selectedIndex].value;
	*/
	//Skapa ny variabel för bilderna
	var dishes = model.getAllDishes('starter');
	//Skapa ny variabel för type,dish
	var dishtype = model.getSelectedDish('dessert');
	//SKapa ny variabel för hela menyn
	var menu= model.getFullMenu();
	
	//Skapa sträng för bilderna.
	var htmlstring = "";

	for (var i = 0; i < dishes.length; i++) {
		htmlstring += '<div class="col-sm-2">';
		htmlstring += '<img src="' + dishes[i].image + '"/>';
		htmlstring += '</div>';							
		
	}
	dishContainer.html(htmlstring);
	dishtypeContainer.html(dishtype);
	menuContainer.html(menu);

	

}	


