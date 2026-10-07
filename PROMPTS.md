# Principais prompts utilizados no Codex

Textos reais enviados pelo autor, transcritos dos três anexos utilizados neste projeto.

## Prompt 1

````text
Atue como um engenheiro de software full stack experiente e desenvolva um mini aplicativo web chamado **Task Flow IA**.

O objetivo é criar um sistema simples, organizado e funcional para gerenciamento de tarefas, seguindo boas práticas de desenvolvimento, organização de código e versionamento com Git.

## 1. Objetivo do sistema

Crie uma aplicação web chamada **Task Flow IA**, permitindo que o usuário cadastre, visualize, edite, conclua e organize suas tarefas.

O sistema deve ser simples o suficiente para ser apresentado como projeto acadêmico, porém deve possuir uma estrutura de código organizada e profissional.

---

# 2. Funcionalidades obrigatórias

## Cadastro de tarefas

O usuário deve conseguir criar uma nova tarefa.

Cada tarefa deve possuir no mínimo:

- ID único;
- título;
- descrição;
- prioridade;
- status;
- data de criação;
- data de atualização, se aplicável.

O campo **título** deve ser obrigatório.

O campo de prioridade deve possuir exatamente as seguintes opções:

- Baixa;
- Média;
- Alta.

Ao criar uma nova tarefa, o status inicial deve ser automaticamente definido como **Pendente**.

---

# 3. Listagem de tarefas

Na página principal, exiba todas as tarefas cadastradas.

Cada tarefa deve apresentar de forma clara:

- título;
- descrição;
- prioridade;
- status;
- botão para editar;
- botão ou checkbox para marcar como concluída.

Utilize algum elemento visual simples para facilitar a identificação da prioridade das tarefas.

Exemplo:

- Baixa;
- Média;
- Alta.

Não é necessário criar uma interface excessivamente complexa.

---

# 4. Edição de tarefas

O usuário deve conseguir editar uma tarefa existente.

Permita alterar pelo menos:

- título;
- descrição;
- prioridade.

Após salvar a edição, a interface deve mostrar imediatamente os novos dados da tarefa.

---

# 5. Conclusão de tarefas

Implemente uma forma simples de marcar uma tarefa como concluída.

Pode ser utilizado:

- checkbox;
- botão "Concluir";
- botão de alteração de status.

Quando a tarefa for concluída:

status = Concluída

A interface deve deixar visualmente evidente que a tarefa já foi finalizada.

Exemplo:

- texto riscado;
- alteração visual no card;
- badge "Concluída".

Também deve ser possível diferenciar facilmente tarefas pendentes de tarefas concluídas.

---

# 6. Filtro por status

Na tela principal, implemente os seguintes filtros:

**Todas**

Mostra todas as tarefas.

**Pendentes**

Mostra somente tarefas que ainda não foram concluídas.

**Concluídas**

Mostra somente tarefas concluídas.

Os filtros devem atualizar corretamente a lista exibida.

---

# 7. Prioridade

Toda tarefa deve possuir uma prioridade.

Utilize:

- Baixa;
- Média;
- Alta.

O usuário deve escolher a prioridade durante o cadastro ou edição da tarefa.

Se considerar adequado, utilize badges ou elementos visuais para diferenciar as prioridades.

---

# 8. Interface

Crie uma interface minimamente organizada, limpa e responsiva.

Não é necessário desenvolver um design complexo.

A página pode possuir uma estrutura semelhante a:

Task Flow IA

[ Nova tarefa ]

Filtros:

[ Todas ] [ Pendentes ] [ Concluídas ]

Lista de tarefas:

[Tarefa]

Título

Descrição

Prioridade

Status

[Editar] [Concluir]

Utilize HTML e CSS bem estruturados.

A aplicação deve funcionar adequadamente tanto em telas de computador quanto em telas menores.

---

# 9. Tecnologias

Escolha uma stack simples e adequada para este projeto.

Preferencialmente utilize tecnologias que não adicionem complexidade desnecessária.

Uma possibilidade é:

