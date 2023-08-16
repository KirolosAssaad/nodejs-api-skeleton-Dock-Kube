# !/usr/bin/bash

# This script is used to run the smoke test for the application

echo "Running smoke test for the application"

# while loop to check if the application is up and running
while true
do
    # curl command to check if the application is up and running
    curl -s http://localhost:3000/health
    # if condition to check if the application is up and running
    if [ $? = 0 ]
    then
        echo "Application is up and running"
        break
    else
        echo "Application is not up and running"
        sleep 5
    fi
done