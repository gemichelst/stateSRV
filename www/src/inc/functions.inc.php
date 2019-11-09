<?php
#************************************************#
# stateSRV - statistics server                   #
# FUNCTIONS                                      #
# written by Michael Matzat 2019                 #
# www.gemichelst.de                              #
#************************************************#

global $JSON_DATA_DIR, $VERSION;

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
	$data			= JSON_DATA_DIR.'/';
	$clientFiles	= scandir($data);
	array_splice($clientFiles, 0, 1);
	array_splice($clientFiles, 0, 1);
	
	# OUTPUT FILES
	if(DEBUG==true)
	{
		echo "<!-- \n";
		echo "\n JSON_DATA_DIR: ".JSON_DATA_DIR."\n";
		print_r($clientFiles);
		echo "\n -->\n";
	}

	# RETURN FILES ARRAY
	return $clientFiles;

}
function copyListClients()
{

	# READ FILES
	$data			= JSON_DATA_DIR.'/';
	$clientFiles	= scandir($data);
	array_splice($clientFiles, 0, 1);
	array_splice($clientFiles, 0, 1);
	$clientsNum 	= count($clientFiles);

	# COPY
	for($i=0;$i<$clientsNum;$i++){
		// $targetRaw	= explode("../data/",$clientFiles[$i]);
		$target		= $_SERVER['DOCUMENT_ROOT']."/tmp/".$clientFiles[$i];
		if(DEBUG==true){ echo "\n<!-- TARGET: ".$target." -->\n"; }
		$datadir 	= JSON_DATA_DIR.'/';
		$file 		= $clientFiles[$i];
		$datafile 	= $datadir.$file;
		$copy 		= copy("$datafile",$target);
	}

	return $copy;

}
function readClient($clientFile)
{
	$clientFile = JSON_DATA_DIR.'/'.$clientFile;
	$json = file_get_contents($clientFile);
	$jsonData = json_decode($json,true);

	foreach ($jsonData as $key => $value) {
		$clients[$key] = $jsonData[$key];
	}

	# OUTPUT FILES
	if(DEBUG==true)
	{
		echo "\n<!-- JSON: $json -->\n";
		echo "\n<!-- JSONDATA: $jsonData -->\n";
		echo "\n<!-- JSON_DATA_DIR: ".JSON_DATA_DIR."\n";
		echo "<!-- \n";
		print_r($clients);
		echo "\n -->\n";
	}

	# RETURNN CLIENTS
	return $clients;
}
function listClientsAsList()
{

	# READ FILES
	$data			= JSON_DATA_DIR.'/';
	$clientFiles	= scandir($data);
	$clientsList 	= "";
	array_splice($clientFiles, 0, 1);
	array_splice($clientFiles, 0, 1);
	
	# OUTPUT FILES
	if(DEBUG==true)
	{
		echo "<!-- \n";
		echo "\nJSON_DATA_DIR: ".JSON_DATA_DIR."\n";
		print_r($clientFiles);
		echo "\n -->\n";
	}

	# COUNT
	$clientsNum 	= count($clientFiles);

	# GENERATE LIST
	for($i=0;$i<$clientsNum;$i++){
		$clientRaw1 = explode("server.",$clientFiles[$i]);
		$clientRaw2 = explode(".json",$clientRaw1[1]);
		$clientsList .= '<div class="clients-list_client"><a class="client-list_link" href="#client-'.$i.'" data-client="client" data-client-file="'.$clientFiles[$i].'">'.$clientRaw2[0].'</a></div>';
	}

	# RETURN FILES ARRAY
	return $clientsList;

}
?>
