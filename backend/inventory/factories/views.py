

from django.shortcuts import get_object_or_404
from django.http import JsonResponse

from rest_framework.views import APIView, Response
from .models import Companies, Products

from .serializers import HomeSerializer, ProductSerializer


class Home(APIView):

    def get(self, request, id=None):
        if id:
            item = Products.objects.filter(identity=id)
            serializer = ProductSerializer(item, many=True)
            return Response(serializer.data)

        items = Companies.objects.all()
        serializer = HomeSerializer(items, many=True)
        return Response(serializer.data)


class Product(APIView):

    def post(self, request):
        serializer = ProductSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return JsonResponse(serializer.data)

    def get(self, request, id=None):
        if id:
            item = Products.objects.get(id=id)
            serializer = ProductSerializer(item)
            return Response({"data": serializer.data})

        items = Products.objects.all()
        serializer = ProductSerializer(items, many=True)
        return Response({"data": serializer.data})

    def put(self, request, *args, **kwargs):
        model_id = kwargs.get("id", None)
        if not model_id:
            return JsonResponse({"error": "method /PUT/ not allowed"})
        try:
            instance = Products.objects.get(id=model_id)
        except:
            return JsonResponse({"error": "Object does not exist"})

        serializer = ProductSerializer(data=request.data, instance=instance)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return JsonResponse({"data": serializer.data})

    def delete(self, request, id=None):
        item = get_object_or_404(Products, id=id)
        item.delete()
        return Response({"status": "success", "data": "Item Deleted"})
