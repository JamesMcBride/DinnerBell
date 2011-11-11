var win = Ti.UI.currentWindow;
var android = (Ti.Platform.osname === 'android');

// getting all from Android is very slow...
var activityIndicator;
if (android) {
	activityIndicator = Ti.UI.createActivityIndicator({
		message: 'Loading all contacts, please wait...'
	});
	activityIndicator.show();
}

var paidSwitch = Titanium.UI.createSwitch({
  top:240,
  left:50,
  value:false,
  visible:false
});
win.add(paidSwitch);
var paidCheckbox = Titanium.UI.createImageView({
  image:'images/unchecked.png',
  width:30,
  height:30,
  top:240,
  left:50
});
paidCheckbox.addEventListener('click',function(e) {
  if(paidSwitch.value==false) {
    paidSwitch.value = true;
    paidCheckbox.image = 'images/checked.png';
  } else {
    paidSwitch = false;
    paidCheckbox.image = 'images/unchecked.png';
  }
});
win.add(paidCheckbox);

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
			hasChild:false
		});
		
		
		rows[i].addEventListener('click', function(e) {
			
            var selected = true;
		});
	}
	return rows;
};

var tableview = Ti.UI.createTableView({
	data:makeTable()
});

win.add(tableview);
if (android && activityIndicator) {activityIndicator.hide();}