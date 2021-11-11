$('#leerSocio').click(function (e) {
    e.preventDefault();
    $.get("empleados.json", function (data) {
        console.log(data.nombre);
        $('#datosSocio').html(`
            Nombre: ${data.nombre}<br>

            Apellido: ${data.apellido}<br>

            Nro.Socio: ${data.socioId}<br>

            Sede: ${data.sede}
            
            `

        );
    });

});
