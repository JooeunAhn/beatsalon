from django.conf import settings
from django.conf.urls import url

from salon import views

urlpatterns = [
        url(r'^$', views.index, name="index"),
        url(r'^serve/$', views.serve, name="serve"),
        ] 

