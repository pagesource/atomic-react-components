#!/usr/bin/env bash

read -p "Are you sure you want to commit this (y/n)? " answer
case ${answer:0:1} in 
    y|Y ) 
        exit 0 #if yes, success!
    ;;
    *)
        exit 1 #if no, sorry no
esac