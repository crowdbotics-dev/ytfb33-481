#!/bin/bash

python manage.py migrate --noinput

waitress-serve --port=$PORT ytfb33_481.wsgi:application
