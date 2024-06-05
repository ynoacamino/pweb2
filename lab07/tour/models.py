from django.db import models

# Create your models here.
class Tour(models.Model):
  cityName = models.CharField(max_length=100)
  cityDescription = models.TextField()
  cityImage = models.ImageField(upload_to='images/')
  price = models.IntegerField()
  isOffer = models.BooleanField(default=False)