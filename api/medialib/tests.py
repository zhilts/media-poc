from django.test import TestCase
from .models import DataSet

# Create your tests here.

class DataSetTestCase(TestCase):
    def test_test(self):
        item = DataSet()
        print(item.id, item.name)
        item.save()
        print(item.id, item.name, type(item.name))