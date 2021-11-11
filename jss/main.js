const titulo=document.getElementById("textUsuario");

const nombreUsuario = async () => {
    const { value } = await Swal.fire({
        title: 'Bienvenido/a, escribi tu nombre!',
        input: 'text'
    })
    if (value) {

        guardar('user', value)
        fnUserName(titulo);

    }
    else {
        console.log('No se encontro valor para retornar')
    }
}

let nombreDeUsuario = sessionStorage.getItem('user');

if (!nombreDeUsuario) {
    nombreUsuario();
}

fnUserName(titulo);
