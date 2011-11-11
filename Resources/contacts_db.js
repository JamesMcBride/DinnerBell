var win = Ti.UI.currentWindow;
var android = (Ti.Platform.osname === 'android');

	var label = Titanium.UI.createButton({
		title:'Custom Toolbar',
		color:'#fff',
		style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN
	});

	var flexSpace = Titanium.UI.createButton({
		systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
	});
	var close = Titanium.UI.createButton({
		title:'Close',
		style:Titanium.UI.iPhone.SystemButtonStyle.DONE
	});
	var hello = Titanium.UI.createButton({
		title:'Hello',
		style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
	});

	// create and add toolbar
	var toolbar = Titanium.UI.createToolbar({
		items:[hello,flexSpace,label, flexSpace,close],
		top:0,
		borderTop:false,
		borderBottom:true
	});
	win.add(toolbar);

// getting all from Android is very slow...
var activityIndicator;
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
			hasChild:false
		});
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
