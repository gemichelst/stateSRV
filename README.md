# stateSRV
A statistics server driven by netcat.
It can display several server information like hardware, memory, temperatures etc over a simple tcp/http connection. Data will be generated as JSON and merged all together at the SERVER machine.
The CLIENT machines will only collect these data and make them available over tcp/http-api.

## requirements
- netcat
- php

## installation
clone this repo and enter the repo dir.
afterwards install the server
```
git clone git@github.com:gemichelst/stateSRV.git 
cd stateSRV
./install
```

## usage
to use this tool as CLIENT you need to install the server like described in the installation section.
now type the following command to start the server in the background:
```
/usr/local/share/stateSRV/server &
```
if you need to use another port and another netcat command:
(default port: 7236, default netcat command: nc)
```
/usr/local/share/stateSRV/server [PORT] [NCCMD] &
```
full example
```
/usr/local/share/stateSRV/server 9999 netcat &  

## CREDITS
developed by Michael Matzat 2019
www.gemichelst.de
