var moduleObj = require("com.omorandi");
smsDialog = module.createSMSDialog({
    recipients: ['+14151234567'],
    messageBody: 'Test message from me',
    barColor: 'red'});

    smsDialog.open({animated: true});