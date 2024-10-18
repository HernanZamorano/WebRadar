# import netCDF4 as nc
# import matplotlib.pyplot as plt
# import numpy as np

# # Abre el archivo netCDF
# archivo = '0301_mrr2c.nc_1.nc'  # Cambia esto por el nombre de tu archivo
# ds = nc.Dataset(archivo)

# # Extrae la variable de tiempo
# tiempos = ds.variables['time'][:]
# unidades = ds.variables['time'].units
# calendario = ds.variables['time'].calendar

# # Convierte a fechas con netCDF4.num2date
# fechas = nc.num2date(tiempos, units=unidades, calendar=calendario)

# # Opcional: Convertir a lista de strings para pandas o simplemente para graficar
# fechas_str = [str(fecha) for fecha in fechas]

# # Imprime las primeras 5 fechas para verificar
# print(fechas_str[:5])

# # Extrae datos de altura y reflectividad
# altura = ds.variables['height'][:]  # Modifica según tu archivo
# reflectividad = ds.variables['attenuated_radar_reflectivity'][:]  # Modifica según tu archivo

# # Genera un gráfico de calor (heatmap) con rango de dBZ de 0 a 40
# plt.figure(figsize=(15, 5))
# plt.imshow(reflectividad.T, aspect='auto', cmap='jet', extent=[0, len(fechas), np.min(altura), np.max(altura)], vmin=0, vmax=40)
# plt.colorbar(label="dBZ")
# plt.xticks(ticks=np.linspace(0, len(fechas), num=24), labels=[f"{fechas[int(i)].hour}:00" for i in np.linspace(0, len(fechas)-1, num=24)])
# plt.xlabel('Hora')
# plt.ylabel('Altura (m)')
# plt.title('Reflectividad MRR - Rango dBZ de 0 a 40')
# plt.show()


import netCDF4 as nc
import numpy as np
import json

# Abre el archivo netCDF
archivo = '0301_mrr2c.nc_1.nc'  # Cambia esto por el nombre de tu archivo
ds = nc.Dataset(archivo)

# Extrae la variable de tiempo
tiempos = ds.variables['time'][:]
unidades = ds.variables['time'].units
calendario = ds.variables['time'].calendar

# Convierte a fechas
fechas = nc.num2date(tiempos, units=unidades, calendar=calendario)

# Extrae datos de altura y reflectividad
altura = ds.variables['height'][:]
reflectividad = ds.variables['attenuated_radar_reflectivity'][:]

# Convierte las fechas a strings para JSON
fechas_str = [fecha.strftime('%Y-%m-%d %H:%M:%S') for fecha in fechas]

# Estructura de datos para el JSON
data = {
    "time": fechas_str,
    "height": altura.tolist(),
    "reflectivity": reflectividad.tolist()  # Asegúrate de convertir reflectividad a lista
}

# Guarda en un archivo JSON
with open('reflectividad_mrr.json', 'w') as json_file:
    json.dump(data, json_file, indent=4)

print("Datos exportados a reflectividad_mrr.json")
