# stateSRV

![alt text][logo]

A statistics server driven by netcat.
It can display several server information like hardware, memory, temperatures etc over a simple tcp/http connection. Data will be generated as JSON and merged all together at the SERVER machine.
The CLIENT machines will only collect these data and make them available over tcp/http-api.

## requirements
- netcat
- php

## installation
clone this repo and enter the repo dir.
afterwards install the server
```bash
git clone git@github.com:gemichelst/stateSRV.git 
cd stateSRV
/tools/install
```

## usage
to start this application on client machines which should provide their stats use this command:
```bash
statSRV client
```

if you need to use another port and another netcat command:
(default port: 7236, default nccmd: nc)

```bash
statSRV [port] [client]
```

[port] is optional
[nccmd] is optional

to start this application on the host machine which should collect the stats from the clients and provide a webgui to display the data use this command:
```bash
statSRV host
```

## webgui
to use the webgui you need a webserver like apache or nginx.
Add a new vhost or site like usual and set the root dir to the www folder.
You will find an apache site-config at the folder conf.

## CREDITS
developed by Michael Matzat 2019
www.gemichelst.de

[logo]: https://github.com/gemichelst/stateSRV/blob/master/www/assets/images/logo/statSRV-logo@0.5x.png "statSRV-LOGO"
