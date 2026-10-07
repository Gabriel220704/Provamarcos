# Task Flow IA

Aplicativo acadêmico para organizar tarefas com persistência local em SQLite.

## Funcionalidades

- Cadastro com título obrigatório e descrição opcional.
- Edição de título, descrição e prioridade.
- Conclusão e reabertura de tarefas, com indicação visual do status.
- Filtros Todas, Pendentes e Concluídas.
- Prioridades Baixa, Média e Alta com cores diferentes.
- Persistência em SQLite após recarregar a página ou reiniciar o servidor.
- Interface responsiva e mensagens de validação.

## Como executar

1. Instale Node.js 24 ou superior e Git no computador.
2. Confira a instalação com `node --version` e `git --version`.
3. Clone o repositório, entre na pasta e inicie o servidor:

```sh
git clone https://github.com/Gabriel220704/Provamarcos.git
cd Provamarcos
npm start
```

4. Abra http://localhost:3000 no navegador. Para parar, pressione Ctrl+C.

Não há dependências externas, portanto não é necessário executar `npm install`, criar ambiente virtual ou instalar Python. Se o PowerShell bloquear `npm`, utilize `npm.cmd start` e `npm.cmd test`.

Se a porta 3000 estiver ocupada, escolha outra no PowerShell:

```powershell
$env:PORT = '3001'
npm start
```

Nesse caso, abra http://localhost:3001.

## Tecnologias

- HTML5 e CSS3 na interface.
- JavaScript no navegador e no servidor Node.js 24+.
- Servidor HTTP nativo do Node.js.
- SQLite por meio do módulo nativo `node:sqlite`.
- Testes com `node:test` e versionamento com Git.

## Estrutura

- `server.js`: servidor HTTP em JavaScript.
- `package.json`: comandos de execução e requisito de versão do Node.js.
- `public/`: interface HTML, CSS e JavaScript.
- `database/`: banco SQLite criado automaticamente e ignorado pelo Git.
- `tests/`: testes automatizados.
- `AGENTS.md`: reservado para preenchimento manual pelo autor.
- `PROMPTS.md`: registro dos três prompts reais enviados durante o desenvolvimento.

O projeto usa os módulos nativos do Node.js, incluindo `node:sqlite`.

## Funcionalidades e uso

Clique em **Nova tarefa**, preencha o título obrigatório, a descrição opcional e a prioridade (Baixa, Média ou Alta). A tarefa começa como Pendente. Use **Editar** para alterar seus dados, **Concluir** para finalizar e **Reabrir** para voltar a Pendente. Os filtros **Todas**, **Pendentes** e **Concluídas** atualizam a lista imediatamente.

O servidor valida título, prioridade e status e retorna mensagens para dados inválidos ou tarefas inexistentes. O banco mantém as tarefas após recarregar a página ou reiniciar o servidor. IDs e datas de criação/atualização são gerados automaticamente. A interface se adapta a telas menores.

O arquivo `database/taskflow.db` é criado automaticamente na primeira execução. O esquema possui `id`, `title`, `description`, `priority`, `status`, `created_at` e `updated_at`. O banco local não é versionado: a entrega inicia sem tarefas e permite demonstrar todo o fluxo de cadastro. Nenhum banco existente precisa ser apagado.

## Testar

```sh
npm test
```

Os testes verificam a API HTTP, criação, edição, conclusão, validações, recursos estáticos e persistência após reabrir o banco.

Na revisão, a interface também foi testada no Edge com as três prioridades, edição, conclusão, os três filtros, recarga e reinício do servidor. As larguras de 320, 375, 768 e 1280 pixels foram verificadas sem transbordamento horizontal. Essa verificação de navegador é independente de `npm test` e não adiciona dependências à aplicação.

## Limitações

Projeto local para uso acadêmico, sem autenticação, integração com IA ou sincronização entre dispositivos. O nome Task Flow IA não implica uma funcionalidade de inteligência artificial. O servidor escuta apenas em `127.0.0.1`. Node.js pode exibir um aviso sobre o módulo SQLite experimental. Os dados não são enviados ao GitHub; copie a pasta `database/` com o servidor parado para fazer backup.
