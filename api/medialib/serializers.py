from rest_framework import serializers
from .models import DataSet, File


class DataSetSerializer(serializers.ModelSerializer):
    class Meta:
        model = DataSet
        fields = ['id', 'name', 'created_at']


class FileSerializer(serializers.ModelSerializer):
    class Meta:
        model = File
        fields = ['id', 'name', 'path', 'created_at']
