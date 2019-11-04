<?php 
#************************************************#
# stateSRV - statistics server                   #
# INDEX                                          #
# written by Michael Matzat 2019                 #
# www.gemichelst.de                              #
#************************************************#

# BASE VARS
define('STATESRV_FILE_NAME', basename(__FILE__));
define('STATESRV_FULL_PATH', __FILE__);
define('STATESRV_SERVER_URL', $_SERVER['PHP_SELF']);
define('STATESRV_FOLDER_PATH', dirname(__FILE__) . '/');
define('STATESRV_SERVER_HOST', (!isset($_SERVER['HTTP_HOST'])) ? 'localhost' : $_SERVER['HTTP_HOST']);

# FUNCTIONS // DEFINATIONS // VARS
require_once('src/inc/functions.inc.php');

$clients            = listClients();
$clientsNum         = count($clients);
$copy               = copyListClients();

readClient('server.bananadev.json');
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>STATE-SERVER v<?php echo VERSION; ?></title>
    <!-- <link rel="shortcut icon" href="./assets/images/favicon/favicon.png" type="image/png">
    <link rel="icon" href="./assets/images/favicon/favicon.png" type="image/png"> -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex, nofollow">
    <meta http-equiv="Cache-Control" content="max-age=1800">
    <meta name="application-name" content="STATE-SERVER">
    <meta name="author" content="Michael Matzat (gemichelst.de)">
    <meta name="description" content="">
    <link rel="stylesheet" href="./lib/node_modules/material-components-web/dist/material-components-web.css">
    <link rel="stylesheet" href="./lib/libs/material/roboto/Roboto.css">
    <link rel="stylesheet" href="./lib/libs/material/mdc-icons/material-icons.css">
    <link rel="stylesheet" href="./assets/css/style.css">
  </head>
  <body class="mdc-typography">
    <section id="section1">
      <div class="header">
        <div class="header-columns">
          <div class="header-column-title">state<strong>SRV</strong> v<?php echo VERSION; ?></div>
        </div>
        <div class="header-columns">
          <div class="header-column-menu"><a href="#settings">.settings</a></div>
          <div class="header-column-menu"><a href="#about">.about</a></div>
        </div>
      </div>
      <div class="content">
        <div class="clients-list">
          <div class="clients-list_client">
            <a class="client-list_link" href="#dashboard" data-client="dashboard">dashboard</a>
          </div>
          <?php $clientsList = listClientsAsList(); echo $clientsList; ?>
        </div>
        <div class="client-list_data-container">
          <div class="client-list_data-table">
            <div class="client-list_data-table_content">
              <div class="client-title">
                <div class="client-icon"><img src="./assets/images/icons/host.svg"/></div>
                HOSTNAME:&nbsp;
              </div>
            </div>
            <div class="client-list_data-table_content">
              <div class="client-content">bananaDEV</div>
            </div>
            <div class="client-list_data-table_content">
              <div class="client-title">
                <div class="client-icon"><img src="./assets/images/icons/timelapse.svg"/></div>
                GENERATED AT:&nbsp;
              </div>
            </div>
            <br/>
            <div class="client-list_data-table_content">
              <div class="client-content">Thursday, 31 October 2019 20:37:30</div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer">
        <div class="footer-column">
          &nbsp;
        </div>
        <div class="footer-column">
          &copy; <?php echo date('Y'); ?>
        </div>
      </div>
    </section>
  </body>
  <script type="text/javascript" src="./lib/libs/jquery/jquery-3.4.1.min.js"></script>
  <script type="text/javascript" src="./lib/node_modules/material-components-web/dist/material-components-web.js"></script>
  <script type="text/javascript" src="./assets/js/script-default.js"></script>
  <script>window.mdc.autoInit();</script>
</html>
