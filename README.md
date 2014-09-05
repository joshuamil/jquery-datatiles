# jQuery DataTiles Plugin
A [jQuery](http://jquery.com/) plugin that creates dynamic, data-driven HTML tiles based on ranked data attributes.


## Configuring the JavaScript
Here are some examples for initializing DataTiles with different tile and layout configurations.

	// 10 Tiles with a Random Layout Template
	$('.jq-datatiles').datatiles({
		tiles:10,
		layout:'rand'
	});

	// 6 Tiles with Layout Template 1
	$('.jq-datatiles').datatiles({
		tiles:6,
		layout:1
	});

	// 8 Tiles with a Random Layout Template
	$('.jq-datatiles').datatiles({
		tiles:8
	});

	// 10 Tiles with a Random Layout Template
	$('.jq-datatiles').datatiles();


## Configuring the HTML
Here is an example of how to implement dataTiles into your HTML:

	<!-- Using dataTiles on a DIV container -->
	<div class="jq-datatiles">
	</div>

	<!-- You can pass configuration options on the tags -->
	<div class="jq-datatiles" data-tiles="10" data-layout="1">
	</div>

> Note that configuration on the tags will override options passed into the
> JavaScript calls. Best practice would be to choose one method or another,
> with the preference being to configure in JavaScript as it provides greater
> flexibility - particularly when implementing multiple DataTiles instances.

## Multiple DataTiles Instances
You can enable DataTiles on multiple elements within your code - just make sure
and specify a unique ID for each container and then bind the datatiles() method
call to the ID selector instead of the class selector.

	<!-- You can use multiple containers for displaying tiles -->
	<div class="jq-datatiles" id="primary">
	</div>

	<div class="jq-datatiles" id="secondary">
	</div>

	<!-- Just make sure to setup your JavaScript properly -->
	<script>
	$(document).ready(function(event){
		$('#primary').datatiles({
			tiles:4,
			layout:0
		});

		$('#secondary').datatiles({
			tiles:10,
			layout:'rand'
		});
	});
	</script>

## See it in Action
[See the tests on Github](https://github.com/joshuamil/jquery-datatiles/tree/Release-Candidate-0.1.0/test)

# License
This plugin is licensed under the [MIT License](LICENSE.txt)

Copyright (c) 2014 [Joshua Miller](https://jo5h.com)
