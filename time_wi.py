import json

# Cargar el archivo JSON
with open('2024-03-01_reflectivity.json', 'r') as f:
    data = json.load(f)

# Contar la cantidad de elementos en "time"
num_timestamps = len(data['time'])
print(f"Número de valores en 'time': {num_timestamps}")
import datetime as dt

# Interpretar un valor de "time" como días desde el Epoch
timestamp = data['time'][2]  # Cambia este valor según desees
reference_date = dt.datetime(1, 1, 1)  # Fecha de referencia usual en NetCDF
actual_date = reference_date + dt.timedelta(days=timestamp)

print(f"El valor {timestamp} corresponde a la fecha: {actual_date}")


import xarray as xr

# Cargar el archivo .nc
ds = xr.open_dataset('0301_mrr2c.nc_1.nc')

# Inspeccionar la variable de tiempo y sus atributos
print(ds['time'])
print(ds['time'].attrs)
