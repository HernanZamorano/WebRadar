from django.urls import path
from .views import get_data, obtener_grafico  # Ya estás importando obtener_grafico directamente

urlpatterns = [
    path('data/', get_data, name='get_data'),
    path('grafico/', obtener_grafico, name='obtener_grafico'),  # Remueve "views."
]
