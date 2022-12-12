from django.db import models


class DataSet(models.Model):
    name = models.CharField(max_length=50, null=False, blank=False)
    created_at = models.DateTimeField(auto_now_add=True)


class File(models.Model):
    data_set = models.ForeignKey(to=DataSet, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=128)
    path = models.CharField(max_length=128)
