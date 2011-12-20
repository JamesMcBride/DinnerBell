function initialize_database(user_name){
	user_name = typeof(user_name) != 'undefined' ? a : 'unknown';
	var db = Titanium.Database.open('dinnerbell');
	db.execute('CREATE TABLE IF NOT EXISTS data (userid int, user_name varchar(255), complete bool)');
	var rows = db.execute('SELECT * FROM data')
	Titanium.API.debug(rows.rowCount + ' hey hey hey hey hey hey');
	if (rows.rowCount == 0){
		var db = Titanium.Database.open('dinnerbell');
		db.execute('CREATE TABLE IF NOT EXISTS guests (id int(255), name varchar(255), mobile varchar(255))'); 
		// TODO: Add facebook, twitter, email information to database
		var params = {  
	                 user_name: user_name,
	                 req: 'init'  
	    };
		var request = Ti.Network.createHTTPClient(); 
		request.open("POST","http://caseyisom.com/database.php");
		request.send(params);
		request.onload = function(){
			var db = Titanium.Database.open('dinnerbell');
			user_name = "unknown"
				Titanium.API.debug(this.responseText);
				db.execute('INSERT INTO data (userid, user_name, complete) VALUES(?,?,?)',this.responseText, user_name, 1);
				var rs  = db.execute("SELECT * FROM data");
				Titanium.API.debug(rs.rowCount + "ZZZZZZZZZZZZZZZZ");
				db.close();
				
			}
			db.close();
		}
		db.close();

		
	}


function initialize_mealbase(){
	var db = Titanium.Database.open('dinnerbell');
	db.execute('CREATE TABLE IF NOT EXISTS meal (id int auto_increment, title varchar(255), date varchar(255))');
	 // TODO: Add facebook, twitter, email information to database
	db.close();
}


function insertMeal(title, date){
	var db = Titanium.Database.open('dinnerbell');
	db.execute('INSERT INTO meal (title, date) VALUES(?,?)',title, date);
	// TODO: may need to deal with possible exception if error writing to database
}


function insertGuest(name, mobile){
	//Titanium.API.debug(mobile[/0]);
	var params = {  
	                 name: name,
	                 mobile: mobile,
	                 req: 'makeguest'  
	    };
	var request = Ti.Network.createHTTPClient(); 
	request.open("POST","http://caseyisom.com/database.php");
	request.send(params);
	request.onload = function(){
		var db = Titanium.Database.open('dinnerbell');
		db.execute('INSERT INTO guests (name, mobile, id) VALUES(?,?,?)',name, mobile[0], this.responseText);
		// TODO: may need to deal with possible exception if error writing to database
		db.close();
	}
}

function deleteGuest(name, id){
	Titanium.API.debug("Did we get the id? " + id);
	var params = {  
	             name: name,
	             id: id,
	             req: 'delguest'  
	};
	var request = Ti.Network.createHTTPClient(); 
	request.open("POST","http://caseyisom.com/database.php");
	request.send(params);
	
	request.onload = function(){
		Titanium.API.debug("Did we get the id? " + id);
		var db = Titanium.Database.open('dinnerbell');
		db.execute('DELETE FROM guests WHERE id= ?', id);
		db.close();
	}
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