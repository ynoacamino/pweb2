from django.shortcuts import render, redirect, get_object_or_404
from .models import Tour
from django.http import JsonResponse, HttpResponse
from .forms import TourForm

# Create your views here.
def home(request):
  tours = Tour.objects.all()

  print(tours[0].id)

  return render(request, 'home.html', {'tours': tours})

def addTour(request):
  if request.method == 'POST':
    form = TourForm(request.POST, request.FILES)
    if form.is_valid():
      form.save()
      return redirect('home')
  else:
    form = TourForm()

  return render(request, 'addTour.html', {'form': form})

def removeTour(request, tour_id):
  tour = get_object_or_404(Tour, id=tour_id)
  if request.method == 'POST':
    tour.delete()
    return redirect('home')
  

  return render(request, 'removeTour.html', {'tour': tour})

def editTour(request, tour_id):
  tour = get_object_or_404(Tour, id=tour_id)
  if request.method == 'POST':
    form = TourForm(request.POST, request.FILES, instance=tour)
    if form.is_valid():
      form.save()
      return redirect('home')
  
  return render(request, 'editTour.html', {'tour': tour})