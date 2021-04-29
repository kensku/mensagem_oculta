//funcao que checa se o botao radio esta checado
function estaChecada() {
    let radioButton = document.querySelectorAll('div.radios input')
    let codificacaoButton = document.getElementById("codificacaoMensagem")
    let base64 = document.getElementById("base64");
    let cesar = document.getElementById("cesar");

    radioButton[0].addEventListener("change", function() {
        if(radioButton[0].checked && base64.selected) {
            codificacaoButton.textContent = "Codificar Mensagem"
            codificacaoButton.addEventListener("click", function(event) {
                event.preventDefault()
                codificar();
            })
        }else if(radioButton[0].checked && cesar.selected){
            codificacaoButton.textContent = "Codificar Mensagem"
            codificacaoButton.addEventListener("click", function (event) {
                event.preventDefault()
                cifraCesar();
            })
        }
    })
    radioButton[1].addEventListener("change", function() {
        if (radioButton[1].checked && base64.selected) {
            codificacaoButton.textContent = "Decodificar Mensagem"
            codificacaoButton.addEventListener("click", function(event) {
                event.preventDefault()
                decodificar()
            })
        }else if(radioButton[1].checked && cesar.selected){
            codificacaoButton.textContent = "Decodificar Mensagem"
            codificacaoButton.addEventListener("click", function(event){
                event.preventDefault();
                decodificarCifraCesar();
            })
        }
    })
}
estaChecada()  

//funcao que mostra caixa de incremento cifra de cesar
function showIncrementoCesar() {
    let optionCesar = document.getElementById("cesar");

    lista.addEventListener("change", function() {
        if(optionCesar.selected){
            document.getElementById("incremento").style.display='inline'
        } else {
            document.getElementById("incremento").style.display='none'
        }
    })
}
showIncrementoCesar()

//funcao para codificar para base de cesar
function cifraCesar() {
    var textDigitado = document.getElementById("textoDigitado").value;
    var listaTexto = textDigitado.split('');
    var numTroca = parseInt(document.getElementById("incremento").value);
    var listaCifraDeCesar = [];
    for (let i=0; i<textDigitado.length; i++){
        var decimalAsII = listaTexto[i].charCodeAt() + numTroca;
         listaCifraDeCesar.push(String.fromCharCode(decimalAsII))
    }
    var baseCodificada = listaCifraDeCesar.join('');
    document.getElementById("resultado").textContent = baseCodificada
}

//funcao para codificar para base de cesar
function decodificarCifraCesar() {
    var textDigitado = document.getElementById("textoDigitado").value;
    var listaTexto = textDigitado.split('');
    var numTroca = parseInt(document.getElementById("incremento").value)
    var listaCifraDeCesar = [];
    for(let i=0; i<listaTexto.length; i++){
        var primeiraLetra = listaTexto[i].charCodeAt() - numTroca;
        listaCifraDeCesar.push(String.fromCharCode(primeiraLetra))
    }
    var cesarDecodificada = listaCifraDeCesar.join('');
    document.getElementById("resultado").textContent = cesarDecodificada
}
 

//funcao que codifica a mensagem digitada para base64
function codificar() {
    var text = document.getElementById("textoDigitado").value;
    var caracteresSeparados = text.split('');
    var base64Codifica = [];
    for(let i=0; i < caracteresSeparados.length; i++){
        if(caracteresSeparados[i] !== caracteresSeparados[i].toUpperCase()){
            base64Codifica.push(caracteresSeparados[i].charCodeAt() - 71)
        } else{
            base64Codifica.push(caracteresSeparados[i].charCodeAt() - 65)
        }
    }
    var strCodificada = base64Codifica.join('')
    document.getElementById("resultado").textContent = strCodificada    
}

//funcao que decodifica da base 64 a mensagem digitada
function decodificar () {
    var text = document.getElementById("textoDigitado").value;
    var numerosSeparados = text.split('');
    var decodificaBase64 = [];
    for(let i=0; i<numerosSeparados.length; i = i+2){
        var primeiraLetra = numerosSeparados[i].concat(numerosSeparados[i+1])
        var numero = parseInt(primeiraLetra)
        if(numero>=26){
            decodificaBase64.push(String.fromCharCode(numero+71)) 
        }else if(numero>=0){
            decodificaBase64.push(String.fromCharCode(numero+65))
        }
    }
    var numDecodificados = decodificaBase64.join('')
    document.getElementById("resultado").textContent = numDecodificados 
}