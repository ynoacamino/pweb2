# Generated by Django 5.0.6 on 2024-06-02 23:27

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Tour',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cityName', models.CharField(max_length=100)),
                ('descriptionName', models.TextField()),
                ('cityImage', models.ImageField(upload_to='images/')),
                ('price', models.IntegerField()),
                ('isOffer', models.BooleanField(default=False)),
            ],
        ),
    ]