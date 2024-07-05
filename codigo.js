let textoSinEncriptar = '';
let textoEncriptado = '';
let valorPlaceholder = '';
const copiarContenido = '';
const caracterInvalido = /[^a-zA-Z0-9\s]/;


function containsUppercase(str) {
    return /[A-Z]/.test(str);
  }
  

  function containsInvalidChar(caracteres){
    return caracterInvalido.test(caracteres)

    // (caracterInvalido.test(caracteres))
  }


function encriptarTexto() {

    textoSinEncriptar = document.getElementById("textoAEncriptar").value;
    // valorPlaceholder = document.getElementById("textoAEncriptar").placeholder;
    

    if (textoSinEncriptar.length == '' ) {
        
        // console.log("SE EJECUTA LA VALIDACIÓN")
        
        document.getElementById("textoAEncriptar").placeholder = '¡No indicaste el texto, por favor colócalo!'
    //    textoSinEncriptar = ''
        return;
    }

    else {

        // if ()

        if (containsUppercase(textoSinEncriptar) == true || containsInvalidChar(textoSinEncriptar) == true) {
            document.getElementById("textoAEncriptar").value = ''
            document.getElementById("textoAEncriptar").placeholder = '¡Recuerda no poner mayúsculas ni caracteres especiales!'

            return;
        }

        else {

        
    document.getElementById("textoAEncriptar").placeholder = 'Ingrese el texto aquí'

    textoSinEncriptar = textoSinEncriptar.replaceAll("e","enter")
    textoSinEncriptar = textoSinEncriptar.replaceAll("i","imes")
    textoSinEncriptar = textoSinEncriptar.replaceAll("a","ai")
    textoSinEncriptar = textoSinEncriptar.replaceAll("o","ober")
    textoSinEncriptar = textoSinEncriptar.replaceAll("u","ufat")

    textoEncriptado = textoSinEncriptar;

 document.getElementById("contenidoEncriptado").innerHTML = textoEncriptado;

    // document.getElementById("textoAEncriptar").value = ''
//Oculta la imagen y letras del cuadro y muestra el texto encriptado
    document.getElementById("contenidoCaja").style.display = "none"
    document.getElementById("verContenidoEncriptado").style.display ="block"

    }
}

}

function desencriptarTexto() {

    if (textoSinEncriptar.length == '' ) {
        
        // console.log("SE EJECUTA LA VALIDACIÓN")
        
        document.getElementById("textoAEncriptar").placeholder = '¡No indicaste el texto, por favor colócalo!'
    //    textoSinEncriptar = ''
        return;
    }

    else {

    textoSinEncriptar = textoSinEncriptar.replaceAll("enter","e")
    textoSinEncriptar = textoSinEncriptar.replaceAll("imes","i")
    textoSinEncriptar = textoSinEncriptar.replaceAll("ai","a")
    textoSinEncriptar = textoSinEncriptar.replaceAll("ober","o")
    textoSinEncriptar = textoSinEncriptar.replaceAll("ufat","u")

    document.getElementById("contenidoEncriptado").innerHTML = textoSinEncriptar;
}
}

function copiarTextoEncriptado() {
    
    console.log("Se ve el evento onclick")

    navigator.clipboard.writeText(textoSinEncriptar)
    .then(() => {
        console.log('Contenido copiado al portapapeles');
        /* Resuelto - texto copiado al portapapeles con éxito */
      },() => {
        console.error('Error al copiar');
        /* Rechazado - fallo al copiar el texto al portapapeles */
      });

}