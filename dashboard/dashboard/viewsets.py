from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from dashboard.models import CandlestickData, LineData, BarData, PieData

from dashboard.serializes import CandleSerializer, LineSerializer, BarSerializer, PieSerializer

class CandleViewSet( viewsets.ModelViewSet ):
    queryset = CandlestickData.objects.all()
    serializer_class = CandleSerializer
    permission_classes = [AllowAny]

class LineViewSet( viewsets.ModelViewSet ):
    queryset = LineData.objects.all()
    serializer_class = LineSerializer
    permission_classes = [AllowAny]

class BarViewSet( viewsets.ModelViewSet ):
    queryset = BarData.objects.all()
    serializer_class = BarSerializer
    permission_classes = [AllowAny]

class PieViewSet( viewsets.ModelViewSet ):
    queryset = PieData.objects.all()
    serializer_class = PieSerializer
    permission_classes = [AllowAny]
