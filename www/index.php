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
    <title>statSRV v<?php echo VERSION; ?></title>
    <link rel="shortcut icon" href="./assets/images/logo/statSRV-icon@0.5x.png" type="image/png">
    <link rel="icon" href="./assets/images/logo/statSRV-icon@0.5x.png" type="image/png">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex, nofollow">
    <meta name="application-name" content="statSRV">
    <meta name="author" content="Michael Matzat (gemichelst.de)">
    <meta name="description" content="">
    <link rel="stylesheet" href="./lib/node_modules/material-components-web/dist/material-components-web.css">
    <link rel="stylesheet" href="./lib/libs/material/roboto/Roboto.css">
    <link rel="stylesheet" href="./lib/libs/material/mdc-icons/material-icons.css">
    <link rel="stylesheet" href="./assets/css/style.css">
  </head>
  <body class="mdc-typography">

    <!-- LOADING SPINNER -->
    <div id="loading-spinner" class="loading-spinner_large">
        <div class="loading-spinner"></div>
    </div>
    <!-- LOADING SPINNER -->

    <!-- SECTION -->
    <section id="section1">

      <!-- HEADER -->
      <div class="header shadow-light">
        <div class="header-columns">
          <div class="header-column-logo"></div>
        </div>
        <div class="header-columns">
          <div class="header-column-menu"><a href="#settings" id="link--settings" data-link="settings" class="icon-link"><i class="material-icons">settings</i></a></div>
          <div class="header-column-menu"><a href="#help" id="link--help" data-link="help" class="icon-link"><i class="material-icons">help</i></a></div>
        </div>
      </div>
      <!-- HEADER -->

      <!-- CONTENT -->
      <div class="content">


      <!-- ADD NEW CLIENT -->
      <div id="add-client">
        <form id="form-add-client" method="post" accept="<?php echo $PHP_SELF; ?>">
          <div class="mdc-text-field mdc-text-field--with-leading-icon" id="input-new-client-adress">
            <i class="material-icons mdc-text-field__icon">laptop</i>
            <input class="mdc-text-field__input" id="text-field-hero-input">
            <div class="mdc-line-ripple"></div>
            <label for="text-field-hero-input" class="mdc-floating-label">PROTOCOL://IP:PORT</label>
          </div>
          <div class="mdc-text-field mdc-text-field--with-leading-icon" id="input-new-client-name">
             <i class="material-icons mdc-text-field__icon">laptop</i>
             <input class="mdc-text-field__input" id="text-field-hero-input">
             <div class="mdc-line-ripple"></div>
             <label for="text-field-hero-input" class="mdc-floating-label">DEVICE NAME</label>
          </div>
          <button id="button-add-client" class="mdc-button mdc-button--raised" type="submit">
            <span class="mdc-button__ripple"></span>
            <i class="material-icons mdc-button__icon">add</i>
            <span class="mdc-button__label">ADD</span>
          </button>
        </form>
      </div>


        <div class="clients-list">
          <div class="clients-list-clients">
            <!-- <div class="clients-list_client_first">
              <a class="client-list_link_first" href="#dashboard" data-link="dashboard">dashboard</a>
            </div> -->
            <div class="clients-list_client">
             <a class="client-list_link" href="#dashboard" data-link="dashboard">dashboard</a>
            </div>
            <?php $clientsList = listClientsAsList(); echo $clientsList; ?>
          </div>
          <div class="client-list-icons">
            <div class="clients-list_icon" id="icon--add-client">
              <a class="client-list_icon-link" id="link--add" href="#add-client" data-link="add"><i class="material-icons">add</i></a>
            </div>
            <div class="clients-list_icon" id="icon--refresh-clients">
              <a class="client-list_icon-link" id="link--refresh" href="#refresh-clients" data-link="refresh"><i class="material-icons">refresh</i></a>
            </div>
          </div>
        </div>
        <div class="client-list_data-container"></div>
      </div>
      <!-- CONTENT -->

      <!-- FOOTER -->
      <div class="footer shadow-light">
        <div class="footer-column">
          <div class="icons">
            <a href="https://github.com/gemichelst/stateSRV" target="_blank">
              <div class="icon" id="icon--github">
                <div class="tooltip" id="tooltip-github">GITHUB</div>
              </div>
            </a>
          </div>
        </div>
        <div class="footer-column">
          GeMichelst.de <?php echo date('Y'); ?>
        </div>
      </div>
      <!-- FOOTER -->

    </section>
    <!-- SECTION -->

  </body>
  <script type="text/javascript" src="./lib/node_modules/jquery/dist/jquery.min.js"></script>
  <script type="text/javascript" src="./lib/libs/jquery/plugins/jquery.easing.js"></script>
  <script type="text/javascript" src="./lib/node_modules/material-components-web/dist/material-components-web.js"></script>
  <script type="text/javascript" src="./assets/js/script-default.js"></script>
  <script>window.mdc.autoInit();</script>
</html>
