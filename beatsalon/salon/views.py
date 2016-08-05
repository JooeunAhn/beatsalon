from django.shortcuts import render, redirect
import youtube_dl
from salon.models import Audio

def index(request):
    return render(request, 'salon/index.html')

def my_hook(status):
    if status['status'] == "finished":
        print("Done downloading, now converting ...")

def serve(request,pk):
    ydl_opt = {
            'format':'bestaudio/best',
            'outtmpl': 'beatsalon/static/data/%(title)s.%(ext)s',
            'postprocessors':[{
                'key':'FFmpegExtractAudio',
                'preferredcodec':'mp3',
                'preferredquality':'192',
                }],
            'progress_hooks': [my_hook],
            }
    if not Audio.objects.filter(videoId=pk).exists():
        with youtube_dl.YoutubeDL(ydl_opt) as ydl:
            mp3 = ydl.download(["https://youtu.be/"+pk])
            info = ydl.extract_info("https://youtu.be/"+pk, download=False)
        Audio.objects.create(videoId=pk)
    else:
        with youtube_dl.YoutubeDL(ydl_opt) as ydl:
            info = ydl.extract_info("https://youtu.be/"+pk, download=False)
    return render(request, 'salon/serve.html',{'info':info,})
