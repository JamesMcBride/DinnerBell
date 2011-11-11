function initialize_database(){
	var db = Titanium.Database.open('dinnerbell');
	db.execute('CREATE TABLE IF NOT EXISTS guests (id int auto_increment, name varchar(255), mobile varchar(255))'); // TODO: Add facebook, twitter, email information to database
	db.execute('INSERT INTO guests (name, mobile ) VALUES(?,?)','Jamie Mcride', '435-229-2564');
	db.close();
}


function getGuests(win){
	var db = Titanium.Database.open('dinnerbell');
	var rows = db.execute('SELECT * FROM guests');
	//Titanium.API.info('ROW COUNT = ' + rows.getRowCount());
	while (rows.isValidRow())
	{
		//Titanium.API.info('ID: ' + rows.field(0) + ' NAME: ' + rows.fieldByName('name') + ' COLUMN NAME ' + rows.fieldName(0));
		
		var guestLabel = Titanium.UI.createLabel({
			color:'#000000',
			text:rows.fieldByName('name') + " " +rows.fieldByName('mobile'),
			font:{fontSize:20,fontFamily:'Helvetica Neue'},
			textAlign:'center',
			width:'auto'
		});
		
		win.add(guestLabel);
		
		rows.next();
	}
	rows.close();
	db.close();
}
/*
var updateName = 'I was updated';
var updateId = 4;
db.execute('UPDATE DATABASETEST SET NAME = ? WHERE ID = ?', updateName, updateId);

db.execute('UPDATE DATABASETEST SET NAME = "I was updated too" WHERE ID = 2');

db.execute('DELETE FROM DATABASETEST WHERE ID = ?',1);

Titanium.API.info('JUST INSERTED, rowsAffected = ' + db.rowsAffected);
Titanium.API.info('JUST INSERTED, lastInsertRowId = ' + db.lastInsertRowId);

var rows = db.execute('SELECT * FROM DATABASETEST');
Titanium.API.info('ROW COUNT = ' + rows.getRowCount());
Titanium.API.info('ROW COUNT = ' + rows.getRowCount());
Titanium.API.info('ROW COUNT = ' + rows.getRowCount());

while (rows.isValidRow())
{
	Titanium.API.info('ID: ' + rows.field(0) + ' NAME: ' + rows.fieldByName('name') + ' COLUMN NAME ' + rows.fieldName(0));
	if (rows.field(0)==5)
	{
		l3.text = rows.fieldByName('name');
	}

	rows.next();
}
rows.close();*/


 // close db when you're done to save resources