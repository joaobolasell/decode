const { criptografaTexto, descriptografaTexto } = require('../js/codigo_refatorado_para_testes');

describe("Testes de criptografia e descriptografia", () => {
    test("Criptografa uma mensagem simples", () => {
        expect(criptografaTexto("ola")).toBe("oberlai");
    });

    test("Descriptografa uma mensagem simples", () => {
        expect(descriptografaTexto("oberlai")).toBe("ola");
    });

    test("Criptografa texto com todas as vogais", () => {
        expect(criptografaTexto("aeiou")).toBe("aienterimesoberufat");
    });

    test("Descriptografa texto com todas as vogais criptografadas", () => {
        expect(descriptografaTexto("aienterimesoberufat")).toBe("aeiou");
    });

    test("Retorna o mesmo texto se não houver nada para criptografar", () => {
        expect(criptografaTexto("xyz")).toBe("xyz");
    });

    test("Retorna o mesmo texto se não houver nada para descriptografar", () => {
        expect(descriptografaTexto("xyz")).toBe("xyz");
    });
});
