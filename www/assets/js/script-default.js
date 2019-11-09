//**************************************************//
// DEFAULT SCRIPT                                   //
// stateSRV                                         //
// developed by MICHAEL MATZAT 2019                 //
//**************************************************//
// CHANGES WILL BREAK THE ANIMATION                 //
// DONT CHANGE CODE IF YOU NOT KNOW WHAT TO DO!     //
//**************************************************//
const debug = false;
console.log('debug: '+debug);




























//////// DOCUMENT FUNCTIONS ////////////////////////////////////////////
function debugOUT(text,debug){
    if (debug==true){ console.log(text); }
}
function loadingSpinner(){
	// IN
	$("#loading-spinner").css({ "display": "block", "opacity": 1 });
	// OUT
    setTimeout(function() { 
    	$("#loading-spinner").css({ "opacity": 0, "display": "none" }); 
    }, 1500);
}

function animatedContentLoader(html){
	// UNLOAD CONTENT
    $(".mdc-data-table").animate({
    	"opacity": 0,
    	"height": "0%"
    }, 700, 'easeInQuint');

    // DEBUG
    debugOUT('html: '+html,debug);

	/// LOAD CONTENT WITH ANIMATION
	setTimeout(function() {
		$(".client-list_data-container").remove();
		$('<div class="client-list_data-container"></div>').appendTo('.content');
		$(html).appendTo('.client-list_data-container');
		$(".mdc-data-table").animate({
			"opacity": 1,
			"height": "100%"
		}, 500, 'easeInQuint');
	}, 800);
}

function resetActiveLinks(){
    // RESET TABS
    $(".client-list_link").css({
        "color": "rgba(255,255,255,0.75)",
        "background": "rgba(25,41,41,0.5)",
        "border": "unset",
        "border-top-right-radius": "unset",
        "border-top-left-radius": "unset",
        "padding": "unset"
    });
    // RESET LINKS
    $(".icon-link, .client-list_icon-link, .material-icons").css({
        "color": "rgba(255,255,255,0.75)",
        "border-bottom": "none",
        "font-weight": "normal",
    });
}











//////// DOCUMENT READY ///////////////

