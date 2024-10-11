from django.core.management.base import BaseCommand
#from api.scripts import generar_grafico_interactivo  # Asegúrate de que el script esté correctamente importado
from api.scripts.script import generar_grafico_interactivo

class Command(BaseCommand):
    help = 'Genera un gráfico interactivo y lo guarda en un archivo JSON'

    def handle(self, *args, **kwargs):
        generar_grafico_interactivo()
        self.stdout.write(self.style.SUCCESS('Gráfico generado correctamente'))
