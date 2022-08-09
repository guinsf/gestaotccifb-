# gestaotccifb-

Para conseguir executar o trabalho localmente na máquina, seguir os passos.

Possuir as tecnologias instaladas abaixo:

*Node versão 16.14.2 ou superior;

*Angular 13.3.5 ou superior;

*Mongo DB versão 5.0.7 ou superior.

Após a instalação das ferramentas acima, baixar o projeto, ir até a pasta via comando cmd e executar o comando npm install para instalar as dependências e posteriormente npm start para iniciar a aplicação.

Após receber as mensagens Servidor iniciado e Conectado ao MongoDB, abrir a aplicação localmente na porta: http://localhost:3000/

Caso ainda não possua credenciais salvas no banco, executar os seguintes comandos via cmd:

Mongo
db.usuarios.insert({login: 'usuario', senha: 'senha'});

Inserir os nomes de usuário e senha dentro das aspas simples.

Feito isso basta logar no sistema e ter acesso normalmente.


Após o login será possível ter o acesso a área logada e funcionalidades internas. 

Tabelas e colunas cadastradas no banco de dados MongoDB:

*foto - titulo, url, descricao, nome, email, telefone, grupo e orientador;

*prof - titulo, url, descricao, curriculo, email, telefone e grupo;

*usuario - login e senha.

