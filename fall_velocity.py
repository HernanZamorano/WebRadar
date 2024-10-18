import netCDF4 as nc
import json

# Abre el archivo netCDF
archivo = '0301_mrr2c.nc_1.nc'  # Cambia esto por el nombre de tu archivo
ds = nc.Dataset(archivo)

# Extrae los datos de tiempo, altura y velocidad de caída
tiempos = ds.variables['time'][:]
unidades_tiempo = ds.variables['time'].units
calendario_tiempo = ds.variables['time'].calendar
fechas = nc.num2date(tiempos, units=unidades_tiempo, calendar=calendario_tiempo)

altura = ds.variables['height'][:]  # Ajusta si el nombre varía
fall_velocity = ds.variables['fall_velocity'][:]

# Convierte las fechas a strings
fechas_str = [str(fecha) for fecha in fechas]

# Estructura los datos en un diccionario
data_dict = {
    "time": fechas_str,
    "height": altura.tolist(),
    "fall_velocity": fall_velocity.tolist()
}

# Guarda el diccionario como JSON
with open('fall_velocity_data.json', 'w') as outfile:
    json.dump(data_dict, outfile)

print("Datos de fall velocity guardados en fall_velocity_data.json")
