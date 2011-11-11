function guestList(){

var android = (Ti.Platform.osname === 'android');

var w = Titanium.UI.createWindow({
		backgroundColor:'#336699' // TODO: put table cloth background
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
		//Titanium.API.debug(e.person.fullName + ' ' + e.person.phone.mobile); 
		insertGuest(e.person.fullName, e.person.phone.mobile);		
		
		};
	var show = Ti.UI.createButton({
		title:'Add Guest',
		bottom:20,
		width:200,
		height:40
	});
	show.addEventListener('click', function() {
		Titanium.Contacts.showContacts(values);
		//Titanium.API.debug("Values: " + values.selectedPerson);
	});
	w.add(show);
	
	var b = Titanium.UI.createButton({
		title:'Close',
		height:30,
		width:150
	});
	w.add(b);
	b.addEventListener('click', function()
	{
		w.close();
	});

	w.open();


initialize_database();

getGuests(w);


// create table view data object
var data = [];
var count = 0;

while (rows.isValidRow())
	{
		//Titanium.API.info('ID: ' + rows.field(0) + ' NAME: ' + rows.fieldByName('name') + ' COLUMN NAME ' + rows.fieldName(0));
		data[count] = Ti.UI.createTableViewRow({title:rows.fieldByName('name') + " " +rows.fieldByName('mobile'),backgroundColor:'#ffffff'});
		count=count+1;

		rows.next();
	}
	rows.close();

// create table view
var tableview = Titanium.UI.createTableView({
	data:data,
	bottom:30,
	left:20,
	right:20,
	height:178,
	borderWidth:2,
	borderRadius:10,
	borderColor:'#000000'
});

// create table view event listener
tableview.addEventListener('click', function(e)
{
	// event data
	var index = e.index;
	var section = e.section;
	var row = e.row;
	var rowdata = e.rowData;
	row.hasCheck = true;
	var color = '#' + String(Math.round(Math.random()*9)) + String(Math.round(Math.random()*9)) + String(Math.round(Math.random()*9));
	row.title = "Color is now: "+color;
	row.backgroundColor = color;
	//Titanium.UI.createAlertDialog({title:'Table View',message:'row ' + row + ' index ' + index + ' section ' + section  + ' row data ' + rowdata}).show();
});

// add table view to the window
win.add(tableview);



}

