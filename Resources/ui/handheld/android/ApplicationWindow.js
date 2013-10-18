function ApplicationWindow() {
	//declare module dependencies
	var MasterView = require('ui/common/MasterView'),
		DetailView = require('ui/common/DetailView'),
		ListaPlatosView = require('ui/common/ListaPlatos');
		
	//create object instance
	var self = Ti.UI.createWindow({
		title:'Products',
		exitOnClose:true,
		navBarHidden:false,
		backgroundColor:'#ffffff',
		color:'#fff',
	});
		
	//construct UI
	var masterView = new MasterView();
	self.add(masterView);

	//add behavior for master view
	masterView.addEventListener('itemSelected', function(e) {
		//create detail view container
		var listaplatosView = new ListaPlatosView();
		var listaplatosContainerWindow = Ti.UI.createWindow({
			title:'Product Details',
			navBarHidden:false,
			backgroundColor:'#ffffff',
			barColor:'#383838',
		});
		listaplatosContainerWindow.add(listaplatosView);
		listaplatosView.fireEvent('itemSelected',e);
		listaplatosContainerWindow.open();
	});
	
	listaplatosView.addEventListener('itemSelected', function(e) {
		//create detail view container
		var detailView = new DetailView();
		var detailContainerWindow = Ti.UI.createWindow({
			title:'Product Details',
			navBarHidden:false,
			backgroundColor:'#ffffff',
			barColor:'#383838',
		});
		detailContainerWindow.add(detailView);
		detailView.fireEvent('itemSelected',e);
		detailContainerWindow.open();
	});
	
	
	return self;
};

module.exports = ApplicationWindow;
