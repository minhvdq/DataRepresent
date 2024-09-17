from django.db import models

class CandlestickData( models.Model):
    name = models.TextField()
    date = models.DateField()
    open = models.FloatField()
    high = models.FloatField()
    low = models.FloatField()
    close = models.FloatField(default=50)

class LineData( models.Model ):
    label = models.TextField()
    data = models.FloatField()

class BarData( models.Model ):
    label = models.TextField()
    data = models.FloatField()

class PieData( models.Model ):
    label = models.TextField()
    data = models.FloatField(default = 50)
        