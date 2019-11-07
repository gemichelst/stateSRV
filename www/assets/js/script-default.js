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
		storage1sum,
		storage1used,
		storage1free,
		storage2sum,
		storage2used,
		storage2free,
		storage3sum,
		storage3used,
		storage3free,
		ramSum,
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
	// TABLE_TABLE OUT
	$(".mdc-data-table").css({
		"opacity": 0,
		"transform": "scale(1)",
		"height": "0vh"
	});
	setTimeout(function() {
		// $( ".client-list_data-container" ).remove();
		// $('<div class="client-list_data-container"></div>').appendTo('.content');
	}, 750);

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
				storage1sum = val.STORAGE.STORAGE1.SUM;
				storage1free = val.STORAGE.STORAGE1.FREE;
				storage1used = val.STORAGE.STORAGE1.USED;
				storage2sum = val.STORAGE.STORAGE2.SUM;
				storage2free = val.STORAGE.STORAGE2.FREE;
				storage2used = val.STORAGE.STORAGE2.USED;
				storage3sum = val.STORAGE.STORAGE3.SUM;
				storage3free = val.STORAGE.STORAGE3.FREE;
				storage3used = val.STORAGE.STORAGE3.USED;
				ramSum = val.RAM.SUM;
				ramUsed = val.RAM.USED;
				ramFree = val.RAM.FREE;
				ramSwap = val.RAM.SWAP;
				networkLAN = val.NETWORK.LAN;
				networkWLAN = val.NETWORK.WLAN;
					
				// HTML CODE
				var html = '<!-- DATA TABLE --> <div class="mdc-data-table" id="mdc-data-table"> <table class="mdc-data-table__table" aria-label="Dessert calories"> <thead> <tr class="mdc-data-table__header-row"> <th class="mdc-data-table__cell mdc-data-table__icon"><img src="./assets/images/icons/host.svg"></th> <th class="mdc-data-table__header-cell" role="columnheader" scope="col">'+hostname+'</th> <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">'+generatedAt+'</th> </tr> </thead> <tbody class="mdc-data-table__content"> <tr class="mdc-data-table__row" style="border-top-color: rgba(0, 0, 0, 1);"> <td class="mdc-data-table__cell mdc-data-table__icon"><img src="./assets/images/icons/timelapse.svg"></td> <td class="mdc-data-table__cell">LAST LOGIN </td> <td class="mdc-data-table__cell mdc-data-table__cell--numeric">'+lastLogins+'</td> </tr> <tr class="mdc-data-table__row"> <td class="mdc-data-table__cell mdc-data-table__icon"><img src="./assets/images/icons/gauge.svg"></td> <td class="mdc-data-table__cell">LOAD AVERAGE </td> <td class="mdc-data-table__cell mdc-data-table__cell--numeric">'+loadavg+'</td> </tr> <tr class="mdc-data-table__row"> <td class="mdc-data-table__cell mdc-data-table__icon"><img src="./assets/images/icons/temperature-celsius.svg"></td> <td class="mdc-data-table__cell">CPU </td> <td class="mdc-data-table__cell mdc-data-table__cell--numeric">'+cpuTemperature+'</td> </tr> <tr class="mdc-data-table__row" style="border-top-color: rgba(0, 0, 0, 0.75);"> <td class="mdc-data-table__cell mdc-data-table__icon"><img src="./assets/images/icons/harddisk.svg"></td> <td class="mdc-data-table__cell">STORAGE1 </td> <td class="mdc-data-table__cell mdc-data-table__cell--numeric storage" id="storage1"><sum>'+storage1sum+'</sum> | <free>'+storage1free+'</free> | <used>'+storage1used+'</used></td> </tr> <tr class="mdc-data-table__row"> <td class="mdc-data-table__cell mdc-data-table__icon"><img src="./assets/images/icons/harddisk.svg"></td> <td class="mdc-data-table__cell">STORAGE2 </td> <td class="mdc-data-table__cell mdc-data-table__cell--numeric storage" id="storage2"><sum>'+storage2sum+'</sum> | <free>'+storage2free+'</free> | <used>'+storage2used+'</used></td> </tr> <tr class="mdc-data-table__row"> <td class="mdc-data-table__cell mdc-data-table__icon"><img src="./assets/images/icons/harddisk.svg"></td> <td class="mdc-data-table__cell">STORAGE3 </td> <td class="mdc-data-table__cell mdc-data-table__cell--numeric storage" id="storage3"><sum>'+storage3sum+'</sum> | <used>'+storage3used+'</used> | <free>'+storage3free+'</free></td> </tr> <tr class="mdc-data-table__row" style="border-top-color: rgba(0, 0, 0, 0.75);"> <td class="mdc-data-table__cell mdc-data-table__icon"><img src="./assets/images/icons/memory.svg"></td> <td class="mdc-data-table__cell">RAM </td> <td class="mdc-data-table__cell mdc-data-table__cell--numeric ram"><sum>'+ramSum+'</sum> | <free>'+ramFree+'</free> | <used>'+ramUsed+'</used></td> </tr> <tr class="mdc-data-table__row" style="border-top-color: rgba(0, 0, 0, 0.75);"> <td class="mdc-data-table__cell mdc-data-table__icon"><img src="./assets/images/icons/lan.svg"></td> <td class="mdc-data-table__cell">LAN </td> <td class="mdc-data-table__cell mdc-data-table__cell--numeric">'+networkLAN+'</td> </tr> <tr class="mdc-data-table__row"> <td class="mdc-data-table__cell mdc-data-table__icon"><img src="./assets/images/icons/wifi.svg"></td> <td class="mdc-data-table__cell">WLAN </td> <td class="mdc-data-table__cell mdc-data-table__cell--numeric">'+networkWLAN+'</td> </tr> </tbody> </table> </div> <!-- DATA TABLE -->';
				if(debug==true){ console.log('html: ' + html); }

				// CREATE CONTAINER IN .content && APPEND HTML DATA TABLE TO THIS
				setTimeout(function() {
					$( ".client-list_data-container" ).remove();
					$('<div class="client-list_data-container"></div>').appendTo('.content');
					$(html).appendTo('.client-list_data-container');
					$(".mdc-data-table").css({
						"opacity": 1,
						"transform": "scale(1)",
						"height": "73vh"
					});
				}, 800);

			}); //$.each(data, function(key, val) {
		}); //var clients = jQuery.getJSON(dataClientFile, function(data) {
	}
})

});
