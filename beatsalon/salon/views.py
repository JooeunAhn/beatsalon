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
            'outtmpl': 'beatsalon/static/data/%(title)s.%(ext)s', #여기는 p5js에 노래를 받아올수있게 data파일에 저장되게 했어요
            #그파일에서 p5js에서 읽어올수 있게 mp3파일 제목을 변수로 import시키면될거같네용 ㅎㅎ
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
