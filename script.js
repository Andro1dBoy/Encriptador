const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar(){
    if (textArea.value.trim() === "") {
      alert("Ingresa el texto a encriptar");
    } else if (verificarTexto(textArea.value)) {
      const textoEncriptado = encriptar(textArea.value);
      mensaje.value = textoEncriptado
      textArea.value = "";
      mensaje.style.backgroundImage = "none";
    }
}
   
function btnDesencriptar(){
    if (textArea.value.trim() === "") {
      alert("Ingresa el texto a desencriptar");
    } else if (verificarTexto(textArea.value)) {
      const textoDesencriptado = desencriptar(textArea.value);
      mensaje.value = textoDesencriptado
      textArea.value = "";
    }
}
   

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada; 
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada; 
}

function verificarTexto(texto) {
    const regex = /^[a-z\s]+$/;
    if (regex.test(texto)) {
      return true;
    } else {
      alert("El texto ingresado debe contener solo letras minúsculas y espacios sin caracteres especiales ni acentos");
      return false;
    }
}

const copiarBtn = document.querySelector('.btn-copiar');

copiarBtn.addEventListener('click', () => {
  mensaje.select();
  document.execCommand('copy');
  mensaje.value = '';
});