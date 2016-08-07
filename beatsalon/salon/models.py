from django.db import models
from django.utils import timezone
import re

# Create your models here.
class Audio(models.Model):
    videoId = models.CharField(max_length=100, unique=True)

class Comment(models.Model):
    author = models.CharField(max_length=10)
    message = models.CharField(max_length=30)
    created_at = models.DateTimeField(default=timezone.now)


    def __str__(self):
        return self.author

