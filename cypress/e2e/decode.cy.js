describe('Decodificador de Mensagens', () => {
    beforeEach(() => {
        // Acesse a página do projeto localmente. Substitua pela URL correta.
        cy.visit('http://127.0.0.1:5501/index.html'); 
    });

    it('Deve codificar uma mensagem válida', () => {
        // Digitar no campo principal
        cy.get('#texto-principal').type('exemplo');
        
        // Clicar no botão "Criptografar"
        cy.get('#criptografar').click();

        // Verificar o campo de retorno com o texto codificado
        cy.get('.texto-criptografado p').should('have.text', 'enterxemplober');
    });

    it('Deve decodificar uma mensagem válida', () => {
        // Digitar no campo principal
        cy.get('#texto-principal').type('enterxemplober');
        
        // Clicar no botão "Descriptografar"
        cy.get('#descriptografar').click();

        // Verificar o campo de retorno com o texto decodificado
        cy.get('.texto-criptografado p').should('have.text', 'exemplo');
    });

    it('Deve mostrar uma mensagem de erro para caracteres inválidos', () => {
        // Digitar texto inválido (com números ou caracteres especiais)
        cy.get('#texto-principal').type('Exemplo123!');
        
        // Clicar no botão "Criptografar"
        cy.get('#criptografar').click();

        // Verificar que o texto de retorno é a mensagem de erro
        cy.get('.texto-criptografado p').should('have.text', 'Apenas letras minúsculas e sem acento.');
    });

    it('Deve permitir copiar o texto criptografado', () => {
        // Digitar no campo principal
        cy.get('#texto-principal').type('exemplo');
        
        // Clicar no botão "Criptografar"
        cy.get('#criptografar').click();

        // Clicar no botão "Copiar"
        cy.get('#copiar').click();

        // Verificar o alerta de confirmação
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Texto copiado');
        });

        // Simular leitura da área de transferência (Clipboard)
        cy.window().then((win) => {
            win.navigator.clipboard.readText().then((clipboardText) => {
                expect(clipboardText).to.equal('enterxemplober');
            });
        });
    });
});
