var win3 = Ti.UI.createWindow;

function ringBell(){
// TODO: grab all active contacts, and send them a text message

guests = getGuests();

for (guest in guests){
	

var module = require("com.omorandi");
smsDialog = module.createSMSDialog({
    recipients: [guest[1]],
    messageBody: 'Dinner Is Ready',
    });

    smsDialog.open({animated: true});
    
}
}
