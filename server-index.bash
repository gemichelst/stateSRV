# VARS
CURDIR=$(dirname $0)
HOST_IP=$(ip addr | grep 'state UP' -A2 | tail -n1 | awk '{print $2}' | cut -f1  -d'/')
NEWLINE="\n"
NEWLINE2x="\n\n"
NEWLINEn=""
JSONFILE="$CURDIR/server.json"
JSON=$(cat $JSONFILE)
JSONLENGTH=$(cat $JSONFILE | wc -c)
ECHOCMD="printf"

# HEADER CMD
HEADERCMD="HTTP/1.1 200 OK$NEWLINE"
HEADERCMD="${HEADERCMD}Content-Type: application/json; Charset=UTF-8$NEWLINE"
HEADERCMD="${HEADERCMD}Content-Length: ${JSONLENGTH}$NEWLINE"
HEADERCMD="${HEADERCMD}User-Agent: nc/0.0.17$NEWLINE"
HEADERCMD="${HEADERCMD}Host: $HOST_IP:7236$NEWLINE"
HEADERCMD="${HEADERCMD}Accept: */*$NEWLINE"
HEADERCMD="${HEADERCMD}Date: $(date)$NEWLINE"
HEADERCMD="${HEADERCMD}Server: ncat-simple-server$NEWLINE" 
HEADERCMD="${HEADERCMD}Access-Control-Allow-Origin: *$NEWLINE2x"

# HEADER
$ECHOCMD "${HEADERCMD}"

# BODY
echo "$JSON"
