#!/bin/ash

set -e

DEBUG="${DEBUG:-0}"

if [ $DEBUG -eq "1" ]; then
    /usr/sbin/mosquitto -c /mosquitto/config/mosquitto.conf -v
else
    /usr/sbin/mosquitto -c /mosquitto/config/mosquitto.conf
fi
