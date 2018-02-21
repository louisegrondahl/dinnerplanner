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
	var dinnerOverView = new DinnerOverView(over,model);
	var dinnerprintView = new DinnerPrintView(print,model);


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



});