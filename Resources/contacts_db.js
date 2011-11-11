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
		insertGuest(e.person.fullName, e.person.moble);		
		
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

}
// getting all from Android is very slow...
/*var activityIndicator;
if (android) {
	activityIndicator = Ti.UI.createActivityIndicator({
		message: 'Loading all contacts, please wait...'
	});
	activityIndicator.show();
}


var makeTable = function() {
	var people = Titanium.Contacts.getAllPeople();
	var rows = [];
	for (var i = 0; i < people.length; i++) {
		
		Ti.API.info("People object is: "+people[i]);
		var title = people[i].fullName;
		if (!title || title.length === 0) {
			title = "(no name)";
		}
		rows[i] = Ti.UI.createTableViewRow({
			title: title,
			person:people[i],
			hasChild:false,
			hasCheck:false
		});
		
		var contact = rows[i];
		
		rows[i].addEventListener('click', function(e) {
			if (contact.hasCheck = true){
			contact.hasCheck = false;
		}
			else{
			contact.hasCheck = true;
			}
		});
	}
	return rows;
};

var tableview = Ti.UI.createTableView({
	data:makeTable()
});



win.add(tableview);
if (android && activityIndicator) {activityIndicator.hide();}
*/


