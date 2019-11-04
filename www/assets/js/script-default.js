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
			$.each(data, function(key, val) {
				
				// COLLECT DATA
				generatedAt = val.GENERATED_AT;
				hostname = val.HOSTNAME;
				lastLogins = val.LASTLOGINS;
				uptime = val.UPTIME.DAYS + ' DAYS ' + val.UPTIME.HOURS + ' HOURS ' + val.UPTIME.MINUTES + ' MINUTES';
				loadavg = val.LOADAVG[0];
				cpuTemperature = val.CPU_TEMPERATURE;
				storage1sum = val.STORAGE1.SUM;
				storage1free = val.STORAGE1.FREE;
				storage1used = val.STORAGE1.USED;
				storage2sum = val.STORAGE2.SUM;
				storage2free = val.STORAGE2.FREE;
				storage2used = val.STORAGE2.USED;
				storage3sum = val.STORAGE3.SUM;
				storage3free = val.STORAGE3.FREE;
				storage3used = val.STORAGE3.USED;
				ram = val.RAM.SUM;
				ramUsed = val.RAM.USED;
				ramFree = val.RAM.FREE;
				ramSwap = val.RAM.SWAP;
				networkLAN = val.NETWORK.LAN;
				networkWLAN = val.NETWORK.WLAN;
					
				// HTML CODE
				var html = '<ul class="client-list_data-list"><li>'+generatedAt+'</li><li>'+hostname+'</li><li>'+lastLogins+'</li><li>'+uptime+'</li><li>'+loadavg+'</li><li>'+cpuTemperature+'</li><li>'+storage1sum+'</li><li>'+storage1used+'</li><li>'+storage1free+'</li><li>'+storage2sum+'</li><li>'+storage2used+'</li><li>'+storage2free+'</li><li>'+storage3sum+'</li><li>'+storage3used+'</li><li>'+storage3free+'</li><li>'+ram+'</li><li>'+ramUsed+'</li><li>'+ramFree+'</li><li>'+ramSwap+'</li><li>'+networkLAN+'</li><li>'+networkWLAN+'</li></ul>';
				if(debug==true){ console.log('html: ' + html); }

				// DISPLAY DATA TO ID
				$( ".client-list_data-container" ).remove();
				$('<div class="client-list_data-container"></div>').appendTo('.content');
				$(html).appendTo('.client-list_data-container');

			});
		});



	}
})



});
