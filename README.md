# Task Flow IA

Aplicativo acadêmico para organizar tarefas com persistência local em SQLite.

## Instalar e executar

Instale Node.js 24 ou superior. Não há dependências externas.

```sh
git clone https://github.com/Gabriel220704/Provamarcos.git
cd Provamarcos
npm start
```

Abra http://localhost:3000. Para parar, pressione Ctrl+C.

## Tecnologias e estrutura

- `server.js`: servidor HTTP em JavaScript.
- `public/`: interface HTML, CSS e JavaScript.
- `database/`: banco SQLite criado automaticamente e ignorado pelo Git.
- `tests/`: testes automatizados.
- `AGENTS.md`: reservado para preenchimento manual pelo autor.
- `PROMPTS.md`: estrutura para registrar os três prompts reais.

O projeto usa os módulos nativos do Node.js, incluindo `node:sqlite`.
