from netCDF4 import Dataset

# Ruta al archivo netCDF
archivo_netcdf = '0301_mrr2c.nc_2.nc'

# Abrir el archivo netCDF
dataset = Dataset(archivo_netcdf, 'r')

# Imprimir atributos globales
print("Atributos Globales:")
for attr in dataset.ncattrs():
    print(f"{attr}: {getattr(dataset, attr)}")
print("\n")

# Imprimir dimensiones
print("Dimensiones:")
for dim_name, dim in dataset.dimensions.items():
    print(f"{dim_name}: {len(dim)} {'(Unlimited)' if dim.isunlimited() else ''}")
print("\n")

# Imprimir variables y sus atributos
print("Variables:")
for var_name, var in dataset.variables.items():
    print(f"Variable: {var_name}")
    print(f"  Dimensiones: {var.dimensions}")
    print(f"  Tamaño: {var.shape}")
    for attr in var.ncattrs():
        print(f"  {attr}: {getattr(var, attr)}")
    print("\n")

# Cerrar el archivo netCDF
dataset.close()
