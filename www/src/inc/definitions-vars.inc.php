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

# VERSION
define("VERSION", "0.03112019");

# MISC
$serverFunctionsIncURL    	= $_SERVER['PHP_SELF'];
$explodeRootURL           	= explode('/', $serverFunctionsIncURL);
$serverRootURL            	= $explodeRootURL[0];
define('SERVER_ROOT_URL', $serverHost.$serverRootURL);
define('DOCUMENT_ROOT', $_SERVER['DOCUMENT_ROOT']);
define('JSON_DATA_DIR', '../data');

?>