Frontend:
- HTML5;
- CSS3;
- JavaScript.

Backend:
- Python com Flask.

Banco de dados:
- SQLite.

Caso o projeto já possua uma tecnologia ou estrutura definida, analise o código existente antes de realizar qualquer alteração e mantenha a stack utilizada.

Não troque tecnologias sem necessidade.

---

# 10. Persistência dos dados

As tarefas não devem desaparecer simplesmente ao atualizar a página.

Implemente persistência.

Preferencialmente utilize SQLite.

Crie uma tabela de tarefas semelhante a:

tasks

- id
- title
- description
- priority
- status
- created_at
- updated_at

Utilize nomes consistentes e claros no banco de dados e no código.

---

# 11. Organização do projeto

Organize o projeto de maneira profissional.

Uma estrutura possível:

task-flow-ia/

app.py

templates/
    index.html
    task_form.html

static/
    css/
        style.css

    js/
        app.js

database/
    taskflow.db

AGENTS.md

PROMPTS.md

README.md

.gitignore

requirements.txt

A estrutura pode ser adaptada de acordo com a tecnologia escolhida.

Evite criar arquivos desnecessários.

---

# 12. AGENTS.md

O projeto deve possuir um arquivo:

AGENTS.md

IMPORTANTE:

**Não escreva o conteúdo definitivo do AGENTS.md por mim.**

Esse arquivo será escrito manualmente pelo autor do projeto.

Você pode criar somente o arquivo vazio ou inserir um pequeno comentário indicando:

"Este arquivo deve ser preenchido manualmente pelo autor do projeto."

Não gere instruções completas automaticamente neste arquivo.

---

# 13. Registro dos prompts utilizados no Codex

Crie um arquivo chamado:

PROMPTS.md

Esse arquivo será utilizado para registrar os **três principais prompts enviados ao Codex durante o desenvolvimento**.

Prepare a estrutura:

# Principais prompts utilizados no Codex

## Prompt 1

[Adicionar aqui o primeiro prompt]

## Prompt 2

[Adicionar aqui o segundo prompt]

## Prompt 3

[Adicionar aqui o terceiro prompt]

Não invente prompts que não foram realmente utilizados.

Caso este prompt esteja sendo utilizado como primeiro prompt principal do projeto, ele poderá ser registrado posteriormente como Prompt 1.

---

# 14. README

Crie um README.md explicando:

- nome do projeto;
- objetivo;
- funcionalidades;
- tecnologias utilizadas;
- estrutura básica do projeto;
- como instalar;
- como executar;
- como utilizar o sistema.

Inclua instruções suficientemente simples para outra pessoa conseguir executar o projeto localmente.

---

# 15. Git

O projeto obrigatoriamente deve ser versionado utilizando Git.

Caso ainda não exista um repositório Git, inicialize com:

git init

Adicione um `.gitignore` adequado para impedir o versionamento de arquivos desnecessários.

Exemplos:

__pycache__/
*.pyc
.env
venv/
.venv/

Não ignore arquivos importantes do projeto.

---

# 16. Commits obrigatórios

O projeto deve possuir **no mínimo três commits reais e distintos**.

Não faça todo o projeto e depois crie três commits artificiais contendo praticamente a mesma alteração.

Separe o desenvolvimento de maneira lógica.

Sugestão:

### Commit 1

Estrutura inicial do projeto.

Mensagem:

`chore: cria estrutura inicial do Task Flow IA`

Pode incluir:

- estrutura de diretórios;
- configuração inicial;
- dependências;
- banco inicial;
- página básica.

### Commit 2

Funcionalidades principais das tarefas.

Mensagem:

`feat: implementa cadastro e edição de tarefas`

Pode incluir:

- criação de tarefas;
- persistência;
- listagem;
- edição.

### Commit 3

Filtros, conclusão e interface.

Mensagem:

`feat: adiciona filtros, conclusão e prioridades`

Pode incluir:

- marcar tarefa como concluída;
- filtros Todas/Pendentes/Concluídas;
- melhorias visuais;
- badges de prioridade;
- responsividade.

