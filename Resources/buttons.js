

var state = 0;
meals.addEventListener('click', function()
{
	switch (state)
	{
		case 0:
			meals.enabled=false;
			meals.title = 'I am Disabled';
			state++;

			setTimeout(function()
			{
				meals.enabled=true;
				meals.title = 'I am Enabled';
			},1000);

			break;
		case 1:
			meals.font = {fontSize:25,fontFamily:'Marker Felt', fontWeight:'bold'};
			meals.title = 'I am red';
			meals.backgroundImage = '../images/BUTT_red_off.png';
			meals.backgroundSelectedImage = '../images/BUTT_red_on.png';
			meals.color = '#222';
			state++;
			break;
		case 2:
			meals.width = 200;
			meals.color = '#fff';
			meals.title = 'White text';
			state=0;
			break;
	}
});

