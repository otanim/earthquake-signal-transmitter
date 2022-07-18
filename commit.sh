#!/usr/bin/env bash

if [[ -z "$1" ]]; then
    echo "ERROR: commit message is not defined."
    exit 1
fi

git add .
echo "git add ."
echo "========================================="

printf "\n"

git commit -m "$1"
printf "\n"
echo "git commit: $1"
echo "========================================="

printf "\n"

git push origin master
echo "git push origin master"
printf "\n"
echo "========================================="

echo "FINISHED."
