from django.shortcuts import render
from rest_framework import viewsets
from .models import DataSet, File
from .serializers import DataSetSerializer, FileSerializer


# Create your views here.

class DataSetViewSet(viewsets.ModelViewSet):
    queryset = DataSet.objects.all().order_by('created_at')
    serializer_class = DataSetSerializer


class FileViewSet(viewsets.ModelViewSet):
    queryset = File.objects.all().order_by('id')
    serializer_class = FileSerializer
