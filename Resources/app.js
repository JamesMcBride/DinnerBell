// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

Titanium.UI.iPhone.showStatusBar();
hidden=false;
Titanium.UI.iPhone.statusBarStyle = Titanium.UI.iPhone.StatusBar.TRANSLUCENT_RED;

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

var contactwin = Titanium.UI.createWindow({  
	url:'contacts_db.js',
	titleid:'controls_win_title'
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
	width:143,
	height:128,
	top:40
	});



imageView.addEventListener('load', function()
{
	Ti.API.info('LOAD CALLED');
});
win1.add(imageView);

// end Copy to make new image

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
	title : 'Schedule Meals',
	width : 200,
	height: 40,
	top : 250,
	
	
	
})

var ringbell = Titanium.UI.createButton({
	title : 'Ring the Bell',
	width : 200,
	height: 40,
	top : 310,
	
	
})	

var contacts = Titanium.UI.createButton({
	title : 'Contacts',
	width : 200,
	height: 40,
	top : 370,
})	

contacts.addEventListener('click', function()
{
	contactwin.open();
})
	
win1.add(schedulemeals);
win1.add(ringbell);
win1.add(contacts)

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
		image:'/iphone/default.png',
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



	
	},5000);
}

// end loading screen

//Load Screen
loadingScreen();
win.open();
Titanium.UI.iPhone.showStatusBar();
hidden=false;
Titanium.UI.iPhone.statusBarStyle = Titanium.UI.iPhone.StatusBar.TRANSLUCENT_BLACK;