Caso outras mudanças relevantes sejam feitas, commits adicionais podem ser criados.

---

# 17. Boas práticas

Durante o desenvolvimento:

- utilize nomes de variáveis claros;
- evite duplicação de código;
- mantenha funções pequenas sempre que possível;
- valide os dados recebidos;
- organize responsabilidades;
- adicione comentários apenas quando realmente necessários;
- não crie abstrações desnecessárias para um projeto pequeno;
- mantenha o código simples de entender;
- preserve a funcionalidade existente antes de realizar alterações.

---

# 18. Validações

Implemente pelo menos:

- título obrigatório;
- prioridade aceita somente Baixa, Média ou Alta;
- status válido;
- tratamento de tentativa de edição de tarefa inexistente.

Se houver formulários, forneça feedback quando uma operação não puder ser realizada.

---

# 19. Critérios finais de aceite

Antes de considerar o projeto concluído, confirme que:

- [ ] O projeto se chama Task Flow IA.
- [ ] É possível cadastrar uma tarefa.
- [ ] É possível editar uma tarefa.
- [ ] É possível marcar uma tarefa como concluída.
- [ ] Existe filtro "Todas".
- [ ] Existe filtro "Pendentes".
- [ ] Existe filtro "Concluídas".
- [ ] Toda tarefa possui prioridade Baixa, Média ou Alta.
- [ ] Os dados persistem após atualizar/reiniciar a aplicação.
- [ ] A interface está organizada.
- [ ] Existe README.md.
- [ ] Existe AGENTS.md.
- [ ] O AGENTS.md não foi escrito automaticamente por você.
- [ ] Existe PROMPTS.md.
- [ ] Existe .gitignore.
- [ ] O projeto está versionado com Git.
- [ ] Existem pelo menos três commits distintos.
- [ ] A aplicação consegue ser executada sem erros.

---

# 20. Forma de trabalho

Antes de modificar os arquivos:

1. Analise a estrutura atual do projeto.
2. Identifique tecnologias existentes.
3. Não substitua código funcional sem necessidade.
4. Implemente o sistema incrementalmente.
5. Execute/teste a aplicação sempre que possível.
6. Corrija erros encontrados.
7. Faça os commits conforme cada etapa lógica for concluída.
8. Ao final, revise o projeto inteiro.

Ao terminar, apresente um resumo contendo:

- arquivos criados;
- arquivos modificados;
- funcionalidades implementadas;
- tecnologia utilizada;
- como executar o sistema;
- commits realizados;
- possíveis limitações conhecidas.

Não apenas explique como desenvolver. **Implemente efetivamente o projeto nos arquivos do repositório.**
````

## Prompt 2

````text
Agora revise completamente o projeto **Task Flow IA** criado anteriormente.

Atue como um engenheiro de software responsável por realizar uma revisão técnica, funcional e visual da aplicação.

Seu objetivo é verificar se todos os requisitos obrigatórios foram realmente implementados e corrigir qualquer problema encontrado.

## 1. Revisão das funcionalidades

Verifique se o sistema permite:

- cadastrar uma nova tarefa;
- editar uma tarefa existente;
- marcar uma tarefa como concluída;
- visualizar todas as tarefas;
- filtrar tarefas pendentes;
- filtrar tarefas concluídas;
- definir prioridade Baixa, Média ou Alta;
- manter os dados salvos mesmo após atualizar ou reiniciar a aplicação.

Teste cada uma dessas funcionalidades.

Caso encontre algum erro, implemente a correção diretamente no código.

---

## 2. Cadastro de tarefas

Confirme que:

- o título da tarefa é obrigatório;
- a descrição funciona corretamente;
- a prioridade pode ser Baixa, Média ou Alta;
- novas tarefas são criadas inicialmente como Pendentes;
- os dados são realmente salvos no banco.

Evite permitir tarefas com título vazio.

---

## 3. Edição

Teste a edição de tarefas.

Verifique se é possível alterar:

- título;
- descrição;
- prioridade.

Após salvar, confirme que:

- as alterações aparecem na interface;
- as alterações também ficam persistidas no banco de dados.

