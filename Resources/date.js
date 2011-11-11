var win = Titanium.UI.currentWindow;
win.backgroundImage = '/images/table_cloth.png';


var minDate = new Date();
minDate.setFullYear(2009);
minDate.setMonth(0);
minDate.setDate(1);

var maxDate = new Date();
maxDate.setFullYear(2009);
maxDate.setMonth(11);
maxDate.setDate(31);

var value = new Date();
value.setFullYear(2009);
value.setMonth(0);
value.setDate(1);

var ta1 = Titanium.UI.createTextArea({
	editable: true,
	height:70,
	width:200,
	top:160,
	font:{fontSize:20,fontFamily:'Marker Felt', fontWeight:'bold'},
	color:'#888',
	textAlign:'left',
	appearance:Titanium.UI.KEYBOARD_APPEARANCE_ALERT,	
	keyboardType:Titanium.UI.KEYBOARD_NUMBERS_PUNCTUATION,
	returnKeyType:Titanium.UI.RETURNKEY_GO,
	borderWidth:2,
	borderColor:'#bbb',
	borderRadius:5,
	suppressReturn:false
	
});
win.add(ta1);


var picker = Ti.UI.createPicker({
	type:Ti.UI.PICKER_TYPE_DATE_AND_TIME,
	minDate:minDate,
	maxDate:maxDate,
	value:value,
	bottom: 0
});

// turn on the selection indicator (off by default)
picker.selectionIndicator = true;

//  win.add(picker);

var label = Ti.UI.createLabel({
	text:'Set a custom message',
	top:125,
	width:'auto',
	height:'auto',
	textAlign:'center',
	color:'black'
});
win.add(label);

var label2 = Ti.UI.createLabel({
	text:'Date',
	top:255,
	width:'auto',
	height:'auto',
	textAlign:'center',
	color:'black'
});
win.add(label2);

var b3 = Titanium.UI.createButton({
	title:'TODAY',
	width:200,
	height:40,
	top:260
});

var b4 = Titanium.UI.createButton({
	title:'Send',
	width:200,
	height:40,
	top:330
});

b4.addEventListener('click', function()
{
// TODO Add text message
});

win.add(b4);

var label4 = 'TOADY';

b3.addEventListener('click', function()
{
	var w = Titanium.UI.createWindow({
		backgroundColor:'#336699',
		backgroundImage:'/images/table_cloth.png',
		title:'Choose Date',
		barColor:'black',
	});
	
	var picker = Ti.UI.createPicker({
		type:Ti.UI.PICKER_TYPE_DATE_AND_TIME,
		minDate:minDate,
		maxDate:maxDate,
		value:value,
		bottom: 0
	});
	
	picker.addEventListener('change',function(e){
		label.text = e.value.toLocaleString();
		b3.title = e.value.toLocaleString();
	});

	
	// turn on the selection indicator (off by default)
	picker.selectionIndicator = true;

    w.add(picker);
    
    if (value == ''){
    		value = "Pick A Date"
    }
    
/*	var b2 = Titanium.UI.createButton({
		title:value,
		image:'../images/chat.png',
		width:200,
		height:40,
		top:100
	});
	
	w.add(b2);
*/

	var label = Ti.UI.createLabel({
		text:'Make a move',
		top:120,
		width:150,
		height:'auto',
		textAlign:'center',
		color:'black'
	});
	w.add(label);

	var b = Titanium.UI.createButton({
		title:'Close',
		style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN
	});
	w.setLeftNavButton(b);
	b.addEventListener('click',function()
	{
		w.close();
	});
	w.open({modal:true});
});

win.add(b3);

picker.addEventListener('change',function(e)
{
	label.text = e.value.toLocaleString();
});