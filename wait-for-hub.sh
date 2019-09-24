#!/bin/sh
while [[ "$(curl -s -o /dev/null -w ''%{http_code}'' selenium-hub:4444)" != "200" ]];
 do sleep 5;
done