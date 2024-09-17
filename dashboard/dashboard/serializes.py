from rest_framework import serializers

from dashboard.models import CandlestickData, LineData, BarData, PieData

class CandleSerializer( serializers.ModelSerializer ):

    class Meta:
        model = CandlestickData
        fields = '__all__'

class LineSerializer( serializers.ModelSerializer ):
    class Meta:
        model = LineData
        fields = '__all__'

class BarSerializer( serializers.ModelSerializer ):
    class Meta:
        model = BarData
        fields = '__all__'

class PieSerializer( serializers.ModelSerializer ):
    class Meta:
        model = PieData
        fields = '__all__'