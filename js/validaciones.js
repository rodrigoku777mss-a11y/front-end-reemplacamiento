const formTramite = document.querySelector("#form-tramite");

if (formTramite) {
    formTramite.addEventListener("submit", (event) =>{
        event.preventDefault();

        const propietario = document.querySelector("#propietario");
        const placa = document.querySelector("#placa");
        const serie = document.querySelector("#serie");
        const correo = document.querySelector("#correo");

        // 1. Validar que ningun campo este vacio
        if ( propietario.value.trim() === "" || placa.value.trim() === "" || serie.value.trim() === "" || correo.value.trim() === "" ) {
            Swal.fire({ icon: "warning", title: "Campos Incompletos", text: "Por favor, llena todos los datos." });
            return;
        }

        // 2. Validacion de maximo 7 caracteres
        if (placa.value.length > 7) {
            Swal.fire({ icon: "error", title: "Placa Inválida", text: "La placa no puede tener más de 7 caracteres" });
            return;
        }

        // 3. Validacion del correo (@)
        if (correo.value.includes("@") === false) {
            Swal.fire({ icon: "error", title: "Correo Inválido", text: "Ingrese un correo electronico existente" });
            return;
        }

        // 4. Validacion del numero de serie contenga exactamente 10 caracteres
        if (serie.value.length !== 10) {
            Swal.fire({ icon: "error", title: "Número de Serie Inválido", text: "El número de serie debe contener exactamente 10 caracteres" });
            return;
        }

        // 5. Si todo está bien, mostramos alerta de éxito y limpiamos el formulario
        Swal.fire({ 
            icon: "success",
            title: "Cita Agendada con Éxito",
            text: "Tus datos fueron validados correctamente."
         });
         formTramite.reset();
    });
}