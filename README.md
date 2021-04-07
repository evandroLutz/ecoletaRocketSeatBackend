# Lista de testes #ecoletaRocketSeatBackend

[![Build Status](https://travis-ci.org/evandroLutz/ecoletaRocketSeatBackend.svg?branch=main)](/evandroLutz/ecoletaRocketSeatBackend)

## itemsController.test.ts testa o módulo controller itemsController.ts

- should be able to get all items - testa se a rota get controlada pela funcao index retorna status code 200
- should be have JSON type - testa se a rota get controlada pela funcao index retorna um JSON
- should body response than 0 - testa se a rota get controlada pela funcao index retorna um objeto com mais de um item

## PointsController.test.ts testa o módulo controller PointsController.ts

- should responds with json - testa se o envio correto de dados retorna um JSON
- should responds with status 200 - testa se o envio correto de dados retorna um JSON status code 200
- should return message não registrado - testa se o envio INCOMPLETO de dados retorna um JSON com a mensagem "não registrado"
  
## isValidEmail.test.ts testa diretamente a função isValidEmail implementada na rota PointsController

- should responds be return false - testa se o envio incorreto de email retorna false para email válido
- should responds be return true -  testa se o envio correto de email retorna true para email válido
  
## isValidName.test.ts testa diretamente a função isValidName implementada na rota PointsController

- should responds be return false - testa se o envio incorreto de nome retorna false para nome válido
- should responds be return true -  testa se o envio correto de nome retorna true para nome válido

### Installation

Install the dependencies and devDependencies and start the tests.

```sh
$yarn install
$yarn test
```

License
----

MIT
