const cxSelecao = document.querySelector(".op");
const btnRadioButton = document.querySelector(".radio-butto");
const statusCodificar = document.querySelector("#codificar");
const statusDecodificar = document.querySelector("#decodificar");
const btn = document.querySelector("button");

function base64(){
    let textoEntrada = document.querySelector("#entrada").value;
    
    if (statusCodificar.checked) {
        let msmCodificada = btoa(textoEntrada);
        console.log(msmCodificada);
        document.querySelector("[id='saida']").value = msmCodificada;
    } else if (statusDecodificar.checked) {
        let msmDecodificada = atob(textoEntrada);
        console.log(msmDecodificada);
        document.querySelector("[id='saida']").value = msmDecodificada;
    }
}




//ação do botão
btn.addEventListener("click", function (event) {
    event.preventDefault();

    if(cxSelecao.value === "selecionar"){
        alert('Escolha uma opção de criptografia na caixa de seleção')
    }else if (cxSelecao.value === "base64") {
      base64();
    }
});