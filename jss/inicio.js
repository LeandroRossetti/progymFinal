const fnUserName = (htmlElement) => {
    let dataInStorage = sessionStorage.getItem("user")
    dataInStorage?
    (htmlElement.innerHTML=`Bienvenido ${dataInStorage}`,
   
    $('#textUsuario').fadeIn("slow")
    )
    :
    (titulo.innerHTML='')
}
