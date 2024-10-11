import plotly.graph_objects as go
import xarray as xr
import os
from django.conf import settings  # Para usar BASE_DIR
from pathlib import Path  # Para manejar las rutas

import django
import sys
# Configurar la ruta del proyecto
sys.path.append('C:/Users/Aledm/Documents/GitHub/Proyecto de software/Alan-Dev/WebRadar/WR_backendAPI')
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'WR_backendAPI.settings')
django.setup()

def generar_grafico_interactivo():
    # Usa BASE_DIR para definir rutas relativas dentro del proyecto
    netcdf_file = settings.BASE_DIR / 'api' / 'source' / 'NetCDF' / '202403' / '0301_mrr2c.nc_1.nc'

    # Extraer el nombre del archivo NetCDF sin la extensión
    output_file_name = netcdf_file.stem + '.json'
    
    # Ruta de salida con el mismo nombre que el archivo de entrada
    output_json_path = settings.BASE_DIR / 'api' / 'source' / 'imagenes_generadas' / output_file_name

    # Verifica que las rutas sean correctas
    print(f"Ruta de NetCDF: {netcdf_file}")
    print(f"Ruta de salida: {output_json_path}")

    # Verifica si el archivo existe
    if not os.path.exists(netcdf_file):
        raise FileNotFoundError(f"El archivo NetCDF no existe: {netcdf_file}")

    # Abre el dataset correspondiente
    ds = xr.open_dataset(netcdf_file)

    # Crea la figura interactiva usando Plotly
    fig = go.Figure()

    # Gráfico con resolución y altura
    fig.add_trace(go.Heatmap(
        x=ds.time, 
        y=ds['height'][0,:], 
        z=ds['attenuated_radar_reflectivity'].T, 
        colorscale='Viridis',
        zmin=-5, zmax=40,
        colorbar=dict(title="dBZ")
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
    # Guarda el gráfico en un archivo JSON con el mismo nombre que el archivo NetCDF
    fig.write_json(str(output_json_path))  # Convierte la ruta a cadena de texto con str()
    print(f"JSON guardado en: {output_json_path}")

    return output_json_path

if __name__ == "__main__":
    generar_grafico_interactivo()
