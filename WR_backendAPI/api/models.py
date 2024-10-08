from django.db import models

# Create your models here.
# models.py en tu aplicación Django

class MeteorologicalData(models.Model):
    variable = models.CharField(max_length=50)  # Ej. 'Reflectividad', 'Velocidad Vertical', 'Spectrum Width'
    resolution = models.IntegerField()          # Ej. 100 o 250
    json_path = models.FilePathField(path='path/a/json/directory')  # Ruta donde se guarda el archivo JSON
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.variable} - {self.resolution}m"
