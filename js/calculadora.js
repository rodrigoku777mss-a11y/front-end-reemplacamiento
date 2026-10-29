document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formulario-calculadora');
    const btnLimpiar = document.getElementById('btn-limpiar');
    const contenedorResultado = document.getElementById('resultado-cotizacion');

    // Elementos del resumen desglosado
    const resBase = document.getElementById('res-base');
    const resAdeudos = document.getElementById('res-adeudos');
    const resAdicionales = document.getElementById('res-adicionales');
    const resDescuento = document.getElementById('res-descuento');
    const resTotal = document.getElementById('res-total');

    formulario.addEventListener('submit', (event) => {
        event.preventDefault();

        // 1. Obtener valor base del vehículo
        const selectVehiculo = document.getElementById('tipo-vehiculo');
        const costoBase = parseFloat(selectVehiculo.value);

        if (isNaN(costoBase)) {
            Swal.fire({
                icon: 'warning',
                title: 'Campo requerido',
                text: 'Por favor selecciona un tipo de vehículo.',
                confirmButtonColor: '#691C32'
            });
            return;
        }

        // 2. Obtener adeudos
        const selectAdeudos = document.getElementById('anos-adeudo');
        const costoAdeudos = parseFloat(selectAdeudos.value) || 0;

        // 3. Obtener adicionales (Checkboxes)
        const checkPropietario = document.getElementById('check-propietario');
        const checkExtravio = document.getElementById('check-extravio');

        let costoAdicionales = 0;
        if (checkPropietario.checked) costoAdicionales += parseFloat(checkPropietario.value);
        if (checkExtravio.checked) costoAdicionales += parseFloat(checkExtravio.value);

        // 4. Obtener porcentaje de descuento (Radio buttons)
        const radioDescuento = document.querySelector('input[name="descuento"]:checked');
        const porcentajeDescuento = parseFloat(radioDescuento.value) || 0;

        // Cálculos
        const subtotal = costoBase + costoAdeudos + costoAdicionales;
        const montoDescuento = subtotal * porcentajeDescuento;
        const totalFinal = subtotal - montoDescuento;

        // Formatear montos a moneda mexicana ($)
        const formatoMoneda = (val) => `$${val.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} MXN`;

        // Mostrar en la tarjeta desglosada
        resBase.textContent = formatoMoneda(costoBase);
        resAdeudos.textContent = formatoMoneda(costoAdeudos);
        resAdicionales.textContent = formatoMoneda(costoAdicionales);
        resDescuento.textContent = `-${formatoMoneda(montoDescuento)}`;
        resTotal.textContent = formatoMoneda(totalFinal);

        // Mostrar contenedor de resultado
        contenedorResultado.classList.remove('d-none');

        // Disparar mensaje de SweetAlert2
        Swal.fire({
            icon: 'success',
            title: 'Cálculo realizado',
            html: `<p class="mb-1">El costo estimado de tu reemplacamiento es:</p>
                   <h3 class="fw-bold text-danger mb-0">${formatoMoneda(totalFinal)}</h3>`,
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#691C32'
        });
    });

    // Botón Limpiar
    btnLimpiar.addEventListener('click', () => {
        formulario.reset();
        contenedorResultado.classList.add('d-none');
        
        Swal.fire({
            icon: 'info',
            title: 'Formulario limpiado',
            timer: 1500,
            showConfirmButton: false
        });
    });
});