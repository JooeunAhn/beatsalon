from django.shortcuts import render, redirect
import youtube_dl
from salon.models import Audio
from .forms import CommentForm
from .models import Comment

def index(request):
    if request.method == 'POST' and request.is_ajax():
        form = CommentForm(request.POST, request.FILES)
        if form.is_valid():
            comment = form.save(commit=False)
            comment.save()
            comments = Comment.objects.order_by('pk').reverse()
            return render(request, 'salon/comment.html', {'comments': comments})
    else:
        form = CommentForm()
    comments = Comment.objects.order_by('pk').reverse()
    return render(request, 'salon/index.html',
        {'comments': comments,
         'form':form,}
    )



def my_hook(status):
    if status['status'] == "finished":
        print("Done downloading, now converting ...")

def serve(request,pk):
    if request.method == 'POST' and request.is_ajax():
        form = CommentForm(request.POST, request.FILES)
        if form.is_valid():
            comment = form.save(commit=False)
            comment.save()
            comments = Comment.objects.order_by('pk').reverse()
            return render(request, 'salon/comment.html', {'comments': comments})
    else:
        form = CommentForm()

    comments = Comment.objects.order_by('pk').reverse()
    ydl_opt = {
            'format':'bestaudio/best',
            'outtmpl': 'beatsalon/static/data/'+pk+'.%(ext)s',
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
    thumbnail_url = info['thumbnails'][0]["url"]
    return render(request, 'salon/serve.html', {'info':info, "thumbnail_url":thumbnail_url, 'comments': comments,
        'musicId':pk,'form':form})
