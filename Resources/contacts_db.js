function guestList(){

var android = (Ti.Platform.osname === 'android');

var w = Titanium.UI.createWindow({
		backgroundColor:'#336699',
		backgroundImage: "/images/table_cloth.png" // TODO: put table cloth background
	});
	// TODO: list contacts that will receive text
	
	// create a button to close window
	var info = Ti.UI.createLabel({
		text:'',
		bottom:70,
		height:'auto',
		width:'auto'
	});
	
	var values = {cancel:function() { info.text = 'Cancelled'; }};
	values.selectedPerson = function(e) { 
		Titanium.API.debug(e.person.fullName + ' ' + e.person.phone.mobile); 
		insertGuest(e.person.fullName, e.person.phone.mobile);
		row = Ti.UI.createTableViewRow({title:e.person.fullName,backgroundColor:'#ffffff'});		
		tableview.appendRow(row);
		};
	var show = Ti.UI.createButton({
		title:'Add Guest',
		bottom:55,
		width:140,
		height:40,
		left: 50
	});
	show.addEventListener('click', function() {
		Titanium.Contacts.showContacts(values);
		//Titanium.API.debug("Values: " + values.selectedPerson);
	});
	w.add(show);
	var show2 = Ti.UI.createButton({
		title:'Delete',
		bottom:55,
		width:75,
		height:40,
		right: 50,
		color: 'red'
	});
	
	show2.addEventListener('click', function() {
		// TODO delte contcts
		//Titanium.API.info(tableview.data);
		
		var tableSection = tableview.data[0];
		Titanium.API.info(tableSection);
		Titanium.API.info("tableview.data[0].rowCount=" + tableview.data[0].rowCount);
		for (var j=tableSection.rowCount-1; j >= 0; j--)
		{
		    var row = tableSection.rows[j];
		    if (row.hasCheck){
		    	//delete from database
		    	deleteGuest(row.title);
		    	tableview.deleteRow(j,row);
		    }
		    
		    
		}
		//Titanium.API.debug("Values: " + values.selectedPerson);
	});
	w.add(show2);
	
	var close = Titanium.UI.createButton({
		width : 25,
		height: 25,
		top : 35,
		left: 40,
		backgroundImage:'/images/x_close.png'
	})	
	
	close.addEventListener('click', function()
	{
		w.close();
	});

	w.add(close);
	w.open();




guests = getGuests();


// create table view data object
var data = [];

for (var i=0; i < guests.length; i=i+1)
	{
		Titanium.API.debug(guests[i]);
		//Titanium.API.info('ID: ' + rows.field(0) + ' NAME: ' + rows.fieldByName('name') + ' COLUMN NAME ' + rows.fieldName(0));
		if (guests[i][1] == null){
			continue;
		}
		data[i] = Ti.UI.createTableViewRow({title:guests[i][0],backgroundColor:'#ffffff'});
	}


var imageView = Titanium.UI.createImageView({
	image:'/images/contacts_title.png',
	width:200,
	height:120,
	top:25, 
	});

imageView.addEventListener('load', function()
{
	Ti.API.info('LOAD CALLED');
});
w.add(imageView);



// create table view
var tableview = Titanium.UI.createTableView({
	data:data,
	top:126,
	left:20,
	right:20,
	height:230,
	width:220,
	borderWidth:3,
	borderRadius:10,
	borderColor:'#214792'
});

// create table view event listener
tableview.addEventListener('click', function(e)
{
	// event data
	var index = e.index;
	var section = e.section;
	var row = e.row;
	var rowdata = e.rowData;
	
	
	row.hasCheck = !row.hasCheck;

	//Titanium.UI.createAlertDialog({title:'Table View',message:'row ' + row + ' index ' + index + ' section ' + section  + ' row data ' + rowdata}).show();
});


// add table view to the window

w.add(tableview);



}

