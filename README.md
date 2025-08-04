# Calculadora de Orçamento Pessoal

Este projeto é uma calculadora simples de orçamento pessoal desenvolvida com ReactJS utilizando Vite, com foco em boas práticas de componentização, gerenciamento de estado e renderização condicional. O objetivo é fornecer uma interface clara e reativa para que o usuário possa visualizar rapidamente seu saldo com base em receitas e despesas informadas.

## 🔧 Tecnologias Utilizadas

- ReactJS (via Vite)
- JavaScript (sem TypeScript)
- HTML5
- CSS3 com CSS Modules

---

## 📋 Regras de Negócio

A aplicação segue uma lógica simples e direta de controle financeiro pessoal:

- O usuário insere dois valores:
  - Receita (valor total que possui ou irá receber)
  - Despesa (valor total que deve ou pretende gastar)

- Ao submeter o formulário, o sistema realiza o cálculo do saldo:
  - Saldo = Receita - Despesa

- Com base no saldo calculado, é exibida uma mensagem de status:
  - Saldo positivo: “Parabéns! Seu saldo está positivo.”
  - Saldo negativo: “Atenção! Seu saldo está negativo.”
  - Saldo igual a zero: “Seu saldo está zerado.”
