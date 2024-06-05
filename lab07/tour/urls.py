from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views


urlpatterns = [
  path('', views.home, name='home'),
  path('addTour/', views.addTour, name='addTour'),
  path('removeTour/<int:tour_id>/', views.removeTour, name='removeTour'),
  path('editTour/<int:tour_id>/', views.editTour, name='editTour'),
]

if settings.DEBUG:
  urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)