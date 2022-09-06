
from rest_framework import serializers
from .models import Companies, Products


class HomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Companies
        fields = "__all__"

        def create(self, validated_data):
            return Companies.objects.create(**validated_data)

        def update(self, instance, validated_data):
            Companies.objects.filter(id=instance.id).update(**validated_data)
            return Companies.objects.get(id=instance.id)


class ProductSerializer(serializers.ModelSerializer):
    relation = HomeSerializer(read_only=True, many=True)

    class Meta:
        model = Products
        fields = "__all__"

        def create(self, validated_data):
            return Products.objects.create(**validated_data)

        def update(self, instance, validated_data):
            Products.objects.filter(id=instance.id).update(**validated_data)
            return Products.objects.get(id=instance.id)
