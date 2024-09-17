# Generated by Django 5.1.1 on 2024-09-11 05:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0003_linedata'),
    ]

    operations = [
        migrations.CreateModel(
            name='BarData',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('label', models.TextField()),
                ('data', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='PieData',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('label', models.TextField()),
            ],
        ),
    ]
