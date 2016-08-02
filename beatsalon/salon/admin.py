from django.contrib import admin
from salon.models import Audio
# Register your models here.

class AudioAdmin(admin.ModelAdmin):
    list_display = ['id', 'videoId']

admin.site.register(Audio, AudioAdmin)
