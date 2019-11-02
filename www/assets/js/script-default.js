//**************************************************//
// DEFAULT SCRIPT                                   //
// stateSRV                                         //
// developed by MICHAEL MATZAT 2019                 //
//**************************************************//
// CHANGES WILL BREAK THE ANIMATION                 //
// DONT CHANGE CODE IF YOU NOT KNOW WHAT TO DO!     //
//**************************************************//
const debug = true;


$(document).ready(function() {

// CLIENT LIST > CLICK
$(".client-list_link").click(function(){

	// VARS
	var generatedAt,
		hostname,
		lastLogins,
		uptime,
		loadavg,
		cpuTemperature,
		storage1,
		storage2,
		ram,
		ramUsed,
		ramFree,
		ramSwap,
		networkLAN,
		networkWLAN,
		html;

	// RESET
	$(".client-list_link").css({
		"border-bottom": "none",
		"color": "rgba(255,255,255,.75)",
	});

	// SET THIS
	$(this).css({
		"border-bottom": "1px solid white",
		"color": "white",
	});

	// LOAD CONTENT
	var dataClient = $(this).attr('data-client');
	if(debug==true) { console.log('dataClient: ' + dataClient); }
	if(dataClient=='dashboard'){
		// DASHBOARD DATA

	} else {
		// CLIENT DATA
		var dataClientFile = $(this).attr('data-client-file');
			dataClientFile = './tmp/' + dataClientFile;
		if(debug==true) { console.log('dataClientFile: ' + dataClientFile); }
		
		var clients = jQuery.getJSON(dataClientFile, function(data) {

			jQuery.each(data.clients, function(key, val) {
				
				// COLLECT DATA
				generatedAt = val.GENERATED_AT;
				hostname = val.HOSTNAME;
				lastLogins = val.LASTLOGINS;
				uptime = val.UPTIME[0] + ' Days ' + val.uptime[1] + ' HOURS ' + val.uptime[1] + ' MINUTES';
				loadavg = val.LOADAVG[0];
				cpuTemperature = val.CPU_TEMPERATURE;
				storage1 = val.STORAGE[0];
				storage2 = val.STORAGE[1];
				ram = val.RAM[0];
				ramUsed = val.RAM[1];
				ramFree = val.RAM[2];
				ramSwap = val.RAM[3];
				networkLAN = val.NETWORK[0];
				networkWLAN = val.NETWORK[1];
					
				// HTML CODE
				var html = '<ul class="client-list_data"><li>'+generatedAt+'</li><li>'+hostname+'</li><li>'+lastLogins+'</li><li>'+uptime+'</li><li>'+loadavg+'</li><li>'+cpuTemperature+'</li><li>'+storage1+'</li><li>'+storage2+'</li><li>'+ram+'</li><li>'+ramUsed+'</li><li>'+ramFree+'</li><li>'+ramSwap+'</li><li>'+networkLAN+'</li><li>'+networkWLAN+'</li></ul>';
				if(debug==true){ console.log('html: ' + html); }

				// DISPLAY DATA TO ID
				$(html).appendTo('#client-list_data');

			})
				
			// if(debug==true){ console.log('html: ' + html); }
		});



	}
})



});
