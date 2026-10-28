const buscador = document.querySelector("#buscador-placa");
const filas = document.querySelectorAll("#tabla-placas tr");

if (buscador) {
    buscador.addEventListener("input", () => {
        const textoBusqueda = buscador.value.toLowerCase();

        filas.forEach((fila) => {
            const contenidoFila = fila.textContent.toLowerCase();
        
            // Comprobar si contenidoFila incluye textoBusqueda
            
        
        });
        
    });
}