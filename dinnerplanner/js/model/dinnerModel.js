
var DinnerModel = function() {

 
 	var apiKey = 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB'



	var num = 2;
	var menu = [];
	var observers = [];
	var selectedDish = {};

	this.getCurrentDish = function(){
		return selectedDish;
	};

	this.setCurrentDish = function(dish){
		selectedDish = dish;
		notifyObservers();
	};

	this.addObserver = function(view){
		observers.push(view);
	};

	
	var notifyObservers = function(){

		for(i in observers){
			observers[i].update()
		};
	};

	this.setNumberOfGuests = function(n){
		num = n;
		if(num < 1) num = 0;
		notifyObservers();
	};


	this.getNumberOfGuests = function() {
		return num;

	};

	//Returns the dish that is on the menu for selected type 
	this.getSelectedDish = function(type) {
	var dishtype = [];
		for(var i in dishes){
			if (dishes[i].type == type){
				dishtype.push(dishes[i]);
			};
		};
		return dishtype;
	};

	//Returns all the dishes on the menu.
	this.getFullMenu = function() {
		return menu;
		
	};

	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function(id) {
	var ingredient = [];
		for(var i in dishes) {
			for(var j in dishes[i].ingredients){
				if (!ingredient.includes(dishes[i].ingredients[j].name)){
					ingredient.push(dishes[i].ingredients[j].name);
				}
			}
		}
		return ingredient;
	}

	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
		var totalPrice=0;
		
		for (var i in menu) {
			totalPrice += menu[i].pricePerServing*num
		}

		return Math.round(totalPrice);
	}

	this.addDishToMenu = function(dish) {	

		if (!menu.some(d => d.id == dish.id)){
			menu.push(dish)
		}
		notifyObservers();
	
	}
	// this.addDishToMenu = function(id, callback, errorCallback) {
	// 	$.ajax( {
	// 		url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/' + id + '/information/dishTypes/',
	// 		headers: {
	// 		 'X-Mashape-Key': apiKey
	// 		},
	// 		success: function(data) {

	// 			callback(data);
	// 		},
	// 		error: function(error) {
	// 			console.log(error)
	// 		}
	// 	 })
	// 	notifyObservers();
	// }


	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
		for (var i = 0; i < menu.length; i++){
			if (menu.some(d => d.id == id)){
				menu.splice(i, 1)
			}
		}	
		notifyObservers();
	}

	this.getAllDishes = function (type, filter, callback, errorCallback) {
		
		$.ajax( {
			url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?type=' + type + '&query=' + filter,
			headers: {
			 'X-Mashape-Key': apiKey
			},
			
			success: function(data) {
				callback(data.results);
			},
			error: function(error) {
				console.log(error)
				alert(error.statusText + '. You have no internet connection')
			},
			
		 })

	}


	this.getDish = function (id, callback, errorCallback) {
		$.ajax( {
			
		   	url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/' + id + '/information',
		   	headers: {
		     	'X-Mashape-Key': apiKey
		   	},
		   success: function(data) {
		   		//console.log(data)
		    	callback(data)
		   	},
		   error: function(error) {
		    	errorCallback(error)
		    	console.log(error)
				alert(error.statusText + '. You have no internet connection')
		    	
		   	},

		})


	}

	
	var dishes = [{
		'id':1,
		'name':'French toast',
		'type':'starter',
		'image':'images/toast.jpg',
		'description':"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
		'ingredients':[{ 
			'name':'eggs',
			'quantity':0.5,
			'unit':'',
			'price':10
			},{
			'name':'milk',
			'quantity':30,
			'unit':'ml',
			'price':6
			},{
			'name':'brown sugar',
			'quantity':7,
			'unit':'g',
			'price':1
			},{
			'name':'ground nutmeg',
			'quantity':0.5,
			'unit':'g',
			'price':12
			},{
			'name':'white bread',
			'quantity':2,
			'unit':'slices',
			'price':2
			}]
		},{
		'id':2,
		'name':'Sourdough Starter',
		'type':'starter',
		'image':'images/sourdough.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'active dry yeast',
			'quantity':0.5,
			'unit':'g',
			'price':4
			},{
			'name':'warm water',
			'quantity':30,
			'unit':'ml',
			'price':0
			},{
			'name':'all-purpose flour',
			'quantity':15,
			'unit':'g',
			'price':2
			}]
		},{
		'id':3,
		'name':'Baked Brie with Peaches',
		'type':'starter',
		'image':'images/bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'round Brie cheese',
			'quantity':10,
			'unit':'g',
			'price':8
			},{
			'name':'raspberry preserves',
			'quantity':15,
			'unit':'g',
			'price':10
			},{
			'name':'peaches',
			'quantity':1,
			'unit':'',
			'price':4
			}]
		},{
		'id':100,
		'name':'Meat balls',
		'type':'main dish',
		'image':'images/meatballs.jpg',
		'description':"Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
		'ingredients':[{ 
			'name':'extra lean ground beef',
			'quantity':115,
			'unit':'g',
			'price':20
			},{
			'name':'sea salt',
			'quantity':0.7,
			'unit':'g',
			'price':3
			},{
			'name':'small onion, diced',
			'quantity':0.25,
			'unit':'',
			'price':2
			},{
			'name':'garlic salt',
			'quantity':0.7,
			'unit':'g',
			'price':2
			},{
			'name':'Italian seasoning',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'dried oregano',
			'quantity':0.3,
			'unit':'g',
			'price':3
			},{
			'name':'crushed red pepper flakes',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'Worcestershire sauce',
			'quantity':6,
			'unit':'ml',
			'price':7
			},{
			'name':'milk',
			'quantity':20,
			'unit':'ml',
			'price':4
			},{
			'name':'grated Parmesan cheese',
			'quantity':5,
			'unit':'g',
			'price':8
			},{
			'name':'seasoned bread crumbs',
			'quantity':15,
			'unit':'g',
			'price':4
			}]
		},{
		'id':101,
		'name':'MD 2',
		'type':'main dish',
		'image':'images/bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':15,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':10,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':102,
		'name':'MD 3',
		'type':'main dish',
		'image':'images/meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':2,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':10,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':5,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':103,
		'name':'MD 4',
		'type':'main dish',
		'image':'images/meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':4
			},{
			'name':'ingredient 2',
			'quantity':12,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':6,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':200,
		'name':'Chocolat Ice cream',
		'type':'dessert',
		'image':'images/icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':201,
		'name':'Vanilla Ice cream',
		'type':'dessert',
		'image':'images/icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':202,
		'name':'Strawberry',
		'type':'dessert',
		'image':'images/icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		}
	];

}
