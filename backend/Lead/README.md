<h1 align="center">Rest API com Spring Boot consumida por React</h1>

<h2>COMO RODAR O PROJETO</h2>
<p>Apos clonar o repositorio</p>
<li>Abrir uma terminal e digitar "cd VIPtest/backend/Lead" e logo correr o script "./mvnw spring-boot:run"</li>

------------------------------

REQUESTS

- *GET
    localhost:8080/lead

- *GET BY ID 
  - NOTA: e preciso criar leads para testar a busca por id
      localhost:8080/lead/id

- *POST
    localhost:8080/lead

- *PUT
    localhost:8080/lead/id

- *DELETE
    localhost:8080/lead/id
-----------------------------------------------------
- PUT requests
  - { "nome": "Francisco", "sobrenome": " de la Vega", "nascimento": "21/07/1998", telefone: 1234567890}
  - { "nome": "Alexandro", "sobrenome": " de la Vega", "nascimento": "23/09/1997", telefone: 1134567890}
  - { "nome": "Jose", "sobrenome": " de la Vega", "nascimento": "21/07/1999", telefone: 1234567899}