from django.shortcuts import render
from rest_framework import viewsets
from .models import DataSet
from .serializers import DataSetSerializer


# Create your views here.

class DataSetViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = DataSet.objects.all().order_by('created_at')
    serializer_class = DataSetSerializer
    # permission_classes = [permissions.IsAuthenticated]
