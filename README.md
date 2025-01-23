# Calculadora de Juros Compostos (JavaScript)

Este projeto foi desenvolvido para demonstrar a aplicação de cálculos de juros compostos e testar a funcionalidade através de uma série de testes automatizados em JavaScript, utilizando a biblioteca **Jest**.

## 📝 Funcionalidades

A calculadora de juros compostos permite:

- Calcular o montante final após a aplicação de juros compostos.
- Determinar os juros acumulados sobre um capital inicial.
- Validar entradas para garantir que valores negativos não sejam aceitos.
- Considerar diferentes períodos de tempo e taxas de juros.

## 📊 Exemplos de Entrada e Saída

### Exemplo 1:
**Entrada:**
- Capital inicial: 1000
- Taxa de juros: 5% ao ano
- Tempo: 2 anos

**Saída:**
- Montante final: 1102.5
- Juros compostos acumulados: 102.5

### Exemplo 2:
**Entrada:**
- Capital inicial: 1000
- Taxa de juros: 0% ao ano
- Tempo: 0 anos

**Saída:**
- Montante final: 1000
- Juros compostos acumulados: 0

## 🛠️ Tecnologias Utilizadas

- **JavaScript** para o desenvolvimento da função de cálculo.
- **Jest** para a criação e execução dos testes automatizados.
- **Node.js** como ambiente de execução do código.

## 📖 Instruções

### Para rodar o projeto localmente, siga os seguintes passos:

1. **Clone este repositório**:

   ```bash
   git clone https://github.com/Matheusdias77/juros-compostos

2. **Instale as dependências necessárias**:

   ```bash
   npm install

3. **Para rodar os testes, use o comando**:

   ```bash
   npx jest
