# logisticaplus

Logística+

para executar localmente siga o roteiro, como não sei se a máquina será uma VM ou não ou qual o sistema operacional, tentei deixar o mais genérico possível:

1- Salvar o conteúdo, extraí-lo da pasta zipada e colocar na pasta desejada

---------------------------------------Servidor---------------------------------------------------
2- Abrir a pasta "Servidor", abrir o terminal/prompt nesta pasta e executar os seguintes comandos:
  * npm install pg
  * npm install express
  * npm install cors
3- Altere o arquivo db.js com as credenciais que serão utilizadas em seu ambiente, tais como:
  * user
  * database
  * host
  * password
  * port
4- Execute o arquivo funcoes_db.js no terminal:
  * node funcoes_db.js
5- Execute o servidor no terminal:
  * node servidor.js
-------------------------------------Site--------------------------------------------------------
6- Abrir a pasta "Site", abrir o terminal/prompt nesta pasta e executar os seguintes comandos:
  * npm install react-icons
  * npm install react-router-dom
  * npm install victory
  * npm install react-modal
7- Iniciar o site digitando no terminal:
  * npm start
