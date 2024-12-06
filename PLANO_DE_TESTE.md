# Plano de Teste

## 1. Ferramentas
- **Visual Studio Code**: Editor de Código-Fonte.
- **SonarQube**: Ferramenta para análise estática no VS Code.
- **ESLint**: Ferramenta de análise estática para JavaScript, utilizada no VS Code e no ambiente de integração, Github Actions.
- **Jest**: Framework para testes unitários, utilizada no VS Code e no ambiente de integração, Github Actions.
- **Cypress**: Ferramenta para testes de Sistema, utilizada no VS Code e no ambiente de integração, Github Actions.
- **Github Actions**: Ferramenta para integração contínua.
  
## 2. Procedimentos
- **Commit**: Toda alteração no código deve ser versionada com menasgens claras e descritivas.
    Exemplo: ' git commit -m "Adiciona funcionalidade X, y e W" '.
- **Pull Request**: Criar pull request para adicionar novas funcionalidades.

### 2.1 Execução dos Testes no VS Code
- **Verificação Estática (ESLint)**: Validar o código com o comando ' **npm run lint** '.
- **Testes Unitários (Jest)**: Executar os testes com ' **npm run test** '.
- **Testes de Sistema (Cypress)**: Executar os testes com ' **npm run cypress** '.
  
### 2.2 **Integração Contínua (Github Actions)**
- Após cada commit/push, o Github Actions rodará todos os testes configurados em **.github/workflows/ci.yml** 
- **O desenvolvedor deve acessar os logs de build no GitHub Actions para verificar o resultado dos testes.**
- **Os resultados dos testes serão exibidos separadamente no log, indicando quais testes passaram ou falharam.**

## 3. Requisitos / Restrições / Configurações

### 3.1 Requisitos
- O sistema deve criptografar e descriptografar corretamente textos inseridos, respeitando as regras de letras minúsculas e sem acentos.
- O botão de copiar deve funcionar corretamente, copiando o texto criptografado/descriptografado para a área de transferência.

### 3.2 Restrições
- O sistema funciona apenas com letras minúsculas.
- Não deve aceitar caracteres especiais como acentos, vírgulas, etc.

### 3.3 Configurações
- **Node.js**: Versão mínima 18.x para executar os testes. 
- **ESLint**: Configurado para verificar a conformidade do código. **eslint.config.mjs**
- **Jest**: Configurado para executar testes unitários. **..\__tests__\unit\codigo_refatorado_para_testes.test.js**
- **Cypress**: Configurado para executar testes de sistema. **..\cypress\e2e\decode.cy.js**
- **Github Actions**: Configurado para executar testes e verificações estáticas automaticamente. **.github/workflows/ci.yml**
- teste

## 4. Matriz de Funcionalidades x Testes
| Funcionalidade                          | Teste Unitário | Teste de Sistema |
|-----------------------------------------|----------------|------------------|
| Criptografar texto                      | Sim            | Sim              |
| Descriptografar texto                   | Sim            | Sim              |
| Verificar texto com caracteres especiais| Sim            | Sim              |
| Copiar texto criptografado/descriptografado | Não            | Sim              |






