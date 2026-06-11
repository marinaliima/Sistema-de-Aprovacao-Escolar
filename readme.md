# Sistema de Aprovação Escolar

## Descrição

Este projeto foi desenvolvido em JavaScript com o objetivo de praticar conceitos fundamentais de programação, incluindo:

* Vetores (Arrays)
* Matrizes (Arrays Bidimensionais)
* Constantes
* Variáveis
* Operadores Aritméticos
* Operadores Lógicos
* Estruturas Condicionais
* Laços de Repetição
* Percurso de Matrizes

O sistema realiza a leitura dos dados dos alunos, calcula suas médias, verifica a situação de cada um e identifica o aluno com o melhor desempenho da turma.

---

## Estrutura da Matriz

Cada linha da matriz representa um aluno.

```javascript
[
    ['Jão Wi-Fi', 85, 95, 80],
    ['Ana PDF', 40, 50, 60],
    ['Carlos Bugado', 100, 90, 98],
    ['Bia Ctrl+C', 20, 30, 40],
    ['Pedrinho GPT', 10, 55, 35]
]
```

### Significado das Colunas

| Índice | Informação |
| ------ | ---------- |
| 0      | Nome       |
| 1      | Nota 1     |
| 2      | Nota 2     |
| 3      | Frequência |

### Exemplos

```javascript
alunos[0][0] // Jão Wi-Fi
alunos[0][1] // 85
alunos[0][2] // 95
alunos[0][3] // 80
```

---

## Regras de Aprovação

### Aprovado

* Média maior ou igual a 70 pontos
* Frequência maior ou igual a 75%

### Recuperação

* Média maior ou igual a 50 pontos
* Frequência maior ou igual a 75%

### Reprovado

* Média inferior a 50 pontos
* Ou frequência inferior a 75%

---

## Aluno Destaque da Turma

Após gerar o relatório de aprovação, o sistema percorre toda a matriz para identificar o aluno com o melhor desempenho.

Durante esse processo:

1. A média de cada aluno é calculada.
2. A média atual é comparada com a maior média encontrada.
3. Caso seja maior, os dados do aluno destaque são atualizados.
4. Ao final do percurso, é exibido o aluno com a maior média da turma.

### Exemplo de Saída

```text
=== ALUNO DESTAQUE DA TURMA ===

👑 O melhor desempenho foi de Pedrinho GPT com média 95.
```

---

## Conceitos Trabalhados

### Constantes

```javascript
const MEDIA_APROVACAO = 70;
const FREQUENCIA_MINIMA = 75;
```

### Matrizes

```javascript
let alunos = [
    ['Jão Wi-Fi', 85, 95, 80]
];
```

### Laço de Repetição

```javascript
for (let indice = 0; indice < alunos.length; indice++)
```

### Condicional Encadeada

```javascript
if (...) {

}
else if (...) {

}
else {

}
```

### Condicional Simples

```javascript
if (media === 100) {

}
```

### Operador Lógico E

```javascript
&&
```

---

## Como Executar

### Pré-requisitos

* Node.js instalado

### Executando o Projeto

1. Salve o código em um arquivo chamado:

```text
index.js
```

2. Abra o terminal na pasta do projeto.

3. Execute o comando:

```bash
node index.js
```
# Git - Fluxo Básico

```bash
# Configuração global (apenas uma vez no computador)
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"

# Inicializar repositório
git init

# Alterar nome da branch padrão para main
git branch -M main

# Adicionar arquivos
git add .

# Criar commit
git commit -m "mensagem do commit"

# Conectar ao repositório remoto
git remote add origin URL_DO_REPOSITORIO

# Enviar para o GitHub
git push -u origin main
```

## Significado dos principais tipos de commit

- **feat**: adiciona uma nova funcionalidade
- **fix**: corrige um erro ou problema
- **refactor**: melhora ou reorganiza o código sem alterar seu funcionamento
- **docs**: altera a documentação
- **style**: ajusta formatação, indentação ou estilo do código
- **test**: cria ou modifica testes
- **chore**: tarefas de manutenção, configuração ou dependências

