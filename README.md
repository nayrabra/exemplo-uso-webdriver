# Automação de Testes com Selenium WebDriver

Este projeto utiliza **Selenium WebDriver**, **Mocha** e **Node.js Assert** para automatizar testes na aplicação web Quick Notes.

O fluxo automatizado realiza:

* Login na aplicação
* Criação de uma nova nota
* Adição de tags
* Validação das informações criadas

---

## Tecnologias Utilizadas

* Node.js
* Selenium WebDriver
* Mocha
* JavaScript
* Node Assert

---

## Estrutura do Projeto

```bash
├── test
│   └── login.test.js
├── .gitignore
├── package-lock.json
├── package.json
```

---

## Funcionalidades Testadas

### Login

* Login com credenciais válidas

### Criação de Nota

* Criar uma nova anotação
* Adicionar tag à anotação
* Validar conteúdo da nota criada
* Validar tag criada

---

## Fluxo Automatizado

O teste executa os seguintes passos:

1. Acessa o site Quick Notes
2. Realiza login utilizando usuário e senha válidos
3. Valida a mensagem de saudação do usuário
4. Cria uma nova nota
5. Adiciona uma tag
6. Salva a anotação
7. Valida se a nota e a tag foram criadas corretamente

---

## Dependências e Configuração

> É necessário ter o Node.js instalado.

Inicialize o projeto:

```bash
npm init -y
```

Altere a propriedade `"type"` no arquivo `package.json`:

```json
"type": "module"
```

Instale as dependências:

```bash
npm install selenium-webdriver mocha
```

---

## Como Executar os Testes

Execute o teste com o comando:

```bash
npx mocha --timeout 20000
```

---

## Exemplo do Cenário Automatizado

```javascript
await driver.findElement(By.id("login-email")).sendKeys("nayra@test.com");

await driver
  .findElement(By.id("login-password"))
  .sendKeys("12345678", Key.RETURN);
```

---

## Sobre os Testes

Os testes foram desenvolvidos utilizando:

* `describe()` para agrupar suítes de testes
* `it()` para definir casos de teste
* `assert.equal()` para validação dos resultados
* Selenium WebDriver para automação do navegador
