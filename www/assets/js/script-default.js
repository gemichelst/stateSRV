//**************************************************//
// DEFAULT SCRIPT                                   //
// stateSRV                                         //
// developed by MICHAEL MATZAT 2019                 //
//**************************************************//
// CHANGES WILL BREAK THE ANIMATION                 //
// DONT CHANGE CODE IF YOU NOT KNOW WHAT TO DO!     //
//**************************************************//

$(document).ready(function() {

// CLIENT LIST > CLICK
$(".client-list_link").click(function(){

	// RESET
	$(".client-list_link").css({
		"border-bottom": "none",
		"color": "rgba(255,255,255,.75)",
	});
	// $("#client-list_link-dashboard").css({
	// 	"border-bottom": "none",
	// 	"color": "rgba(255,255,255,.75)",
	// });

	// SET THIS
	$(this).css({
		"border-bottom": "1px solid white",
		"color": "white",
	});
})



});
