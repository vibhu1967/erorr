from django.db import models


def upload_path(instance, filename):
    return '/'.join(['images', filename])


class Companies(models.Model):
    id = models.IntegerField(primary_key=True, unique=True)
    name = models.CharField(max_length=50)
    location = models.CharField(max_length=50)


class Products(models.Model):
    identity = models.ForeignKey(
        Companies, related_name='relation', on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    quantity = models.IntegerField()
    description = models.CharField(max_length=100, null=True)
    image = models.ImageField(null=True, upload_to=upload_path)
