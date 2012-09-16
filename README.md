# yn_switch

Turns checkboxes into cool switches.

### Usage

includes:

	<link rel="stylesheet" type="text/css" href="yn_switch.css">
	
	<script type="text/javascript" src="http://code.jquery.com/	jquery-1.8.1.min.js"></script>
	
	<script type="text/javascript" src="yn_switch.js"></script>

without Options:

	<script>
		$(function(){
			yn_switch($('#switch'));
		});
	</script>
	<input id="switch" type="checkbox">
	
with Options:

	<script>
		$(function(){
			options = {"y_text":"I","n_text":"0"};
			yn_switch($('#switch'),options);
		});
	</script>
	<input id="switch" type="checkbox">
	
	
### Demo

[Demo](http://www.banana-daquiri.de/demo/yn_switch/ "Demo")