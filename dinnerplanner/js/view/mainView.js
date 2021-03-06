var MainView = function(container, model) {
	var view = this;
	this.searchButton = container.find('#searchButton');
	this.searchInput = container.find('#searchInput');
	this.selectType = container.find('#selectType');
	this.dishContainer = container.find("#dishContainer");
	this.loader = container.find('.loader');
	//För att få bilderna på första sidan.
	//För att komma vidare från sök till selected type/dish
	var dishtypeContainer = container.find('#dishtypeContainer');
	//För att hämta alla dishes, hela menyn
	var menuContainer = container.find('#menuContainer');


	

	this.update = function(filter) {
		
		model.getAllDishes(selectType.value, filter, function(dishes){
		var htmlstring = "";
		var id=0;
		for (var i = 0; i < dishes.length; i++) {
			htmlstring += '<div id="'+ dishes[i].id +'" class="dishBtn col-sm-4">';
			htmlstring += '<img src="https://spoonacular.com/recipeImages/' + dishes[i].image + '"/>';
			htmlstring += '<br>';
			htmlstring += '' + dishes[i].title +' ';
			htmlstring += '</div>';	
			
		}
		view.dishContainer.html(htmlstring);
		});
		
		
	};

	this.update()
	model.addObserver(this)		

	
}