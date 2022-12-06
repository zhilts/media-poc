from rest_framework import serializers
from .models import DataSet


class DataSetSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = DataSet
        fields = ['id', 'name', 'created_at']
