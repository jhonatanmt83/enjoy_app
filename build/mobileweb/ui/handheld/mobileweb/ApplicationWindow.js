function ApplicationWindow() {
	//declare module dependencies
	var MasterView = require('ui/common/MasterView'),
		DetailView = require('ui/common/DetailView'),
		ListaPlatosView = require('ui/common/ListaPlatos');
		
	//create object instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff',
		color:'#fff',
	});
		
	//construct UI
	var masterView = new MasterView(),
		detailView = new DetailView(),
		listaplatosView = new ListaPlatosView();
		
	//create master view container
	var masterContainerWindow = Ti.UI.createWindow({
		title:'ENJOY',
		backgroundColor:'#fff',
		barColor:'#383838',
	});
	masterContainerWindow.add(masterView);
	
	//create detail view container
	var listaplatosContainerWindow = Ti.UI.createWindow({
		title:'PLATOS',
		backButtonTitle:'Atraz',
		barColor:'#383838',
	});
	listaplatosContainerWindow.add(listaplatosView);
	
	//create detail item view container
	var detailContainerWindow = Ti.UI.createWindow({
		title:'PLATOS',
		backButtonTitle:'Atraz',
		barColor:'#383838',
	});
	detailContainerWindow.add(detailView);
	
	//create Mobile Web specific NavGroup UI
	var navGroup = Ti.UI.MobileWeb.createNavigationGroup({
		window:masterContainerWindow
	});
	self.add(navGroup);
	
	//add behavior for master view
	masterView.addEventListener('itemSelected', function(e) {
		listaplatosView.fireEvent('itemSelected',e);
		navGroup.open(listaplatosContainerWindow);
	});
	
	listaplatosView.addEventListener('itemSelected', function(e) {
		detailView.fireEvent('itemSelected',e);
		navGroup.open(detailContainerWindow);
	});
	
	return self;
};

module.exports = ApplicationWindow;
