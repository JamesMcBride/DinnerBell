function initialize_database(){
	var db = Titanium.Database.open('dinnerbell');
	db.execute('CREATE TABLE IF NOT EXISTS guests (id int auto_increment, name varchar(255), mobile varchar(255))'); // TODO: Add facebook, twitter, email information to database
	//db.execute('DELETE FROM guests');
	db.close();
}

function initialize_mealbase(){
	var db = Titanium.Database.open('dinnerbell');
	db.execute('CREATE TABLE IF NOT EXISTS meal (id int auto_increment, title varchar(255), date varchar(255))'); // TODO: Add facebook, twitter, email information to database
	db.close();
}

function insertMeal(title, date){
	var db = Titanium.Database.open('dinnerbell');
	db.execute('INSERT INTO meal (title, date) VALUES(?,?)',title, date);
	// TODO: may need to deal with possible exception if error writing to database
}


function insertGuest(name, mobile){
	//Titanium.API.debug(mobile[0]);
	var db = Titanium.Database.open('dinnerbell');
	db.execute('INSERT INTO guests (name, mobile) VALUES(?,?)',name, mobile[0]);
	// TODO: may need to deal with possible exception if error writing to database
	db.close();
}

function deleteGuest(name){
	var db = Titanium.Database.open('dinnerbell');
	db.execute('DELETE FROM guests WHERE name=?', name);
	db.close();
}

function getGuests(){
	var db = Titanium.Database.open('dinnerbell');
	var rows = db.execute('SELECT * FROM guests');
	//Titanium.API.info('ROW COUNT = ' + rows.getRowCount());
	guests = [];
	count = 0;
	while (rows.isValidRow())
	{
		//Titanium.API.info('ID: ' + rows.field(0) + ' NAME: ' + rows.fieldByName('name') + ' COLUMN NAME ' + rows.fieldName(0));
		guests[count] = [rows.fieldByName('name'),rows.fieldByName('mobile')];
		count=count+1;

		rows.next();
	}
	rows.close();
	db.close();
	return guests;
	
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