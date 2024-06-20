from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views


urlpatterns = [
  path('', views.home, name='home'),
  path('addTour/', views.addTour, name='addTour'),
  path('removeTour/<int:tour_id>/', views.removeTour, name='removeTour'),
  path('editTour/<int:tour_id>/', views.editTour, name='editTour'),
  path('clientes/', views.clientes, name='clientes'),

  path('tour/<int:tour_id>/', views.tour_detail, name='tour_detail'),
  path('tour/<int:tour_id>/pdf/', views.tour_detail_pdf, name='tour_detail_pdf'),
]

if settings.DEBUG:
  urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)