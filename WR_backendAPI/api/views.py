from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import JsonResponse

import json
from django.conf import settings
from pathlib import Path


# Create your views here.

@api_view(['GET'])
def get_data(request):
    return Response({'message': 'Hola desde la API de Django!'})

def obtener_grafico(request):
    # Cargar el archivo JSON
    json_file = Path(settings.BASE_DIR) / 'api' / 'source' / 'imagenes_generadas' / 'imagen_interactiva.json'
    with open(json_file, 'r') as f:
        data = json.load(f)

    return JsonResponse(data)
