from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import HttpResponse
from .models import User

def index(request):
    return HttpResponse("Home")


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def protected(request):
    return Response({"content": "Esta vista está protegida"})


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def register_user(request):
    email= request.POST["email"]
    username= request.POST["username"]
    nationality= request.POST["nationality"]
    password= request.POST["password"]
    user = User.objects.create(email, username, nationality, password)
    return Response({"content": "Esta vista está protegida"})