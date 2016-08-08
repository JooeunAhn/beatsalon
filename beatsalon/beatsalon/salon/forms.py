from django import forms
from .models import Comment

class CommentForm(forms.Form):
    author = forms.CharField()
    message = forms.CharField()
    def save(self, commit=True):
        comment = Comment(author= self.cleaned_data['author'], message= self.cleaned_data['message'])
        if commit:
            comment.save()
        return comment