Caso a tarefa não exista, trate o erro adequadamente.

---

## 4. Conclusão de tarefas

Verifique se uma tarefa pode ser marcada como concluída.

Quando isso acontecer:

- o status deve mudar para Concluída;
- a interface deve demonstrar visualmente que a tarefa foi finalizada.

Pode utilizar:

- texto riscado;
- badge;
- alteração do card;
- checkbox marcado.

Confirme também que a tarefa aparece corretamente no filtro de tarefas concluídas.

---

## 5. Filtros

Teste individualmente os três filtros:

### Todas
Deve exibir todas as tarefas.

### Pendentes
Deve exibir somente tarefas com status Pendente.

### Concluídas
Deve exibir somente tarefas com status Concluída.

Corrija qualquer comportamento incorreto.

---

## 6. Prioridades

Confirme que toda tarefa possui exatamente uma das prioridades:

- Baixa;
- Média;
- Alta.

Verifique se a prioridade aparece claramente na listagem.

Caso seja possível, mantenha uma diferenciação visual simples entre as prioridades.

Não crie um design exageradamente complexo.

---

## 7. Interface

Revise a interface da aplicação.

Ela deve ser:

- limpa;
- simples;
- organizada;
- fácil de entender;
- minimamente responsiva.

Melhore espaçamentos, alinhamentos, botões, formulários e cards caso necessário.

Mantenha o projeto apropriado para um trabalho acadêmico pequeno.

Não transforme o projeto em uma aplicação excessivamente complexa.

---

## 8. Responsividade

Teste a interface em larguras menores de tela.

Garanta que:

- os elementos não fiquem sobrepostos;
- os botões continuem utilizáveis;
- os formulários sejam legíveis;
- os cards se adaptem corretamente.

---

## 9. Banco de dados

Revise a implementação da persistência.

Confirme que a tabela de tarefas possui dados equivalentes a:

- id;
- title;
- description;
- priority;
- status;
- created_at;
- updated_at.

Se a implementação existente utilizar nomes diferentes, não altere sem necessidade.

Verifique se operações de criação e atualização funcionam corretamente.

---

## 10. Organização do código

Revise a estrutura do código e corrija problemas simples de organização.

Verifique:

- nomes de variáveis;
- funções muito grandes;
- código duplicado;
- imports desnecessários;
- arquivos inutilizados;
- tratamento de erros;
- validações.

Não faça refatorações grandes sem necessidade.

Priorize código simples, legível e funcional.

---

## 11. AGENTS.md

Não escreva o conteúdo do arquivo `AGENTS.md`.

Esse arquivo deve continuar reservado para preenchimento manual pelo autor do projeto.

Se ele estiver vazio, mantenha-o vazio.

Se possuir somente um aviso de preenchimento manual, mantenha-o dessa forma.

---

## 12. PROMPTS.md

Verifique se existe o arquivo `PROMPTS.md`.

Caso exista, não invente prompts que não foram utilizados.

O arquivo deve ser preparado para registrar três prompts reais utilizados durante o desenvolvimento.

Considere este texto como o **Prompt 2** utilizado no projeto.

Se for apropriado, atualize apenas a estrutura do arquivo para indicar que existe um local reservado para o Prompt 2, mas não altere textos já registrados pelo usuário.

---

## 13. README

Revise o `README.md`.

Confirme que ele contém pelo menos:

- nome Task Flow IA;
- descrição do projeto;
- funcionalidades;
- tecnologias;
- requisitos para execução;
- instalação;
- comando para iniciar;
- explicação básica de uso.

Corrija informações incorretas ou incompletas.

---

## 14. Testes manuais

Execute uma sequência de teste semelhante a esta:

1. Iniciar a aplicação.
2. Criar uma tarefa de prioridade Baixa.
3. Criar uma tarefa de prioridade Média.
4. Criar uma tarefa de prioridade Alta.
5. Editar uma das tarefas.
6. Marcar uma tarefa como concluída.
7. Utilizar o filtro Todas.
8. Utilizar o filtro Pendentes.
9. Utilizar o filtro Concluídas.
10. Atualizar a página.
11. Reiniciar a aplicação.
12. Confirmar que os dados continuam salvos.