$(document).ready(function() {

    // INPUT/TEXTFIELDS
    $(".mdc-text-field").click(function() {
        $(this).find(".mdc-floating-label").remove().css({"display": "none"});
    });


    ///////////////////////////////////
	// CONTENT/SETTINGS/ACTION LINKS //
    ///////////////////////////////////
    $(".client-list_icon-link, .icon-link, .dashboard-link").click(function() {

    	// LOADINGSPINNER
    	loadingSpinner();

    	// RESETACTIVE
        resetActiveLinks();

        // SET THISELEMENT FROM THIS AND MANIPULATE THIS
        var thisElement=$(this).get(),
            childElement='.material-icons';
            thisAndChildElement=$(this).next();

                debugOUT('thisElement:' + thisElement,debug);
                debugOUT('childElement: ' + childElement,debug);
                debugOUT('thisAndChildElement: ' + thisAndChildElement,debug);

        // DATALINK ATTR
        var dataLink = $(this).attr('data-link');
            debugOUT('dataLink: ' + dataLink,debug);

        // ACTIVE THIS AND ICON
        $(this).css({
            "opacity": 1,
            "color": "white",
            "border-bottom": "1px solid white",
        }).find(".material-icons").css({
            "opacity": 1,
            "color": "white",
            "font-weight": 900,
        });
        

    	// SETTINGS
        if (dataLink == 'settings') {
        	var html = '<!-- DATA TABLE --> <div class="mdc-data-table" id="mdc-data-table"></div> <!-- DATA TABLE -->';
            animatedContentLoader(html);
        }

        // HELP
        else if (dataLink == 'help') {
        	var html = '<!-- DATA TABLE --> <div class="mdc-data-table" id="mdc-data-table"></div> <!-- DATA TABLE -->';
            animatedContentLoader(html);
        }
       
        // REFRESH CLIENTS
        else if (dataLink == 'refresh') {
        	var html = '<!-- DATA TABLE --> <div class="mdc-data-table" id="mdc-data-table"></div> <!-- DATA TABLE -->';
            animatedContentLoader(html);
        }

        // ADD NEW CLIENT
        else if (dataLink == 'add') {
            var htmlForm = '<!-- ADD NEW CLIENT --> <div id="add-client-container"> <form id="form-add-client" method="post" accept="<?php echo $PHP_SELF; ?>"> <div class="mdc-text-field mdc-text-field--with-leading-icon" id="input-new-client-adress"> <i class="material-icons mdc-text-field__icon">laptop</i> <input class="mdc-text-field__input" id="text-field-hero-input"> <div class="mdc-line-ripple"></div> <label for="text-field-hero-input" class="mdc-floating-label">PROTOCOL://IP:PORT</label> </div> <div class="mdc-text-field mdc-text-field--with-leading-icon" id="input-new-client-name"> <i class="material-icons mdc-text-field__icon">laptop</i> <input class="mdc-text-field__input" id="text-field-hero-input"> <div class="mdc-line-ripple"></div> <label for="text-field-hero-input" class="mdc-floating-label">DEVICE NAME</label> </div> <button id="button-add-client" class="mdc-button mdc-button--raised" type="submit"> <span class="mdc-button__ripple"></span> <i class="material-icons mdc-button__icon">add</i> <span class="mdc-button__label">ADD</span> </button> </form> </div> <!-- ADD NEW CLIENT --> '
        	var html = '<!-- DATA TABLE --> <div class="mdc-data-table" id="mdc-data-table">'+htmlForm+'</div> <!-- DATA TABLE -->';
        	animatedContentLoader(html);
        }

        // DASHBOARD DATA
        else if (dataLink == 'dashboard') {
        	dataLink == 'dashboard'
        	var html = '<!-- DATA TABLE --> <div class="mdc-data-table" id="mdc-data-table"></div> <!-- DATA TABLE -->';
            animatedContentLoader(html);
        }

        // ELSE
        else {
            dataLink == 'dashboard'
            var html = '<!-- DATA TABLE --> <div class="mdc-data-table" id="mdc-data-table"></div> <!-- DATA TABLE -->';
            animatedContentLoader(html);
        }

    });





    /////////////////////////
    // CLIENT LIST > CLICK //
    /////////////////////////
    $(".client-list_link").click(function() {

        // CHECK IF DASHBOARD WAS CLICKED
        // if($(".client-list_link").attr('data-link')=='dashboard') { debugOUT('dashboard detected',debug); } else {


    	// LOADINGSPINNER
    	loadingSpinner();

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

        // RESETACTIVE
        resetActiveLinks();

        // SET THIS TAB TO ACTIVE
        $(this).css({
            "color": "rgba(25,41,41,0.5)",
            "background": "white",
            "border": "2px solid white",
            "border-top-right-radius": "10px",
            "border-top-left-radius": "10px",
            "padding": "1vh 2vw 2vh 2vw"
        });
        $(".client-list_link_first").removeClass('client-list_link_first').addClass('client-list_link');
        $(".clients-list_client_first").removeClass('clients-list_client_first').addClass('clients-list_client');

        // LOAD CONTENT
        var dataClient = $(this).attr('data-client');
            debugOUT('dataClient: '+dataClient,debug);

		// CLIENT DATA
        var dataClientFile = $(this).attr('data-client-file');
        dataClientFile = './tmp/' + dataClientFile;
            debugOUT('dataClientFile: ' + dataClientFile,debug);

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

                // GENERATE HTML CODE && SET CONTENT
                var html = '<!-- DATA TABLE --> <div class="mdc-data-table" id="mdc-data-table"> <table class="mdc-data-table__table" aria-label="Dessert calories"> <thead> <tr class="mdc-data-table__header-row"> <th class="mdc-data-table__cell mdc-data-table__icon"><img src="./assets/images/icons/host.svg"></th> <th class="mdc-data-table__header-cell" role="columnheader" scope="col">' + hostname + '</th> <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">' + generatedAt + '</th> </tr> </thead> <tbody class="mdc-data-table__content"> <tr class="mdc-data-table__row" style="border-top-color: rgba(0, 0, 0, 1);"> <td class="mdc-data-table__cell mdc-data-table__icon"><img src="./assets/images/icons/timelapse.svg"></td> <td class="mdc-data-table__cell">LAST LOGIN </td> <td class="mdc-data-table__cell mdc-data-table__cell--numeric">' + lastLogins + '</td> </tr> <tr class="mdc-data-table__row"> <td class="mdc-data-table__cell mdc-data-table__icon"><img src="./assets/images/icons/gauge.svg"></td> <td class="mdc-data-table__cell">LOAD AVERAGE </td> <td class="mdc-data-table__cell mdc-data-table__cell--numeric">' + loadavg + '</td> </tr> <tr class="mdc-data-table__row"> <td class="mdc-data-table__cell mdc-data-table__icon"><img src="./assets/images/icons/temperature-celsius.svg"></td> <td class="mdc-data-table__cell">CPU </td> <td class="mdc-data-table__cell mdc-data-table__cell--numeric">' + cpuTemperature + '</td> </tr> <tr class="mdc-data-table__row" style="border-top-color: rgba(0, 0, 0, 0.75);"> <td class="mdc-data-table__cell mdc-data-table__icon"><img src="./assets/images/icons/harddisk.svg"></td> <td class="mdc-data-table__cell">STORAGE1 </td> <td class="mdc-data-table__cell mdc-data-table__cell--numeric storage" id="storage1"><sum>' + storage1sum + '</sum> | <free>' + storage1free + '</free> | <used>' + storage1used + '</used></td> </tr> <tr class="mdc-data-table__row"> <td class="mdc-data-table__cell mdc-data-table__icon"><img src="./assets/images/icons/harddisk.svg"></td> <td class="mdc-data-table__cell">STORAGE2 </td> <td class="mdc-data-table__cell mdc-data-table__cell--numeric storage" id="storage2"><sum>' + storage2sum + '</sum> | <free>' + storage2free + '</free> | <used>' + storage2used + '</used></td> </tr> <tr class="mdc-data-table__row"> <td class="mdc-data-table__cell mdc-data-table__icon"><img src="./assets/images/icons/harddisk.svg"></td> <td class="mdc-data-table__cell">STORAGE3 </td> <td class="mdc-data-table__cell mdc-data-table__cell--numeric storage" id="storage3"><sum>' + storage3sum + '</sum> | <used>' + storage3used + '</used> | <free>' + storage3free + '</free></td> </tr> <tr class="mdc-data-table__row" style="border-top-color: rgba(0, 0, 0, 0.75);"> <td class="mdc-data-table__cell mdc-data-table__icon"><img src="./assets/images/icons/memory.svg"></td> <td class="mdc-data-table__cell">RAM </td> <td class="mdc-data-table__cell mdc-data-table__cell--numeric ram"><sum>' + ramSum + '</sum> | <free>' + ramFree + '</free> | <used>' + ramUsed + '</used></td> </tr> <tr class="mdc-data-table__row" style="border-top-color: rgba(0, 0, 0, 0.75);"> <td class="mdc-data-table__cell mdc-data-table__icon"><img src="./assets/images/icons/lan.svg"></td> <td class="mdc-data-table__cell">LAN </td> <td class="mdc-data-table__cell mdc-data-table__cell--numeric">' + networkLAN + '</td> </tr> <tr class="mdc-data-table__row"> <td class="mdc-data-table__cell mdc-data-table__icon"><img src="./assets/images/icons/wifi.svg"></td> <td class="mdc-data-table__cell">WLAN </td> <td class="mdc-data-table__cell mdc-data-table__cell--numeric">' + networkWLAN + '</td> </tr> </tbody> </table> </div> <!-- DATA TABLE -->';
                animatedContentLoader(html);

           	}); //$.each(data, function(key, val) {
        }); //var clients = jQuery.getJSON(dataClientFile, function(data) {
      // } //if($(".client-list_link").attr('data-link')='dashboard') {
    }) //click
});
