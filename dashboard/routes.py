from django.urls import path, include
from rest_framework import routers
from dashboard.viewsets import CandleViewSet, LineViewSet, BarViewSet, PieViewSet

# Create the router and register the viewsets
router = routers.SimpleRouter()
router.register(r'candlestick_data', CandleViewSet, basename="candlestick_data")
router.register(r'line_data', LineViewSet, basename="line_data")
router.register(r'bar_data', BarViewSet, basename="bar_data")
router.register(r'pie_data', PieViewSet, basename="pie_data")