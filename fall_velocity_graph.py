import json
import plotly.graph_objs as go
import pandas as pd
import numpy as np

# Cargar los datos desde el archivo JSON
with open('fall_velocity_data.json', 'r') as f:
    data = json.load(f)

# Convertir la lista de tiempos a strings, truncando los decimales en los segundos
time_series = pd.to_datetime([t.split('.')[0] for t in data['time']])

# Continuar con el resto de los datos
altura = np.array(data['height'])
fall_velocity = np.array(data['fall_velocity'])

# Crear el heatmap en Plotly
fig = go.Figure(data=go.Heatmap(
    x=time_series,
    y=altura,
    z=fall_velocity.T,  # Transponemos para que las dimensiones coincidan
    colorscale='Jet',
    zmin=-3,  # Rango mínimo ajustado a -3
    zmax=9,   # Rango máximo ajustado a 9
    colorbar=dict(title='Velocidad de Caída (m/s)')
))

# Configurar el diseño del gráfico
fig.update_layout(
    title='Velocidad de Caída (Fall Velocity) - Resolución en Altura',
    xaxis_title='Hora',
    yaxis_title='Altura (m)',
    xaxis=dict(
        tickmode='auto',
        tickformat='%H:%M',  # Formato de la hora en el eje x
        nticks=24  # Ajusta la cantidad de ticks para evitar sobrecarga de etiquetas
    )
)

# Mostrar el gráfico
fig.show()
