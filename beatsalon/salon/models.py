from django.db import models

# Create your models here.
class Audio(models.Model):
    videoId = models.CharField(max_length=100, unique=True)
