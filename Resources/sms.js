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

for (var i=0; i < guests.length; i=i+1){
	

var module = require("com.omorandi");
smsDialog = module.createSMSDialog({
    recipients: [guests[i][1]],
    messageBody: ', Dinner Is Ready',
    });
    
    guestlist = guestlist  + guests[i][0] + ' '

	
    //  smsDialog.open({animated: true});
    
	smsDialog.addEventListener('complete', function(e){
		Ti.API.info("Result: " + e.error);
		var a = Ti.UI.createAlertDialog({title: 'complete', message: 'Result: ' + e.error});
		a.show();
	});
    
}


	var a = Titanium.UI.createAlertDialog({
	title: 'Message Status',
	message: guestlist + '\nMessage: Dinner Is Ready!\nStatus: Unsent (using simulator)'
	});
	
	a.show();
	return 1
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

for (var i=0; i < guests.length; i=i+1){
	

var module = require("com.omorandi");
smsDialog = module.createSMSDialog({
    recipients: [ guests[i][0]],
    messageBody: mess + 'On' + date,
    });

    // smsDialog.open({animated: true});
    
    guestlist = guestlist  + guests[i][0] + ' '
    
}
	var b = Titanium.UI.createAlertDialog({
	title: 'Message Status',
	message: guestlist + '\nMessage: ' + mess + ' on ' + date + '\nStatus: Unsent (using simulator)'
	});
	
	b.show();
	return 1
}
}
