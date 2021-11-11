let nombre=document.getElementById("fname");
let apellido=document.getElementById("lname");

nombre.onchange = () => {(sessionStorage.setItem(nombreSocio,'nombre'))};
apellido.onchange = () => {console.log("valor2")};
