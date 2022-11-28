# PortalNoticiasPGE


## Passos para Execução

#### Criar Banco de Dados
* 1° Baixar e instalar o XAMPP Apache [Aqui](https://www.apachefriends.org/pt_br/download.html).
* 2° Após o XAMPP Apache estiver instalado, abra ele e clique no botão Start na linha ***Apache*** e no botão Start na linha ***MySQL*** conforme a imagem abaixo.

![XAMPP Apache](https://firebasestorage.googleapis.com/v0/b/testeslab-c72db.appspot.com/o/products%2FCaptura%20de%20tela%202022-11-28%20015728.png?alt=media&token=2c874008-3efd-4117-8189-334baf807b7c)

* 3° Com o XAMPP Apache aberto, clique em Admin na linha ***MySQL***. Uma nova janela se abrirá.

![XAMPP Apache](https://firebasestorage.googleapis.com/v0/b/testeslab-c72db.appspot.com/o/products%2FCaptura%20de%20tela%202022-11-28%20020323.png?alt=media&token=e5e75f0b-8c60-47d7-897a-ac595d70c993)

* 4° Com a janela do phpMyAdmin aberta clique em ***Novo*** no lado esquerdo para criar um banco de dados MySQL.

![phpMyAdmin](https://firebasestorage.googleapis.com/v0/b/testeslab-c72db.appspot.com/o/products%2FCaptura%20de%20tela%202022-11-28%20020737.png?alt=media&token=4192a9cd-5785-4819-8aff-9d47fa7678ee)

* 5° Em seguida digite **banco_db** e clique em ***Criar*** para criar o banco de dados.

![phpMyAdmin](https://firebasestorage.googleapis.com/v0/b/testeslab-c72db.appspot.com/o/products%2FCaptura%20de%20tela%202022-11-28%20020944.png?alt=media&token=0327b664-abdc-4146-b91f-50b79bc2944a)

___

#### Conectando Projeto ao Banco de Dados (backend)
* 1° Com o projeto aberto, vá até o arquivo ***UsuarioRotas.js*** do diretório **backend** e remova temporariamente o ***verifyUser, adminOnly*** na linha 15 para poder criar o usuário administrador.
* 2° Em seguida vá até o arquivo ***index.js*** do diretório **backend** e descomente as linhas **20, 21, 22 e 43** temporariamente, do arquivo para poder subir as tabelas do banco de dados.
* 3° Feito isso clique com o botão direito do mouse na pasta **backend** e em seguida ***Abrir no Terminal Integrado***.
* 4° Com o terminal aberto digite **nodemon index.js** para executar o arquivo **index.js**, aperte enter.
* 5° Agora vá até o arquivo ***request.rest*** e clique em **Send Request** para criar o usuario administrador.
* 6° Feito isso, volte até o arquivo ***UsuarioRotas.js*** e dê um **ctrl + z** em tudo. E faça o mesmo no arquivo **index.js*** do diretório **backend**.
___

#### Abrindo o Projeto no Browser (frontend)
* 1° Vá até a pasta **frontend** e clique com o botão direito do mouse e em seguida ***Abrir no Terminal Integrado***.
* 2° Com o terminal aberto digite **npm start** para executar o arquivo **index.js**, aperte enter. Uma tela será aberta e carregará o projeto.
___
#### Logando no Projeto
* 1° Para logar no projeto siga as credenciais abaixo:
  * Email: admin@email.com
  * Password: 123465
___
#### tecnologias Utilizadas no Projeto
* Node
* Npm
* Express
* React
* MySQL
* GIT
* No visual studio code foi utilizada a extensão **REST Client** de Huachao Mao, o **Bulma Snippets** de fiazluthfi e o **ES7+ React/Redux/React-Native snippets** de dsznajder



