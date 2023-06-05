from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.shortcuts import HttpResponse
from django.db import transaction
from .serializer import UserSerializer



def index(request):
    return HttpResponse("Home")


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def protected(request):
    return Response({"content": "Esta vista está protegida"})


@api_view(['POST'])
@permission_classes([AllowAny])
def register_user(request):

    serializer = UserSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)

    with transaction.atomic():
        user = serializer.save()
        user.set_password(request.data.get('password'))
        user.save()

    return Response({"content": "Usuario creado exitosamente."}, status=200)
