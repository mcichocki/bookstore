#!/bin/bash
cd ..
docker-compose run --rm bookstore-node-service $1 $2 $3 $4
