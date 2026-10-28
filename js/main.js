// Funcion para mostrar la fecha y hora actual en tiempo real en el menu
function actualizarReloj() {
    const elementoFecha = document.querySelector("#fecha-actual");
    if (!elementoFecha) return;

    const ahora = new Date();
    const opciones = {
        weekday: 'short', year: 'numeric', month: 'short', day: 'numeric',
        hour: '2-digit', minute: '2-digit' 
    };
    elementoFecha.textContent = ahora.toLocaleDateString('es-MX', opciones);
}

// Ejecutamos cada segundo (1000 milisegundo)
setInterval(actualizarReloj, 1000);
actualizarReloj();

// --- Calculadora rapida en la pagina de Inicio ---

const selectVehiculo = document.querySelector("#tipo-vehiculo");
const textoResultado = document.querySelector("#resultado-rapido");

if (selectVehiculo && textoResultado) {
    selectVehiculo.addEventListener("change", () =>{
        const costo = Number(selectVehiculo.value);

        //Actualizamos el texto en pantalla con formato de moneda
        textoResultado.textContent = "$" + costo.toLocaleString("es-MX") + ".00";
    });
}