<?php
#************************************************#
# stateSRV - statistics server                   #
# DEFINITIONS AND VARS                           #
# written by Michael Matzat 2019                 #
# www.gemichelst.de                              #
#************************************************#


///////////////////////////////
// DEFINE VARS/OBJECTS/STUFF //
///////////////////////////////

// global JSON_DATA_DIR, DOCUMENT_ROOT, SERVER_ROOT_URL, SERVER_PROTOCOL;

# VERSION
define("VERSION", "0.03112019");

# DEBUG
define('DEBUG', false);

# MISC
$serverProtocol				= (empty($_SERVER['HTTPS'])) ? 'http://' : 'https://';
$explodeRootURL           	= explode('/', $serverFunctionsIncURL);
$serverRootURL            	= $serverProtocol . $_SERVER['HTTP_HOST'];
$serverFunctionsIncURL    	= $serverRootURL .'/'.$_SERVER['SCRIPT_NAME'];
$datadir_raw1 				= explode("/", $_SERVER['DOCUMENT_ROOT']);
$datadir_count				= count($datadir_raw1);
$datadir_count 				= $datadir_count - 1;
$datadir_raw2				= '';
for($i=0;$i<$datadir_count;$i++) { $datadir_raw2 .= $datadir_raw1[$i].'/'; }
$datadir_raw2				.= 'data';
$JSON_DATA_DIR				= $datadir_raw2;
define('SERVER_PROTOCOL', $serverProtocol);
define('SERVER_ROOT_URL', $serverRootURL);
define('DOCUMENT_ROOT', $_SERVER['DOCUMENT_ROOT']);
define('JSON_DATA_DIR', $datadir_raw2);

if(DEBUG==true)
{
	echo "\n<!-- serverFunctionsIncURL : ".$serverFunctionsIncURL." -->\n";
	echo "\n<!-- JSON_DATA_DIR: ".JSON_DATA_DIR." -->\n";
	echo "\n<!-- SERVER_ROOT_URL: ".SERVER_ROOT_URL." -->\n";
	echo "\n<!-- SERVER_PROTOCOL: ".SERVER_PROTOCOL." -->\n";
	echo "\n<!-- SERVER_ROOT_URL: ".SERVER_ROOT_URL." -->\n";
}
?>
