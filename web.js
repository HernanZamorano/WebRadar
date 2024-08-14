document.addEventListener("DOMContentLoaded", function () {
    const aplicarFiltrosBtn = document.getElementById("aplicarFiltros");
    const masDetallesBtn = document.getElementById("masDetalles");
    const controlTiempo = document.getElementById("controlTiempo");
    const diasImagenes = document.getElementById("diasImagenes");

    // Función para aplicar los filtros
    aplicarFiltrosBtn.addEventListener("click", function () {
        // Aquí puedes añadir lógica para aplicar los filtros seleccionados
        alert("Filtros aplicados");
    });

    // Función para mostrar más detalles de la imagen seleccionada
    masDetallesBtn.addEventListener("click", function () {
        // Aquí puedes añadir lógica para mostrar más detalles de la imagen seleccionada
        alert("Mostrando más detalles");
    });

    // Simulación de la adición automática de días conforme pasa el tiempo
    let dias = 0;
    setInterval(() => {
        dias++;
        const nuevoDia = document.createElement("div");
        nuevoDia.classList.add("dia");

        const tituloDia = document.createElement("h3");
        tituloDia.textContent = `Día ${dias} - ${new Date().toLocaleDateString()}`;
        nuevoDia.appendChild(tituloDia);

        const contenedorImagenes = document.createElement("div");
        contenedorImagenes.classList.add("imagenes");
        nuevoDia.appendChild(contenedorImagenes);

        diasImagenes.appendChild(nuevoDia);
    }, 5000); // Añade un nuevo día cada 5 segundos

    // Lógica para actualizar el control del tiempo (slider)
    controlTiempo.addEventListener("input", function () {
        // Aquí puedes añadir lógica para actualizar la visualización según el tiempo seleccionado
        console.log(`Tiempo seleccionado: ${controlTiempo.value}`);
    });
});
