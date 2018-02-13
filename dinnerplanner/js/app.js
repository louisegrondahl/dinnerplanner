$(function() {

	var home = $("#homeView");
	var side = $("#sidebarView");
	var dish = $("#dishView");
	var selected = $("#selectedDishView");
	var main = $("#mainView");
	var over = $("#dinnerOverView");
	var print = $("#dinnerPrintOut");
	var search =$("#mysearch");


	//We instantiate our model
	var model = new DinnerModel();

	// And create the instance of ExampleView
	var homeView = new HomeView(home,model);
	var sidebarView = new SideBarView(side, model);
	var mainView = new MainView(main,model);
	var selectedDishView = new SelectedDishView(selected,model);
	//var dishView = new DishView(dish,model);
	//var stateController = new stateController($("#stateController"),model);
	var dinnerOverView = new DinnerOverView(over,model);
	var dinnerprintView = new DinnerPrintView(print,model);
	//var dishView = new DishView($("#dishView"),model);

	//Till sökt resultat
	var showSelectedDishView = function(){
		home.hide()
		side.show()
		main.hide()
		dish.hide()
		selected.show()
		over.hide()
	};

	//Controllers
	var mainController = new MainController(mainView, model);
	var sideBarController = new SideBarController(sidebarView, model);
	var selectedDishController = new SelectedDishController(selectedDishView, model, this);
	var selectedController = new SelectedController(mainView, model, showSelectedDishView);

//Homepage
	home.show();
	side.hide();
	dish.hide();
	selected.hide();
	main.hide();
	over.hide();
	print.hide();

this.homepage = function(){
	showHomepage()
}
//Till startsidan
var showHomepage = function() {
	home.hide()
	side.show()
	dish.show()
	selected.hide()
	main.show()
	over.hide() 
	print.hide()
};



//Visa vald menu
var showdinnerOverView = function(){
	home.hide()
	side.hide()
	main.hide()
	dish.hide()
	selected.hide()
	over.show()
	print.hide()
};

//Visa det som ska skrivas ut
var showdinnerPrintView = function(){
	home.hide()
	side.hide()
	main.hide()
	dish.hide()
	selected.hide()
	over.hide()
	print.show()
};


$("#createnewdinner").click(function(){
	showHomepage();
});

//Tillbaka till startsidan från selected dish
$("#backButton").click(function(){
	showHomepage();
});

//Konfirmera menyn
$("#confirmButton").click(function(){
	showdinnerOverView();
});

//Tillbaka till startsidan från confirmdinner
$("#backButton2").click(function(){
	showHomepage();
});

// $("#addtomenu").click(function(){
// 	showHomepage();
// });

$("#printButton").click(function(){
	showdinnerPrintView();
});

//Tillbaka till startsidan
$("#backButton3").click(function(){
	showHomepage();
});

$(".dishBtn").click(function(){
	showSelectedDishView();
	//console.log("tjo");
});


// function myFunction() {
//     var x = document.getElementById("mySearch").placeholder;
//     document.getElementById("demo").innerHTML = x;
// }
// onclick="myFunction()"


// function showHomepage() {
// 	homeView.style.display = 'block';
// 	sidebarView.style.display = 'none';
// 	mainView.style.display = 'none';
// 	selectedDishView.style.display = 'none';
// 	dishView.style.display = 'none';

// };


// function showStartpage() {
// 	var x = document.getElementById('createnewdinner');
// 	sidebarView.style.display = 'block'
// 	mainView.style.display = 'block'
// 	selectedDishView.style.display = 'none'
// 	dishView.style.display = 'block'


// }





	// //Om du trycker på sök knappen
	// $("searchButton").click(function(){
	// 	$("#selectedDishView")
	// });




//addeventlistener
	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

});