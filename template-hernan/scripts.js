document.addEventListener("DOMContentLoaded", function () {
    const diasBtn = document.getElementById("dias");
    const eventosBtn = document.getElementById("eventos");
    const modal = document.getElementById("modal");
    const cerrarModal = document.getElementById("cerrarModal");
    const tituloModal = document.getElementById("tituloModal");
    const imagenesModal = document.getElementById("imagenesModal");

    let diasHistorial = [
        {
            src: "https://pbs.twimg.com/media/GUAN4KZXwAEjCLo?format=jpg&name=4096x4096",
            fecha: "10 de Agosto, 2024"
        },
        {
            src: "https://pbs.twimg.com/media/GUAN4KZXwAEjCLo?format=jpg&name=4096x4096",
            fecha: "11 de Agosto, 2024"
        }
    ];

    let eventosHistorial = [
        {
            src: "https://pbs.twimg.com/media/GUAN4KZXwAEjCLo?format=jpg&name=4096x4096",
            fecha: "12 de Agosto, 2024"
        },
        {
            src: "https://pbs.twimg.com/media/GUAN4KZXwAEjCLo?format=jpg&name=4096x4096",
            fecha: "Evento: 13 de Agosto, 2024"
        }
    ];

    function mostrarModal(titulo, imagenesConFechas) {
        tituloModal.textContent = titulo;
        imagenesModal.innerHTML = '';
        imagenesConFechas.forEach(imgData => {
            const imgContainer = document.createElement("div");

            const img = document.createElement("img");
            img.src = imgData.src;
            imgContainer.appendChild(img);

            const fecha = document.createElement("p");
            fecha.textContent = imgData.fecha;
            imgContainer.appendChild(fecha);

            imagenesModal.appendChild(imgContainer);
        });
        modal.style.display = "block";
    }

    diasBtn.addEventListener("click", function () {
        mostrarModal("MUESTREO HISTORIOGRAFICO DIARIO", diasHistorial);
    });

    eventosBtn.addEventListener("click", function () {
        mostrarModal("MUESTREO HISTORIOGRAFICO POR EVENTO OCURRIDOS", eventosHistorial);
    });

    cerrarModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
