let counter = 1;
let sedes = [

    sedeAlmagro = {
        nombre: 'Almagro',
        idSede: '04',
        nombreId: function () {

            return this.nombre + ' ' + this.idSede;
        },
        tipoSede: 'PLUS'
    },


    sedeParaguay = {
        nombre: 'Paraguay',
        idSede: '05',
        nombreId: function () {

            return this.nombre + ' ' + this.idSede;
        },
        tipoSede: 'PLUS'
    },

    sedeSaavedra = {
        nombre: 'Saavedra',
        idSede: '116',
        nombreId: function () {

            return this.nombre + ' ' + this.idSede;
        },
        tipoSede: 'PLUS'
    },
    sedeLibertador = {
        nombre: 'Libertador',
        idSede: '08',
        nombreId: function () {

            return this.nombre + ' ' + this.idSede;
        },
        tipoSede: 'TOTAL'
    },

    sedeTlkNuñez = {
        nombre: 'TLK NUÑEZ',
        idSede: '62',
        nombreId: function () {

            return this.nombre + ' ' + this.idSede;
        },
        tipoSede: 'TOTAL'
    },
    sedeTlkPilar = {
        nombre: 'TLK PILAR',
        idSede: '64',
        nombreId: function () {

            return this.nombre + ' ' + this.idSede;
        },
        tipoSede: 'TOTAL'
    }
];

//Se crea una función que contiene un ciclo que itera sobre un array de objetos, luego completa una tabla en sedes.html
async function tablaSedes() {

    $('#tablaSedes tbody > tr').remove();
    for (const sede of sedes) {

        await $("#tablaSedes").append(
            '<tr>'
            + '<td class="text-center">' + sede.idSede + '</td>'

            + '<td class="text-center">' + sede.nombre + '</td>'

            + '<td class="text-center">' + sede.tipoSede + '</td>'

            + '</tr>'


        );

    }


    $('#tablaSedes').fadeToggle("slow");
}

//Con este botón es que llamamos a la función tablaSedes y completamos la tabla.

$('#btnDesplegarSedes').click(function () {
    tablaSedes();

    if (counter == 1) {
        $('#btnDesplegarSedes').fadeIn("slow").text('Ocultar')
        counter--
    } else {
        $('#btnDesplegarSedes').fadeIn("slow").text('Conoce más')
        counter++
    }

})