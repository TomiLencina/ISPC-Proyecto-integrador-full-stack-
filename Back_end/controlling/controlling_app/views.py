from django.shortcuts import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import authenticate
from rest_framework import serializers


def index(request):
    return HttpResponse("Home")


class UserSerializer(serializers.Serializer):
    email = serializers.EmailField()
    username = serializers.CharField(max_length=200)
    password = serializers.CharField(max_length=200)



class LoginView(APIView):
    
    # authentication_classes = []
    # permission_classes = []



    def get(self, request):
        
        email = request.GET.get("email")
        password = request.GET.get("password")
        print(f"-------------{email, password}")

        user = authenticate(email=email, password=password)
        print(f"-----------------{user}--------------------")
        if user:
            data = UserSerializer(user).data
            return Response(data=data)
        return Response(data={"Message":"Hubo un error"})

