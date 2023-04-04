const texto = document.querySelector("[data-text]");
const encriptar = document.querySelector("[data-encriptar]");
const desencriptar = document.querySelector("[data-desencriptar]");



//desencriptar
desencriptar.addEventListener("click", () => {
  // Trim para eliminar espaciones innecesarioes en blanco
  const frase = texto.value.toLowerCase().trim().split(" ");

  let fraseEncriptada = "";
  for (let palabra of frase) {
    if(palabra.includes("ai"))palabra= palabra.replace(/ai/g, "a");
    if(palabra.includes("enter")) palabra= palabra.replace(/enter/g, "e");
    if(palabra.includes("imes")) palabra= palabra.replace(/imes/g, "i");
    if(palabra.includes("ober")) palabra= palabra.replace(/ober/g, "o");
    if(palabra.includes("ufat")) palabra= palabra.replace(/ufat/g, "u");
    fraseEncriptada+= " "+palabra;
  };
  const right = document.querySelector("[data-right]");
  if (fraseEncriptada != "" && fraseEncriptada!=" ") {
    right.innerHTML = `<textarea readonly name="" id="" class="input_1">${fraseEncriptada}</textarea>`;
    right.innerHTML += `<span class="btn__copiar" data-copiar>Copiar</span>`;
    copiar(fraseEncriptada);
  } else {
    right.innerHTML = `<img src="img/buscador.png" alt="" />
    <p class="b">Ningun mensaje fue encontrado</p>
    <p class="c">Ingrese el texto que desees encriptar o desencriptar</p>`;
  }
  //copiar

});




//encriptar
encriptar.addEventListener("click", () => {
  const frase = texto.value.toLowerCase().split("");
  let fraseEncriptada = "";
  for (let letra of frase) {
    switch (letra) {
      case "a":
        letra = "ai";
        break;
      case "e":
        letra = "enter";
        break;
      case "i":
        letra = "imes";
        break;
      case "o":
        letra = "ober";
        break;
      case "u":
        letra = "ufat";
        break;
    }
    fraseEncriptada += letra;
  }
  const right = document.querySelector("[data-right]");
  if (fraseEncriptada != "") {
    right.innerHTML = `<textarea readonly name="" id="" class="input_1" data-copy >${fraseEncriptada}</textarea>`;
    right.innerHTML += `<span class="btn__copiar" data-copiar>Copiar</span>`;
    copiar(fraseEncriptada);
  } else {
    right.innerHTML = `<img src="img/buscador.png" alt="" />
    <p class="b">Ningun mensaje fue encontrado</p>
    <p class="c">Ingrese el texto que desees encriptar o desencriptar</p>`;
  }

});


function copiar (fraseEncriptada){
  const copiar = document.querySelector("[data-copiar]");
  copiar.addEventListener("click",()=>{
    navigator.clipboard.writeText(fraseEncriptada);
  });
}
