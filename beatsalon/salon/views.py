from django.shortcuts import render
import youtube_dl

def index(request):
    return render(request, 'salon/index.html')   


def serve(request):
    pass
