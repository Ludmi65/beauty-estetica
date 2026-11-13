// SELECCIONAR LOS ELEMENTOS DEL HTML

const servicios = document.querySelectorAll(".servicio");

const modal = document.getElementById("modal-servicio");
const modalImagen = document.getElementById("modal-imagen");
const modalTitulo = document.getElementById("modal-titulo");
const modalDescripcion = document.getElementById("modal-descripcion");
const botonCerrar = document.getElementById("cerrar-modal");


if (modal && botonCerrar) {

    // ABRIR LA VENTANA AL HACER CLIC EN UNA IMAGEN

    servicios.forEach(function(servicio) {

        servicio.addEventListener("click", function() {

            const imagen = servicio.querySelector("img");

            const titulo = servicio.getAttribute("data-titulo");
            const descripcion = servicio.getAttribute("data-descripcion");

            modalImagen.src = imagen.src;
            modalImagen.alt = imagen.alt;
            modalTitulo.textContent = titulo;
            modalDescripcion.textContent = descripcion;

            modal.style.display = "flex";

        });

    });


    // CERRAR LA VENTANA CON LA X

    botonCerrar.addEventListener("click", function() {
        modal.style.display = "none";
    });


    // CERRAR AL HACER CLIC FUERA DE LA TARJETA

    modal.addEventListener("click", function(evento) {

        if (evento.target === modal) {
            modal.style.display = "none";
        }

    });

}



// FORMULARIO DE CONTACTO

const formularioContacto = document.querySelector(".formulario-contacto");

if (formularioContacto) {

    const mensajeFormulario = document.getElementById("mensaje-formulario");

    formularioContacto.addEventListener("submit", function(evento) {

        evento.preventDefault();

        if (!formularioContacto.checkValidity()) {
            formularioContacto.reportValidity();
            return;
        }

       mensajeFormulario.textContent =
    "¡Gracias por contactarnos! Tu mensaje fue registrado correctamente.";
        formularioContacto.reset();

    });

}