Caso qualquer uma dessas etapas falhe, identifique a causa e faça a correção.

---

## 15. Git

Antes de realizar alterações, verifique o histórico do Git.

Não apague commits existentes.

Não recrie o repositório Git caso ele já exista.

Após finalizar esta etapa de revisão e correção, crie um novo commit somente se houver alterações reais no projeto.

Uma mensagem adequada seria:

`fix: revisa funcionalidades e corrige problemas do Task Flow IA`

Se nenhuma alteração for necessária, não crie um commit vazio apenas para aumentar a quantidade de commits.

---

## 16. Não faça

Durante esta revisão:

- não substitua toda a aplicação por outra;
- não mude a stack sem necessidade;
- não apague o histórico Git;
- não escreva o AGENTS.md pelo autor;
- não invente prompts utilizados;
- não remova funcionalidades que já estejam funcionando;
- não complique desnecessariamente o projeto.

---

## 17. Critérios de aceite

Antes de terminar, confirme que:

- [ ] Cadastro funciona.
- [ ] Edição funciona.
- [ ] Marcar como concluída funciona.
- [ ] Filtro Todas funciona.
- [ ] Filtro Pendentes funciona.
- [ ] Filtro Concluídas funciona.
- [ ] Prioridades Baixa, Média e Alta funcionam.
- [ ] Os dados permanecem salvos.
- [ ] A interface está organizada.
- [ ] A aplicação é minimamente responsiva.
- [ ] README está correto.
- [ ] AGENTS.md permanece reservado para escrita manual.
- [ ] PROMPTS.md existe.
- [ ] O histórico Git continua íntegro.
- [ ] A aplicação inicia sem erros.

Ao terminar, apresente um relatório curto contendo:

1. problemas encontrados;
2. correções realizadas;
3. arquivos modificados;
4. testes executados;
5. resultado dos testes;
6. commit criado, caso tenha sido necessário.

Não apenas descreva as correções: **faça as correções diretamente no projeto e valide o funcionamento da aplicação.**
````

## Prompt 3

````text
Agora realize a **revisão final e preparação para entrega** do projeto **Task Flow IA**.

Atue como um engenheiro de software responsável por garantir que o projeto esteja completo, organizado, documentado, versionado corretamente e pronto para apresentação acadêmica.

O objetivo desta etapa não é recriar a aplicação, mas fazer a conferência final de tudo que já foi desenvolvido.

## 1. Revisão geral do sistema

Revise todo o projeto e confirme se as funcionalidades principais estão presentes e funcionando:

- cadastro de tarefas;
- edição de tarefas;
- marcação de tarefa como concluída;
- filtro por status;
- prioridades;
- persistência dos dados;
- interface organizada;
- responsividade básica.

Não remova funcionalidades existentes que já estejam funcionando.

Caso encontre algum erro simples, faça a correção.

---

## 2. Requisitos funcionais obrigatórios

Confirme especificamente se o sistema possui:

### Cadastro de tarefas

Cada tarefa deve possuir pelo menos:

- título;
- descrição;
- prioridade;
- status.

O título deve ser obrigatório.

### Prioridade

Devem existir exatamente as opções:

- Baixa;
- Média;
- Alta.

### Status

As tarefas devem poder ser classificadas como:

- Pendente;
- Concluída.

### Filtros

A aplicação deve possuir:

- Todas;
- Pendentes;
- Concluídas.

Cada filtro deve exibir somente as tarefas correspondentes.

---

## 3. Interface final

Faça uma revisão visual da aplicação.

Confirme que a interface possui:

- título "Task Flow IA";
- botão ou formulário claro para adicionar tarefas;
- filtros visíveis;
- tarefas organizadas em lista ou cards;
- prioridade visível;
- status visível;
- botão para editar;
- controle para concluir a tarefa.

Corrija apenas problemas evidentes de:

- alinhamento;
- espaçamento;
- tamanho de botões;
- legibilidade;
- responsividade.

Não transforme o projeto em uma aplicação visualmente complexa.

O objetivo continua sendo um mini app simples e organizado.

---

## 4. Persistência dos dados

Confirme que os dados permanecem disponíveis após:

1. cadastrar uma tarefa;
2. atualizar a página;
3. fechar e iniciar novamente a aplicação.

Se SQLite estiver sendo utilizado, confirme se a integração continua funcionando corretamente.

Não apague dados ou recrie o banco sem necessidade.

---

## 5. Limpeza do projeto

Revise os arquivos do projeto e remova somente arquivos claramente desnecessários.

Verifique se existem:

- arquivos temporários;
- código comentado sem utilidade;
- imports não utilizados;
- arquivos duplicados;
- logs de depuração;
- prints usados somente durante desenvolvimento.

Não remova nenhum arquivo importante ou necessário para execução.

---

## 6. README.md

Faça uma revisão final do arquivo `README.md`.

Ele deve conter:

# Task Flow IA

Uma descrição curta do sistema.

## Funcionalidades

Liste pelo menos:

- cadastro de tarefas;
- edição;
- conclusão;
- filtros;
- prioridades;
- persistência.

## Tecnologias

Informe corretamente as tecnologias realmente utilizadas.

Não invente tecnologias.

## Como executar

Explique passo a passo como executar o projeto em outro computador.

Inclua, conforme a stack utilizada:

- criação do ambiente virtual;
- instalação das dependências;
- comando para iniciar a aplicação;
- endereço local para acessar o sistema.

Exemplo, caso Flask seja utilizado:

```bash
python -m venv .venv
```

Ativação no Windows:

```bash
.venv\Scripts\activate
```

Instalação:

```bash
pip install -r requirements.txt
```

Execução:

```bash
python app.py
```

Adapte os comandos somente se forem compatíveis com o projeto real.

---

## 7. requirements.txt

Caso o projeto utilize Python, confirme se `requirements.txt` contém somente as dependências necessárias.

Exemplo:

Flask

Inclua versões apenas se houver motivo.

Não adicione bibliotecas que não são utilizadas.

---

## 8. .gitignore

Revise o arquivo `.gitignore`.

Confirme que arquivos desnecessários não serão versionados.

Se estiver utilizando Python, exemplos adequados são:

```text
__pycache__/
*.pyc
.venv/
venv/
.env
```

Caso o banco SQLite deva ser apresentado junto com o projeto, não o ignore automaticamente.

Tome a decisão com base no projeto existente.

---

## 9. AGENTS.md

IMPORTANTE:

O arquivo `AGENTS.md` deve existir, mas deve ser escrito manualmente pelo autor do projeto.

Não escreva o conteúdo completo do `AGENTS.md`.

Caso o arquivo esteja vazio, mantenha-o dessa forma.

Caso exista apenas uma observação indicando que será preenchido pelo autor, não substitua essa observação.

Não gere instruções no lugar do aluno.

---

## 10. PROMPTS.md

Revise o arquivo `PROMPTS.md`.

Ele deve possuir espaço para registrar os três principais prompts utilizados no desenvolvimento:

```text
# Principais prompts utilizados no Codex

## Prompt 1

## Prompt 2

## Prompt 3
```

Este texto deve ser considerado o **Prompt 3** do desenvolvimento.

Não invente prompts adicionais.

Não altere o conteúdo dos Prompt 1 e Prompt 2 caso já tenham sido registrados manualmente.

---

## 11. Git

Faça uma revisão completa do versionamento Git.

Execute comandos equivalentes a:

```bash
git status
git log --oneline
```

Confirme que o projeto está realmente sendo versionado.

Não execute `git init` novamente caso já exista um repositório.

Não apague o diretório `.git`.

Não reescreva o histórico.

---

## 12. Verificação dos commits

O projeto deve possuir no mínimo **três commits distintos**.

Analise o histórico e confirme isso.

Uma sequência aceitável poderia ser semelhante a:

