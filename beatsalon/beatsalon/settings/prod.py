from .common import *

DEBUG = False
ALLOWED_HOSTS = ['*']

DATABASES = {
    'default':{
        'ENGINE' : 'django.db.backends.postgresql',
        'NAME' : 'ubuntu',
        'USER' : 'ubuntu',
        'PASSWORD' : 'beatsalon',
        'HOST' : '127.0.0.1',

    },
}