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

Se a porta 3000 estiver ocupada, escolha outra no PowerShell:

```powershell
$env:PORT = '3001'
npm start
```

Nesse caso, abra http://localhost:3001.

## Tecnologias e estrutura

- `server.js`: servidor HTTP em JavaScript.
- `public/`: interface HTML, CSS e JavaScript.
- `database/`: banco SQLite criado automaticamente e ignorado pelo Git.
- `tests/`: testes automatizados.
- `AGENTS.md`: reservado para preenchimento manual pelo autor.
- `PROMPTS.md`: estrutura para registrar os três prompts reais.

O projeto usa os módulos nativos do Node.js, incluindo `node:sqlite`.

## Funcionalidades e uso

Clique em **Nova tarefa**, preencha o título obrigatório, a descrição opcional e a prioridade (Baixa, Média ou Alta). A tarefa começa como Pendente. Use **Editar** para alterar seus dados, **Concluir** para finalizar e **Reabrir** para voltar a Pendente. Os filtros **Todas**, **Pendentes** e **Concluídas** atualizam a lista imediatamente.

O servidor valida título, prioridade e status e retorna mensagens para dados inválidos ou tarefas inexistentes. O banco mantém as tarefas após recarregar a página ou reiniciar o servidor. IDs e datas de criação/atualização são gerados automaticamente. A interface se adapta a telas menores.

## Testar

```sh
npm test
```

Os testes verificam a API HTTP, criação, edição, conclusão, validações, recursos estáticos e persistência após reabrir o banco.

Na revisão, a interface também foi testada no Edge com as três prioridades, edição, conclusão, os três filtros, recarga e reinício do servidor. As larguras de 320, 375, 768 e 1280 pixels foram verificadas sem transbordamento horizontal. Essa verificação de navegador é independente de `npm test` e não adiciona dependências à aplicação.

## Limitações

Projeto local para uso acadêmico, sem autenticação, integração com IA ou sincronização entre dispositivos. O nome Task Flow IA não implica uma funcionalidade de inteligência artificial. O servidor escuta apenas em `127.0.0.1`. Node.js pode exibir um aviso sobre o módulo SQLite experimental. Os dados não são enviados ao GitHub; copie a pasta `database/` com o servidor parado para fazer backup.
