var win3 = Ti.UI.createWindow;

function ringBell(){
// TODO: grab all active contacts, and send them a text message

var module = require("com.omorandi");
smsDialog = module.createSMSDialog({
    recipients: ['+14353137429'],
    messageBody: 'Test message from AW',
    barColor: 'red'});

    smsDialog.open({animated: true});
    
}