from django.conf import settings
from django.conf.urls import url

from salon import views

urlpatterns = [
        url(r'^$', views.index, name="index"),
        url(r'^serve/(?P<pk>[a-zA-Z0-9-_]{11})$', views.serve, name="serve"),
        ]
