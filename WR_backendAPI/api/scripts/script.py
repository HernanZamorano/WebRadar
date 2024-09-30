import plotly.graph_objects as go
from glob import glob
import xarray as xr
import os
from django.conf import settings  # Para usar BASE_DIR
from pathlib import Path  # Importa Path para manejar las rutas

import os
import django
# Configurar Django
import sys
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'WR_backendAPI.settings')
django.setup()

def generar_grafico_interactivo():
    # Usa BASE_DIR para definir rutas relativas dentro del proyecto
    netcdf_path = settings.BASE_DIR / 'api' / 'source' / 'NetCDF' / '202403' / '*.nc'
    output_json_path = settings.BASE_DIR / 'api' / 'source' / 'imagenes_generadas' / 'imagen_interactiva.json'

    # Verifica que las rutas sean correctas
    print(f"Ruta de NetCDF: {netcdf_path}")
    print(f"Ruta de salida: {output_json_path}")

    # Encuentra los archivos NetCDF usando str() para convertir la ruta en cadena de texto
    nc_files = glob(str(netcdf_path))
    nc_files.sort()

    # Asegúrate de que tienes suficientes archivos en la lista
    if len(nc_files) < 18:
        raise ValueError("No hay suficientes archivos NetCDF en el directorio")

    # Abre los datasets correspondientes
    ds1 = xr.open_dataset(nc_files[16])
    ds2 = xr.open_dataset(nc_files[17])

    # Crea la figura interactiva usando Plotly
    fig = go.Figure()

    # Primer gráfico (100-m resolution)
    fig.add_trace(go.Heatmap(
        x=ds1.time, 
        y=ds1['height'][0,:], 
        z=ds1['attenuated_radar_reflectivity'].T, 
        colorscale='Viridis',
        zmin=-5, zmax=40,
        colorbar=dict(title="dBZ")
    ))

    # Segundo gráfico (250-m resolution)
    fig.add_trace(go.Heatmap(
        x=ds2.time, 
        y=ds2['height'][0,:], 
        z=ds2['attenuated_radar_reflectivity'].T, 
        colorscale='Viridis',
        zmin=-5, zmax=40
    ))

    # Configura el diseño
    fig.update_layout(
        title='MRR at UOH-Rancagua',
        xaxis_title='Time',
        yaxis_title='Height'
    )

    # Crear el directorio si no existe
    if not os.path.exists(output_json_path.parent):  # Usar .parent para obtener la carpeta
        os.makedirs(output_json_path.parent)

    print("Iniciando generación de gráfico...")
    # Guarda el gráfico en un archivo JSON
    fig.write_json(str(output_json_path))  # Convierte la ruta a cadena de texto con str()
    print(f"JSON guardado en: {output_json_path}")


    return output_json_path

if __name__ == "__main__":
    generar_grafico_interactivo()
