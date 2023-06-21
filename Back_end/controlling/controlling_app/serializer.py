from rest_framework import serializers
from .models import User
from .models import Operation
from .models import Asset
from .models import Portfolio


class AssetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Asset
        fields = '__all__'


class OperationSerializer(serializers.ModelSerializer):
    
    asset = AssetSerializer()
    portfolio = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = Operation
        fields = '__all__'

    def create(self, validated_data):
        asset_data = validated_data.pop('asset')
        asset, _ = Asset.objects.get_or_create(**asset_data)
        validated_data['asset'] = asset
        operation = Operation.objects.create(**validated_data)
        return operation


class PortfolioSerializer(serializers.ModelSerializer):
    operations = OperationSerializer(many=True)

    class Meta:
        model = Portfolio
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'