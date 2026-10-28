const buscador = document.querySelector("#buscador-placa");
const filas = document.querySelectorAll("#tabla-placas tr");

if (buscador) {
    buscador.addEventListener("input", () => {
        const textoBusqueda = buscador.value.toLowerCase();

        filas.forEach((fila) => {
            const contenidoFila = fila.textContent.toLowerCase();
        
            // Comprobar si contenidoFila incluye textoBusqueda
            if (contenidoFila.includes(textoBusqueda)) {
                fila.style.display = ""; // Muestra la fila
            }
            else {
                fila.style.display = "none"; // Oculta la fila
            }    
        
        });
        
    });
}