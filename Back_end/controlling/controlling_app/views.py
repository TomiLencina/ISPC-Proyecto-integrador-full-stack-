from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import HttpResponse


def index(request):
    return HttpResponse("Home")


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def protected(request):
    return Response({"content": "Esta vista está protegida"})