```text
chore: cria estrutura inicial do Task Flow IA
feat: implementa cadastro e edição de tarefas
feat: adiciona filtros, conclusão e prioridades
```

Também podem existir commits adicionais, por exemplo:

```text
fix: revisa funcionalidades e corrige problemas do Task Flow IA
```

As mensagens não precisam ser exatamente essas, desde que os commits representem etapas reais do desenvolvimento.

Não crie commits falsos ou vazios apenas para atingir a quantidade mínima.

---

## 13. Commit final

Caso esta revisão final gere alterações reais, crie um commit final.

Sugestão:

```text
docs: finaliza documentação e preparação do projeto
```

Esse commit pode incluir:

- README;
- PROMPTS.md;
- .gitignore;
- pequenas correções finais;
- ajustes de documentação.

Não inclua alterações desnecessárias apenas para gerar um commit.

---

## 14. Teste final

Antes de considerar o projeto concluído, execute um teste completo.

Realize pelo menos este fluxo:

1. Inicie a aplicação.
2. Acesse a página principal.
3. Cadastre uma tarefa de prioridade Baixa.
4. Cadastre uma tarefa de prioridade Média.
5. Cadastre uma tarefa de prioridade Alta.
6. Edite uma das tarefas.
7. Marque uma tarefa como concluída.
8. Utilize o filtro Todas.
9. Utilize o filtro Pendentes.
10. Utilize o filtro Concluídas.
11. Atualize a página.
12. Confirme que as tarefas continuam cadastradas.
13. Reinicie a aplicação.
14. Confirme novamente a persistência.
15. Verifique se não existem erros no terminal ou console que impeçam o funcionamento.

Corrija qualquer problema encontrado.

---

## 15. Estrutura esperada

Revise se a estrutura do projeto está minimamente organizada.

Um exemplo possível:

```text
task-flow-ia/
│
├── app.py
├── README.md
├── AGENTS.md
├── PROMPTS.md
├── requirements.txt
├── .gitignore
│
├── templates/
│   ├── index.html
│   └── task_form.html
│
├── static/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── app.js
│
└── database/
    └── taskflow.db
```

Não reorganize toda a aplicação apenas para deixá-la igual a esse exemplo.

Se a estrutura atual estiver organizada e funcional, preserve-a.

---

## 16. Critérios finais de entrega

Antes de terminar, confirme:

- [ ] O projeto se chama Task Flow IA.
- [ ] O sistema inicia corretamente.
- [ ] Cadastro de tarefas funciona.
- [ ] Edição funciona.
- [ ] Conclusão funciona.
- [ ] Filtro Todas funciona.
- [ ] Filtro Pendentes funciona.
- [ ] Filtro Concluídas funciona.
- [ ] Prioridade Baixa funciona.
- [ ] Prioridade Média funciona.
- [ ] Prioridade Alta funciona.
- [ ] Os dados são persistidos.
- [ ] A interface está organizada.
- [ ] Existe README.md.
- [ ] Existe AGENTS.md.
- [ ] O AGENTS.md continua reservado para escrita manual.
- [ ] Existe PROMPTS.md.
- [ ] Os três prompts estão contemplados no projeto.
- [ ] Existe .gitignore.
- [ ] O Git está funcionando.
- [ ] Existem pelo menos três commits.
- [ ] Não existem erros críticos conhecidos.

---

## 17. Relatório final

Ao terminar, apresente um relatório objetivo com:

### Funcionalidades concluídas
Liste as funcionalidades disponíveis.

### Tecnologias
Informe a stack realmente utilizada.

### Arquivos principais
Liste os arquivos mais importantes.

### Testes realizados
Informe quais testes foram executados e seus resultados.

### Git
Mostre o resultado resumido de:

```bash
git log --oneline
```

### Como executar
Informe os comandos necessários para executar o sistema.

### Pendências
Caso exista alguma limitação ou problema que não tenha sido possível corrigir, informe claramente.

Se tudo estiver funcionando, informe que o projeto está pronto para entrega.

Faça as correções necessárias diretamente nos arquivos antes de apresentar o relatório final.
````
