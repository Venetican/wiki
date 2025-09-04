from django import forms

class ReviewForm(forms.Form):
    user_name = forms.CharField(label='Your Name', max_length=100)
    review = forms.CharField(label='Your Review', max_length=500, widget=forms.Textarea)
    rating = forms.IntegerField(label='Rating', min_value=1, max_value=100)
    email = forms.EmailField(label='Your Email', required=False)
