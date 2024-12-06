
const { criptografaTexto, descriptografaTexto } = require('../../js/codigo_refatorado_para_testes');

describe("Testes de criptografia", () => {
    
    test("Criptografa uma mensagem simples", () => {
        // Verifica se a função de criptografia converte a palavra 'ola' para 'oberlai'
        expect(criptografaTexto("ola")).toBe("oberlai");
    });

    test("Criptografa texto com todas as vogais", () => {
        // Verifica se a função de criptografia converte as vogais corretamente em 'aeiou'
        expect(criptografaTexto("aeiou")).toBe("aienterimesoberufat");
    });

    test("Criptografa texto com letras e números", () => {
        // Verifica se a função criptografa corretamente texto com números
        expect(criptografaTexto("ola123")).toBe("oberla123");
    });

    test("Criptografa texto com vogais repetidas", () => {
        // Verifica se a função criptografa corretamente textos com vogais repetidas
        expect(criptografaTexto("banana")).toBe("bainaioanai");
    });

    test("Criptografa texto longo", () => {
        // Verifica se a função criptografa corretamente um texto mais longo
        const texto = "este é um teste para verificar como o sistema funciona com textos longos";
        const esperado = "enterstenter é ufamtentestenter painerai verimesrificaienter comoberober ober sistentermes funcioberna comober tentextoberber loberngoberberbos";
        expect(criptografaTexto(texto)).toBe(esperado);
    });

    test("Criptografa texto vazio", () => {
        // Verifica que a função criptografa um texto vazio corretamente (não altera nada)
        expect(criptografaTexto("")).toBe("");
    });
});

describe("Testes de descriptografia", () => {
    
    test("Descriptografa uma mensagem simples", () => {
        // Verifica se a função de descriptografia converte 'oberlai' de volta para 'ola'
        expect(descriptografaTexto("oberlai")).toBe("ola");
    });

    test("Descriptografa texto com todas as vogais criptografadas", () => {
        // Verifica se a função de descriptografia converte 'aienterimesoberufat' de volta para 'aeiou'
        expect(descriptografaTexto("aienterimesoberufat")).toBe("aeiou");
    });

    test("Descriptografa texto com letras e números", () => {
        // Verifica se a função de descriptografia retorna 'ola123' de 'oberla123'
        expect(descriptografaTexto("oberla123")).toBe("ola123");
    });

    test("Descriptografa texto com vogais repetidas", () => {
        // Verifica se a função de descriptografia converte 'bainaioanai' de volta para 'banana'
        expect(descriptografaTexto("bainaioanai")).toBe("banana");
    });

    test("Descriptografa texto longo", () => {
        // Verifica se a função de descriptografia converte um texto longo criptografado corretamente
        const texto = "enterstenter é ufamtentestenter painerai verimesrificaienter comoberober ober sistentermes funcioberna comober tentextoberber loberngoberberbos";
        const esperado = "este é um teste para verificar como o sistema funciona com textos longos";
        expect(descriptografaTexto(texto)).toBe(esperado);
    });

    test("Descriptografa texto vazio", () => {
        // Verifica que a função descriptografa um texto vazio corretamente (não altera nada)
        expect(descriptografaTexto("")).toBe("");
    });
});

describe("Testes de casos extremos e validação", () => {

    test("Texto sem vogais", () => {
        // Verifica que textos sem vogais permanecem inalterados durante a criptografia
        expect(criptografaTexto("bcdfghjklmnpqrstvwxyz")).toBe("bcdfghjklmnpqrstvwxyz");
        expect(descriptografaTexto("bcdfghjklmnpqrstvwxyz")).toBe("bcdfghjklmnpqrstvwxyz");
    });

    test("Descriptografa texto parcialmente criptografado", () => {
        // Verifica se a função de descriptografia consegue lidar com um texto parcialmente criptografado
        expect(descriptografaTexto("oberlaimes")).toBe("olai");
    });

});

describe("Testes de comportamento com entradas inválidas", () => {

    test("Criptografa texto com caracteres especiais permanece inalterado", () => {
        // Verifica que a criptografia não altera caracteres especiais
        expect(criptografaTexto("123 @#%")).toBe("123 @#%");
    });

    test("Descriptografa texto com caracteres especiais permanece inalterado", () => {
        // Verifica que a descriptografia não altera caracteres especiais
        expect(descriptografaTexto("123 @#%")).toBe("123 @#%");
    });

});


