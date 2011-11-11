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
<<<<<<< HEAD
		rows[i].addEventListener('click', function(e) {	
			var display = Ti.UI.createWindow({
				backroundColor:'white',
				title:e.row.person.fullName,
				
			});
            var selected = true;
			var top = 0;
			var showedSomething = false;
			for (var label in e.row.person.address) {
				top += 20;
				var addrs = e.row.person.address[label];

				for (var i = 0; i < addrs.length; i++) {
					var info = Ti.UI.createLabel({
						text:'('+label+') '+addrs[i].Street,
						top:top,
						left:20,
						height:'auto',
						width:'auto'
					});
					display.add(info);
					showedSomething = true;
				}
			}
			if (!showedSomething){
				display.add(Ti.UI.createLabel({text: 'No addresses to show'}));

				

			}
			

=======
		
		
		rows[i].addEventListener('click', function(e) {
>>>>>>> e6a636c2cb125a9fc0265bebe4ee439ed3db04ff
			
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
