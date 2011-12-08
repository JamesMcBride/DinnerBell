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
		    
		   smsDialog.open({animated: false});
		    
//			smsDialog.addEventListener('complete', function(e){
//				Ti.API.info("Result: " + e.error);
//				var a = Ti.UI.createAlertDialog({title: 'complete', message: 'Result: ' + e.error});
//				a.show();
//			});
		    
	}
	
	
	catch(err){
		var a = Titanium.UI.createAlertDialog({
		title: 'Message Status',
		message: guestlist + '\nMessage: Dinner Is Ready!\nStatus: Unsent (using simulator)'
		});
		
		a.show();
		return 1
	
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

    smsDialog.open({animated: true});


}
catch(err)
{
	var b = Titanium.UI.createAlertDialog({
	title: 'Message Status',
	message: guestlist + '\nMessage: ' + mess + ' on ' + date + '\nError:' + err
	});
	
	b.show();
	return 1
}
}
}
