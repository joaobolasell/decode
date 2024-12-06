function copiarTexto() {
    let textoCopiado = document.querySelector(".texto-criptografado p");
    var btnCopy = document.querySelector("#copiar");
    btnCopy.addEventListener("click", function () {
        navigator.clipboard.writeText(textoCopiado.innerText);
        alert("Texto copiado");
        location.reload();
    });
}

const cifrasParaCriptografar = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
};

const cifrasParaDescriptografar = {
    "enter": "e",
    "imes": "i",
    "ai": "a",
    "ober": "o",
    "ufat": "u"
};

function criptografaTexto(texto) {
    let textoConvertido = texto;
    Object.keys(cifrasParaCriptografar).forEach(function (letra) {
        textoConvertido = textoConvertido.replaceAll(letra, cifrasParaCriptografar[letra]);
    });
    return textoConvertido;
}

function descriptografaTexto(texto) {
    let textoParaConverter = texto;
    Object.keys(cifrasParaDescriptografar).forEach(function (letra) {
        textoParaConverter = textoParaConverter.replaceAll(letra, cifrasParaDescriptografar[letra]);
    });
    return textoParaConverter;
}

module.exports = { criptografaTexto, descriptografaTexto };
