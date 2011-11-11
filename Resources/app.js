// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Menu',
    backgroundColor:'#EE8833'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});

var imageView = Titanium.UI.createImageView({
	image:'http://www.appcelerator.com/wp-content/uploads/2009/06/titanium_desk.png',
	width:200,
	height:100,
	top:20
});

imageView.addEventListener('load', function()
{
	Ti.API.info('LOAD CALLED');
});
win1.add(imageView);


//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'unavailable',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win2.add(label2);

//////
var schedulemeals = Titanium.UI.createButton({
	title : 'Schedule Meals',
	width : 200,
	height: 40,
	top : 130,
})

var ringbell = Titanium.UI.createButton({
	title : 'Ring the Bell',
	width : 200,
	height: 40,
	top : 190,
	left : 60
})	

var contacts = Titanium.UI.createButton({
	title : 'Contacts',
	width : 200,
	height: 40,
	top : 250,
	left : 60
})	
	
win1.add(schedulemeals);
win1.add(ringbell);
win1.add(contacts)


//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
