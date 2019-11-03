var myVar;

function loadSpinner() {
    myVar = setTimeout(showPage, 5000);
}

function showSpinner() {
	document.getElementById("loader").style.display = "block";
	document.getElementById("loader-state").style.display = "block";
	document.getElementById("loader-background").style.display = "block";    
}

function showPage() {
  
  $("#loader-state").fadeOut( "slow" );
  $("#loader").fadeOut( "slow" );
  
  // $("#loader-background").delay(100).fadeOut( "slow" );
  // $(".content--header").css({
  // 	"-webkit-filter": "blur(65px)",
  // 	"filter": "blur(65px)"
  // });

  // $(".content--header").animate({
  // 	opacity: '1',
  // 	filter: 'blur(0px)'
  // }, "slow");

  // $(".content--body").animate({
  // 	opacity: '1'
  // }, "slow");

  // $("#loader-background").delay(100).addClass( "loader--background--fadeOut" );

  setTimeout(function(){
  	document.getElementById("loader").style.display = "none";
  	document.getElementById("loader-state").style.display = "none";
  	document.getElementById("loader-background").style.display = "none";
  }, 1500);
  
}