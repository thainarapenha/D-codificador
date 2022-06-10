const cxSelecao = document.querySelector(".op");
const verChave = document.querySelector(".chave");
const btnRadioButton = document.querySelector(".radio-butto");
const statusCodificar = document.querySelector("#codificar");
const statusDecodificar = document.querySelector("#decodificar");
const btn = document.querySelector("button");

//função de criptografia de base 64
function base64(){
    let textoEntrada = document.querySelector("#entrada").value;
    
    if(statusCodificar.checked){
        let msmCodificada = btoa(textoEntrada);
        console.log(msmCodificada);
        document.querySelector("[id='saida']").value = msmCodificada;
    }else if(statusDecodificar.checked){
        let msmDecodificada = atob(textoEntrada);
        console.log(msmDecodificada);
        document.querySelector("[id='saida']").value = msmDecodificada;
    }
}

//função de criptografia com base na cifra de César
function cifraCesar(){
    let msgCifra = document.querySelector("#entrada").value.toUpperCase();
    let chave = parseInt(document.querySelector("#rangenumber").value);
    let resultado = '';

    console.log(msgCifra)

    if(statusCodificar.checked){
        for(let i = 0; i < msgCifra.length; i++){
            if(msgCifra[i] === msgCifra[i]){
                resultado = ((msgCifra.charCodeAt(i) + chave - 65) % 26 + 65)
            }else{
                resultado = ((msgCifra.charCodeAt(i) + chave - 97) % 26 + 97)
            }
        }
        document.querySelector("[id='saida']").value = resultado;
    }
}

//altera a visibilidade da escolha de chave para a cifra de César
cxSelecao.addEventListener("click", function(){
    if(cxSelecao.value === "cifraCesar"){
        verChave.style.display = "block";
    }else{
        verChave.style.display = "none";
    }
});

//ação do botão
btn.addEventListener("click", function(event){
    event.preventDefault();

    if(cxSelecao.value === "selecionar"){
        alert('Escolha uma opção de criptografia na caixa de seleção')
    }else if (cxSelecao.value === "base64"){
        base64();
    }else if(cxSelecao.value === "cifraCesar"){
        cifraCesar();
    }
});