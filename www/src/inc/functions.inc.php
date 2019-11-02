<?php
#************************************************#
# stateSRV - statistics server                   #
# FUNCTIONS                                      #
# written by Michael Matzat 2019                 #
# www.gemichelst.de                              #
#************************************************#

///////////////
// INCLUDE   //
///////////////
require('definitions-vars.inc.php');

///////////////
// FUNCTIONS //
///////////////
function listClients()
{

	# READ FILES
	$data			= "../data/";
	$clientFiles	= scandir($data);
	array_splice($clientFiles, 0, 1);
	array_splice($clientFiles, 0, 1);
	
	# OUTPUT FILES
	// echo "<!-- \n";
	// print_r($clientFiles);
	// echo "\n -->\n";

	# RETURN FILES ARRAY
	return $clientFiles;

}
function readClient($clientFile)
{
	$clientFile = '../data/'.$clientFile;
	$json = file_get_contents($clientFile);
	$jsonData = json_decode($json,true);

	foreach ($jsonData as $key => $value) {
		$clients[$key] = $jsonData[$key];
	}

	# OUTPUT FILES
	// echo "\n<!-- JSON: $json -->\n";
	// echo "\n<!-- JSONDATA: $jsonData -->\n";
	// echo "<!-- \n";
	// print_r($clients);
	// echo "\n -->\n";

	# RETURNN CLIENTS
	return $clients;
}
?>
