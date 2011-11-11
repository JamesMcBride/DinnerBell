var win = Ti.UI.currentWindow;

var values = {cancel:function() {win.close();}};

if (Ti.Platform.osname === 'android') {
	// android doesn't have the selectedProperty support, so go ahead and force selectedPerson
	values.selectedPerson = function(e) {info.text = e.person.fullName;};
}


function show() {
	Titanium.Contacts.showContacts(values);
};

show();
