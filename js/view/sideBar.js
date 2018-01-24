var SideBar = function (container, model) {
	var numhum = container.find("#numhum");

	numhum.html(model.getNumberOfGuests());

}