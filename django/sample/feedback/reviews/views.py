from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect

from .forms import ReviewForm

# Create your views here.


def review(request):
    form = ReviewForm()
    return render(
        request, "reviews/review.html",
        {
            "form": form
        }
    )

def thank_you(request):
    user_name = request.session.get("user_name", "Anonymous")
    return render(request, "reviews/thank_you.html", {"user_name": user_name})