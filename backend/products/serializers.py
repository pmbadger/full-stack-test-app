from rest_framework import serializers
from .models import Product


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ["id", "name", "description", "price", "stock"]


class ProductSelectSerializer(serializers.Serializer):
    product_id = serializers.IntegerField()
    select = serializers.BooleanField()
