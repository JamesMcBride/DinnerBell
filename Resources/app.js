//include seperate files
Ti.include("sms.js");
Ti.include("contacts_db.js");
Ti.include("database.js");

// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

Titanium.UI.iPhone.showStatusBar();
hidden=false;
Titanium.UI.iPhone.statusBarStyle = Titanium.UI.iPhone.StatusBar.TRANSLUCENT_RED;

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

var datewin = Titanium.UI.createWindow({  
	url:'date.js',
	titleid:'date_win_title'
});
//
// create base UI tab and root window
//
var win = Titanium.UI.createWindow({  
    fullscreen: true,
    visible: true
});

var win1 = Titanium.UI.createWindow({  
    backgroundColor:'#FFFFFF',
    backgroundImage:'/images/table_cloth.png'
    
});

var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});

// Copy to make new image

var imageView = Titanium.UI.createImageView({
	image:'/images/bell.png',
	width:145,
	height:130,
	top:40, 
	});



imageView.addEventListener('load', function()
{
	Ti.API.info('LOAD CALLED');
});
win1.add(imageView);

// end Copy to make new image

var titleImageView = Titanium.UI.createImageView({
	image:'/images/dinner_bell_title.png',
	width:212,
	height:52,
	top:172
	});

titleImageView.addEventListener('load', function()
{
	Ti.API.info('LOAD CALLED');
});
win1.add(titleImageView);

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

//////Menu Buttons
var schedulemeals = Titanium.UI.createButton({
	top:225,
	width:185,
	height:129,
	backgroundImage:'/images/schedule_meal_plate.png'	
	
})

var ringbell = Titanium.UI.createButton({
	width:143,
	height:128,
	top:40, 
	backgroundImage:'/images/bell.png',	
})	

 ringbell.addEventListener('click', function()
 {
 	
 	ringBell();
});

var contacts = Titanium.UI.createButton({
	width : 220,
	height: 60,
	top : 353,
	backgroundImage:'/images/contacts_phone.png'
})	

contacts.addEventListener('click', function()
{
	//contactwin.open();
	guestList();
})

schedulemeals.addEventListener('click', function()
{
	datewin.open();
})
	
win1.add(schedulemeals);
win1.add(ringbell);
win1.add(contacts);

//open to Contacts screen



// Loading Screen Start

var actInd = Titanium.UI.createActivityIndicator({
	bottom:10, 
	height:50,
	width:10,
	topMost: true,
	style:Titanium.UI.iPhone.ActivityIndicatorStyle.PLAIN
});

function loadingScreen(){
	actInd.style = Titanium.UI.iPhone.ActivityIndicatorStyle.PLAIN;
	actInd.font = {fontFamily:'Helvetica Neue', fontSize:15,fontWeight:'bold'};
	actInd.color = 'white';
	actInd.message = 'Loading...';
	actInd.width = 210;
	actInd.show();
	var imageView = Titanium.UI.createImageView({
		image:'/images/Default.png',
		width:'100%',
		height:'100%'
	});
	win.add(imageView);
	win.add(actInd);

	setTimeout(function()
	{
		actInd.hide();
		//
		// Create Windows
		//
		//  add tabs
		//
		win1.open();



	
	},10000);
}

// end loading screen

//Load Screen
loadingScreen();
win.open();
Titanium.UI.iPhone.showStatusBar();
hidden=false;
Titanium.UI.iPhone.statusBarStyle = Titanium.UI.iPhone.StatusBar.TRANSLUCENT_BLACK;
