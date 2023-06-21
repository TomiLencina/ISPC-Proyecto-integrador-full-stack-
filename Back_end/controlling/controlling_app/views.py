from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.shortcuts import HttpResponse
from django.db import transaction
from .serializer import UserSerializer, OperationSerializer, PortfolioSerializer
from .models import Portfolio



def index(request):
    return HttpResponse("Home")


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def protected(request):
    return Response({"content": "Esta vista está protegida"})

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_portfolio(request):
    user = request.user
    portfolio = user.portfolio
    operations = portfolio.operation_set.all()
    serializer = OperationSerializer(operations, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_operation(request):
    serializer = OperationSerializer(data=request.data)
    if serializer.is_valid():
        portfolio = request.user.portfolio
        operation = serializer.save(portfolio=portfolio)
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@api_view(['POST'])
@permission_classes([AllowAny])
def register_user(request):

    serializer = UserSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)

    with transaction.atomic():
        user = serializer.save()
        user.set_password(request.data.get('password'))
        user.save()
        portfolio = Portfolio(user=user)
        portfolio.save()

    return Response({"content": "Usuario creado exitosamente."}, status=200)
