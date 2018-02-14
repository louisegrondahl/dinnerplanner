var MainView = function(container, model) {
	this.searchButton = container.find('#searchButton');
	this.searchInput = container.find('#searchInput');
	this.selectType = container.find('#selectType');
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
	container.find('#form').submit(function(e){
    return false;
	});
	

	this.update = function(filter) {
		var dishes = model.getAllDishes(selectType.value, filter);
		var htmlstring = "";
		var id=0;
		for (var i = 0; i < dishes.length; i++) {
			htmlstring += '<div id="'+ dishes[i].id +'" class="dishBtn col-sm-4">';
			htmlstring += '<img src="' + dishes[i].image + '"/>';
			htmlstring += '<br>';
			htmlstring += '' + dishes[i].name +' ';
			htmlstring += '</div>';	
			
		}
		dishContainer.html(htmlstring);
		
		//dishtypeContainer.html(dishtype);
		//menuContainer.html(menu);

	};

	this.update()
	model.addObserver(this)		

	this.dishBtn = container.find(".dishBtn")
}

//var selectedType = document.getElementById("selectType").value;
// 		//var dishes = model.getAllDishes(selectedType, filter);
// 		var doFilter = true;
// 		alert(selectedType);

// 		if(selectedType == 'All') {
// 			doFilter = false;
// 			alert('filter:' + filter);
// 		}

// 		if(doFilter) {
// 			var dishes = model.getAllDishes(selectedType, filter);
// 		} else {
// 			var dishes = model.getAllDishes();
// 		}
// 		//Skapa ny variabel för type,dish
// 		var dishtype = model.getSelectedDish(selectedType);


