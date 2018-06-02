#!/bin/bash

trap killgroup SIGINT ERR EXIT

killgroup () {
  echo
  echo killing...
  kill 0
}

node compiler --dev --watch &
./node_modules/.bin/superstatic -c superstatic.json public --port $PORT --host $IP &
./node_modules/.bin/webpack --env.BROWSERS=module --mode=development --watch