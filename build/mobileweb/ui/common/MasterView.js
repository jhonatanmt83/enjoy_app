// funcion para crear rows
function CreaRow(dato) {
	var row = Ti.UI.createTableViewRow({
	    className:'forumEvent', // used to improve table performance
	    selectedBackgroundColor:'white',
	    rowIndex:i, // custom property, useful for determining the row during events
	    height:80,
	    datos: dato.datos
    });
	  
	var imageAvatar = Ti.UI.createImageView({
	    image: 'http://www.berreando.com/wp-content/uploads/logo-cocina-clandestina121.png',
	    left:5, top:5,
	    width:70, height:70
	});
	  
    row.add(imageAvatar);
	  
	var labelUserName = Ti.UI.createLabel({
	    color:'#fff',
	    font:{fontWeight:'bold'},
	    text:dato.title,
	    left:100, top: 20,
	    width:200, height: 30
	});
	row.add(labelUserName);
	
	return row;
};

//Master View Component Constructor
function MasterView() {
	//var CreaRow = require('CreaRow');
	
	//Creacion de la vista maestra
	var self = Ti.UI.createView({
		backgroundColor:'#349C42',
	});
	
	//Datos de los platos
	var Data = [
		{title:'SOPAS', datos:[
			{title: 'Sopa al ajo', precio: '5.00', color: '#fff'},
			{title: 'Caldo de pollo', precio: '6.00', color: '#fff'},
			{title: 'Sopa Italiana de Verduras', precio: '7.00', color: '#fff'}
			], hasChild:true, 'imagen': 'sopas.jpg'},
		{title:'MENU', datos:[
			{title: 'Menu1', precio: '5.00', color: '#fff'},
			{title: 'Menu2', precio: '6.00', color: '#fff'},
			{title: 'Menu3', precio: '7.00', color: '#fff'},
			], hasChild:true, 'imagen': 'menu.jpg'},
		{title:'BEBIDAS', datos:[
			{title: 'Gaseosa', precio: '5.00', color: '#fff'},
			{title: 'Limonada', precio: '6.00', color: '#fff'},
			{title: 'Cafe', precio: '7.00', color: '#fff'},
			], hasChild:true, 'imagen': 'bebidas.jpg'},
		{title:'SALSAS', datos:[
			{title: 'Salsa Dulce', precio: '5.00', color: '#fff'},
			{title: 'Salsa Salada', precio: '6.00', color: '#fff'},
			{title: 'Otra Salsa', precio: '7.00', color: '#fff'},
			], hasChild:true, 'imagen': 'salsas.jpg'},
		{title:'PASTAS', datos:[
			{title: 'Tallarin saltado', precio: '5.00', color: '#fff'},
			{title: 'Macarrones', precio: '6.00', color: '#fff'},
			{title: 'Lasaña', precio: '7.00', color: '#fff'},
			], hasChild:true, 'imagen': 'pastas.jpg'},
		{title:'POSTRES', datos:[
			{title: 'Helados', precio: '5.00', color: '#fff'},
			{title: 'Gelatina', precio: '6.00', color: '#fff'},
			{title: 'Torta', precio: '7.00', color: '#fff'},
			], hasChild:true, 'imagen': 'postres.jpg'}
	];
	
	//Preparando los datos del TableView
	var tablaDatos = [];
	
	for (var i=0; i<6; i++){
		var row = Ti.UI.createTableViewRow({
		    className:'forumEvent',
		    selectedBackgroundColor:'white',
			rowIndex:i, 
		    height:80,
		    datos: Data[i].datos,
		    borderColor:'#383838',
		    borderWidth:8,
		    top:5,
		    borderRadius:5
	    });
		  
		var imageAvatar = Ti.UI.createImageView({
		    image: '/ui/common/images/'+Data[i].imagen,
		    left:5, top:3,
		    width:60, height:60
		});
		  
	    row.add(imageAvatar);
		  
		var labelUserName = Ti.UI.createLabel({
			color:'#fff',
		    font:{fontWeight:'bold'},
		    text:Data[i].title,
		    left:100, top: 15,
		    width:200, height: 30
		});
		row.add(labelUserName);

		tablaDatos.push(row);
	}
	//Asignando los datos preparados hacia el TableView
	var table = Ti.UI.createTableView({
		data:tablaDatos,
		top:'10',
	});
	self.add(table);
	
	//Agregando eventos
	table.addEventListener('click', function(e) {
		self.fireEvent('itemSelected', {
			datos:e.rowData.datos,
			//listaplatosContainerWindow.title=
		});
	});
	
	return self;
};

module.exports = MasterView;