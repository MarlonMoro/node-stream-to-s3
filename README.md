# node-stream-to-s3
![node](https://img.shields.io/badge/NODE-STREAM-brightgreen?style=flat-square)
![sequelize](https://img.shields.io/badge/-SEQUELIZE-blue?style=flat-square)
![AWS](https://img.shields.io/badge/AWS-S3-yellow?style=flat-square)


## App desenvolvido para testar a funcionalidade Pipeline do pacote Stream do NodeJS
Consiste em ler uma tabela onde tem armazenados IDs de filmes da [API TheMovieDB](https://www.themoviedb.org/?language=pt-BR), buscar mais informações desses filmes através da API gerar um CSV com tais informações e fazer o upload para o AWS S3.
## Pacotes utilizado
- sequelize
- mysql2
- axios
- csv-stringfy
- aws-sdk

### Variáveis de ambiente
```
  bucket: nome do bucket do S3  
  db_username: usuário do banco de dados  
  db_password: senhado do banco de dados 
  api_key: Token de acesso api TheMovieDB
 ```

____
*Apesar do Sequelize não dar suporte nativamente para Stream a escolha em utiliza-lo foi devido a reprodução de um cenário real.*

