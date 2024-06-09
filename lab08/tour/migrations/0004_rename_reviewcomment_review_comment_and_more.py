# Generated by Django 5.0.6 on 2024-06-09 16:22

import datetime
import django.core.validators
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tour', '0003_review_tourist'),
    ]

    operations = [
        migrations.RenameField(
            model_name='review',
            old_name='reviewComment',
            new_name='comment',
        ),
        migrations.RenameField(
            model_name='tourist',
            old_name='touristName',
            new_name='name',
        ),
        migrations.RenameField(
            model_name='tourist',
            old_name='touristTour',
            new_name='tours',
        ),
        migrations.RemoveField(
            model_name='review',
            name='reviewEmail',
        ),
        migrations.RemoveField(
            model_name='review',
            name='reviewName',
        ),
        migrations.RemoveField(
            model_name='review',
            name='reviewRating',
        ),
        migrations.RemoveField(
            model_name='review',
            name='reviewTour',
        ),
        migrations.RemoveField(
            model_name='tourist',
            name='touristAge',
        ),
        migrations.RemoveField(
            model_name='tourist',
            name='touristEmail',
        ),
        migrations.RemoveField(
            model_name='tourist',
            name='touristPhone',
        ),
        migrations.AddField(
            model_name='review',
            name='date',
            field=models.DateField(auto_now_add=True, default=datetime.date(2024, 6, 9)),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='review',
            name='rating',
            field=models.PositiveSmallIntegerField(default=0, validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(5)]),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='review',
            name='tour',
            field=models.ForeignKey(default=2, on_delete=django.db.models.deletion.CASCADE, related_name='reviews', to='tour.tour'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='tourist',
            name='email',
            field=models.EmailField(default=datetime.date(2024, 6, 9), max_length=254, unique=True),
            preserve_default=False,
        ),
    ]