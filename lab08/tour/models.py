from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

# Create your models here.
class Tour(models.Model):
  cityName = models.CharField(max_length=100)
  cityDescription = models.TextField()
  cityImage = models.ImageField(upload_to='images/')
  price = models.IntegerField()
  isOffer = models.BooleanField(default=False)

  def __str__(self):
    return self.cityName

class Tourist(models.Model):
  name = models.CharField(max_length=100)
  email = models.EmailField(unique=True)
  tours = models.ManyToManyField(Tour, related_name='tourists')

  def __str__(self):
    return self.name

class Review(models.Model):
  tour = models.ForeignKey(Tour, on_delete=models.CASCADE, related_name='reviews')
  rating = models.PositiveSmallIntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
  comment = models.TextField()
  date = models.DateField(auto_now_add=True)

  def __str__(self):
    return f'Review for {self.tour.cityName} by {self.id}'

