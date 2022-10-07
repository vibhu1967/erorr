from django.urls import path
from .views import Home, Product

urlpatterns = [

    path('', Home.as_view()),
    path('<int:id>', Home.as_view()),
    path('<int:id>/products', Product.as_view()),
    path('products/<int:id>', Product.as_view()),


]
