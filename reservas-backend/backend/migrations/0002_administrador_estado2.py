# Generated by Django 4.1.2 on 2022-10-29 01:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='administrador',
            name='estado2',
            field=models.CharField(blank=True, max_length=50, verbose_name='Ingrese estado'),
        ),
    ]
