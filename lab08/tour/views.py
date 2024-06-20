from django.shortcuts import render, redirect, get_object_or_404
from .models import Tour, Tourist, Review
from django.http import JsonResponse, HttpResponse, FileResponse, Http404
from .forms import TourForm
from reportlab.pdfgen import canvas
import io
import requests
from reportlab.lib.utils import ImageReader

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

def clientes(request):
  tourist = Tourist.objects.all()

  return render(request, 'tourist.html', {'tourists': tourist})

def tour_detail(request, tour_id):
  tour = get_object_or_404(Tour, pk=tour_id)
  return render(request, 'tour_detail.html', {'tour': tour})

def tour_detail_pdf(request, tour_id):
    buffer = io.BytesIO()

    p = canvas.Canvas(buffer)

    try:
      tour = Tour.objects.get(pk=tour_id)
    except Tour.DoesNotExist:
      raise Http404("Tour not found")

    p.drawString(100, 800, f'Tour: {tour.cityName}')
    p.drawString(100, 780, f'Description: {tour.cityDescription}')
    p.drawString(100, 760, f'Price: {tour.price}')

    if tour.cityImage:
      try:
        response = requests.get(tour.cityImage.url)
        response.raise_for_status()
        image = ImageReader(io.BytesIO(response.content))
        p.drawImage(image, 100, 600, width=200, height=150)
      except requests.RequestException:
        p.drawString(100, 740, 'Image: Failed to load')

    p.drawString(100, 580, f'Offer: {"Yes" if tour.isOffer else "No"}')

    p.drawString(100, 720, f'Offer: {"Yes" if tour.isOffer else "No"}')

    p.showPage()
    p.save()

    buffer.seek(0)

    response = FileResponse(buffer, as_attachment=True, filename='tour.pdf')
    
    return response