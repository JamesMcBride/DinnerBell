var win3 = Ti.UI.createWindow;

var guestlist = 'To: ';

function ringBell(){


guests = getGuests();

if (guests == ''){
	var a = Titanium.UI.createAlertDialog({
	title: 'Sorry',
	message: 'You need to add some contacts first.'
	});
	
	a.show();
	guestList();

	
}
else{
	try{
		guestlist = []
		for (var i=0; i < guests.length; i=i+1){
		    guestlist.push(guests[i][1]);
		

		}
		
				var module = require("com.omorandi");
		smsDialog = module.createSMSDialog({
		    recipients: guestlist,
		    messageBody: 'Dinner Is Ready',
		    });
		    

		   
		    
			smsDialog.addEventListener('complete', function(e){
				var w = Titanium.UI.createWindow({
		backgroundColor:'#336699',
		backgroundImage:'/images/table_cloth.png'
	});
	
	var imageView = Titanium.UI.createImageView({
	image:'/images/bell.png',
	width:'auto',
	height:'auto',
	top: 'auto' 
	});
	
	imageView.addEventListener('load', function()
	{
			var t1 = Ti.UI.create3DMatrix();
	t1 = t1.translate(0,0,1000);
	t1.m34 = 1.0/-90;
	var a1 = Titanium.UI.createAnimation();
	a1.transform = t1;
	a1.duration = 1000;
	a1.repeat = 1;
	imageView.animate(a1);

	a1.addEventListener('complete', function(e)
	{
			t1 = t1.rotate(180,1,1,0);
			t1 = t1.scale(2.0,2.0,2.0);
			t1.m34 = 1.0/-1500;
			var a1 = Titanium.UI.createAnimation();
			a1.transform = t1;
			a1.duration = 1000;
			a1.repeat = 1;
			a1.autoreverse = true;
			imageView.animate(a1);

			a1.addEventListener('complete', function(e)
			{
					t1 = t1.rotate(180,0,1,1);
					t1 = t1.scale(3.0,3.0,3.0);
					t1.m34 = 1.0/-3000;
					var a3 = Titanium.UI.createAnimation();
					a3.transform = t1;
					a3.duration = 1000;
					a3.repeat = 1;
					a3.addEventListener('complete',function()
					{
						imageView.animate({transform:Ti.UI.create3DMatrix(),duration:500});
					});
					imageView.animate(a3);
			});

			var label5 = Titanium.UI.createLabel({
			color:'#999',
			font:{fontSize:20,fontFamily:'Helvetica Neue'},
			textAlign:'center',
			color: '#09B017',
			width:'220',
			height: '94',
			top: 320,
			topMost: true,
			backgroundImage:'/images/guests_notified.png'
		});
		
		w.add(label5);


	});
	
	
	
	});
	
	w.add(imageView);
	
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


	
	var sound = Titanium.Media.createSound();
	sound.url='/sounds/bell.mp3'; // For testing #1913
	
	sound.play();

	w.open();
			});
		    
		smsDialog.open({animated: true});
		    
	}
	
	
	catch(err){
		var a = Titanium.UI.createAlertDialog({
		title: 'Message Status',
		message: guestlist + '\nMessage: Dinner Is Ready!\nStatus: Unsent (using simulator)'
		});
		
		a.show();
		
	
	}
}
}




function sendMeal(mess, date){
	

guests = getGuests();

if (guests == ''){
	var a = Titanium.UI.createAlertDialog({
	title: 'Sorry',
	message: 'You need to add some contacts first.'
	});
	
	a.show();
	
}
else{
try{	

		guestlist = []
		for (var i=0; i < guests.length; i=i+1){
		    guestlist.push(guests[i][1]);
		

		}
		
var module = require("com.omorandi");
smsDialog = module.createSMSDialog({
    recipients: guestlist,
    messageBody: mess + ' On ' + date,
    });


    
    smsDialog.addEventListener('complete', function(e){
				win.close();
	});

   smsDialog.open({animated: true});
    
    }



catch(err)
{
	var b = Titanium.UI.createAlertDialog({
	title: 'Message Status',
	message: guestlist + '\nMessage: ' + mess + ' on ' + date + '\nError:' + err
	});
	
	b.show();

}
}
}