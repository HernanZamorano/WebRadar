import json
import plotly.graph_objs as go
import numpy as np

# Cargar el archivo JSON
with open('reflectividad_mrr.json', 'r') as f:
    data = json.load(f)

# Extraer datos del JSON
fechas = data['time']
altura = data['height']
reflectividad = np.array(data['reflectivity'])

# Crear el gráfico de calor con el rango dBZ de 0 a 40
fig = go.Figure(data=go.Heatmap(
    x=fechas,
    y=altura,
    z=reflectividad.T,  # Transponer para alinear correctamente con fechas y alturas
    colorscale='Jet',
    zmin=0,
    zmax=40,
    colorbar=dict(title="dBZ")
))

# Configurar el layout del gráfico
fig.update_layout(
    title="Reflectividad MRR - Rango dBZ de 0 a 40",
    xaxis_title="Hora",
    yaxis_title="Altura (m)",
    xaxis=dict(
        tickformat="%H:%M",  # Formato de hora
        tickmode='array',
        tickvals=[fechas[i] for i in range(0, len(fechas), len(fechas) // 24)],  # Etiquetas cada hora
        ticktext=[f"{str(fechas[i])[11:16]}" for i in range(0, len(fechas), len(fechas) // 24)]  # Horas en el formato HH:MM
    )
)

# Mostrar el gráfico
fig.show()
    