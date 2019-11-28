# API CIRCUITO PENEDO DE CINEMA

:rocket:

## Começando

- Clone este repositório.
- \$ Rode `yarn` no diretório raiz.
- \$ Crie seu arquivo .env seguindo .env.example
- \$ yarn start

#### .env:

- Add as seguintes configurações ao .env:

```
NODE_ENV=development
APP_SECRET=2e7601df978684f4616cac2764899329

MONGO_URL=mongodb://localhost:27017/cpc-mongo

MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USER=cc540874f13d33
MAIL_PASS=0e1372015d68d4

REDIS_URL=redis://h:p56c33d9fcfb3caef33e9ba276b9aa90029f6a185ec39f9bd342ec0ecd0f93281@ec2-3-215-240-163.compute-1.amazonaws.com:8789

```

## Authentication

### Signup:

`POST /users`: cria um novo usuário.

#### Body example:

```
{
	"name": "Matheus",
	"email": "matheus22@gmail.com",
	"password": "12345678",
	"cpf": "10887640451"
}
```

### Signin:

`POST /sessions`: login com credenciais válidas.

#### Body example:

```
{
	"email": "matheus22@gmail.com",
	"password": "12345678",
}
```

## Email de Contato

### Contato:

`POST /contacts` (não precisa de autenticação): Envia email de contato.

#### Body example:

```
{
	"name": "Matheus Castro",
	"email": "fulano@gmail.com",
	"subject": "Testando",
	"message": "Envio de email funciona"
}
```

## Inscrições:

### Consultar Inscrições:

`GET /subscriptions` (precisa de autenticação): lista de inscritos.

### Cadastrar Inscrição:

`POST /subscriptions` (não precisa de autenticação): cria uma nova inscrição.

#### Body example:

```
{
	"proponent": {
		"name": "Matheus Castro",
		"cpf": "108.876.404-51",
		"email": "goca1377@gmail.com",
		"address": {
			"cep": "57210-000",
			"city": "Piaçabuçu",
			"street": "Rua Padre Curador",
			"neighborhood": "Centro",
			"state": "Alagoas"
		},
		"phone": "(82)996328982"
	},
	"movie": {
		"title": "Cinema em casa",
		"parentalRating": "L",
		"duration": "30min",
		"city": "Penedo",
		"category": "Nacional",
		"synopsis": "Um filme top pra ver em casa."
	},
	"productionMovie": {
		"directorName": "Matheus Castro",
		"photographyDirection": "Jhones Lira",
		"artDirection": "Paulo Rogerio",
		"production": "Penedo-Al",
		"country": "Brasil",
		"year": 2019,
		"executiveProduction": "Andre Almeida",
		"setting": "Felipe Almeida",
		"sound": "Marcos José",
		"videoUrl": "https://cinemaemcasa.com.br",
		"passwordVideo": "abc123"
	}
}
```

### Atualizar Inscrição:

`PUT /subscriptions/:id` (precisa de autenticação): atualiza uma inscrição.

#### Body example:

```
{
	"movie": {
		"title": "Cinema na rua"
	}
}
```

### Remover Inscrição

`DELETE /subscriptions/:id` (precisa de autenticação): remove um uma inscrição.

## Programação Geral

### Consultar Programação Geral:

`GET /general-schedule` (não precisa de autenticação): lista programação completa.

### Cadastrar Programação Geral:

`POST /general-schedule` (precisa de autenticação): cria um novo evento na programação geral.

#### Body example:

```
{
	"eventName": "Oficina de Produção de Fotos",
	"date": "2019-07-15T00:00:00-03:00",
	"time": "18h",
	"local": "Praça X"
}
```

### Atualizar Programação Geral:

`PUT /general-schedule/:id` (precisa de autenticação): atualiza um evento na programação geral.

#### Body example:

```
{
	"local": "Praça Y",
	"date": "2019-07-20T00:00:00-03:00",
}
```

### Remover Programação Geral:

`DELETE /general-schedule/:id` (precisa de autenticação): remove um evento na programação geral.

## Filmes

### Consultar Filmes:

`GET /movies` (não precisa de autenticação): lista todos os filmes.

### Cadastrar Filme:

`POST /movies` (precisa de autenticação): cria um novo filme.

#### Body example:

```
{
	"title": "Historia de vida",
	"synopsis": "Melhor filme de todos",
	"directorName": "Fulano",
	"parentalRating": "L",
	"duration": "25min",
	"city": "Maceio",
	"state": "Al",
	"competitiveCategory": "Mostra de Cinema Nacional",
	"category": "Drama",
  "displayDate": "2019-07-20T00:00:00-03:00"
}
```

### Atualizar Filme:

`PUT /movies/:id` (precisa de autenticação): atualiza um filme.

#### Body example:

```
{
	"category": "Ficção"
}
```

### Remover Filme:

`DELETE /movies/:id` (precisa de autenticação): remove um filme.

## Atividade Academicas

### Consultar Atividade Acadêmicas:

`GET /academic-activities` (não precisa de autenticação): lista todas as atividades acadêmicas.

### Cadastrar Atividade Acadêmica:

`POST /academic-activities` (precisa de autenticação): cria uma nova atividade acadêmica.

#### Body example:

```
{
	"eventName": "Workshop O Som no Cinema",
	"date": "2019-07-15T00:00:00-03:00",
	"time": "18h",
	"local": "Praça X"
}
```

### Atualizar Atividade Acadêmica:

`PUT /academic-activities/:id` (precisa de autenticação): atualiza uma atividade acadêmica.

#### Body example:

```
{
	"time": "14h"
}
```

### Remover Atividade Acadêmica:

`DELETE /academic-activities/:id` (precisa de autenticação): remove uma atividade acadêmica.

## Programação Musical

### Consultar Programação Musical:

`GET /musical-schedule` (não precisa de autenticação): lista programação musical completa.

### Cadastrar Programação Musical:

`POST /musical-schedule` (precisa de autenticação): cria um novo evento na programação musical.

#### Body example:

```
{
	"eventName": "Clowns de Quinta",
	"date": "2019-07-15T00:00:00-03:00",
}
```

### Atualizar Programação Musical:

`PUT /musical-schedule/:id` (precisa de autenticação): atualiza um evento na programação musical.

#### Body example:

```
{
	"eventName": "Wesley Safadão"
}
```

### Remover Programação Musical:

`DELETE /musical-schedule/:id` (precisa de autenticação): remove um evento na programação musical.

## Curadoria

### Consultar Curadores:

`GET /curatorship` (não precisa de autenticação): lista de curadores completa.

### Cadastrar Curador:

`POST /curatorship` (precisa de autenticação): cria um novo curador.

#### Body example:

```
{
	"name": "José Firmino",
	"bio": "Produtor, diretor, roteirista e editor, começou sua atuação como diretor de filmes publicitários e programas de TV.",
	"category": "11º Festival do Cinema Brasileiro",
}
```

### Atualizar Curador:

`PUT /curatorship/:id` (precisa de autenticação): atualiza um curador.

#### Body example:

```
{
	"category": "8º Festival de Cinema Universitário de Alagoas"
}
```

### Remover Curador:

`DELETE /curatorship/:id` (precisa de autenticação): remove um curador.

## Comissão Julgadora:

### Cadastrar Jurado:

`POST /judging-committee` (precisa de autenticação): cria um novo jurado.

#### Body example:

```
{
	"name": "Ítalo Lima",
	"bio": "Produtor, diretor, roteirista e editor, começou sua atuação como diretor de filmes publicitários e programas de TV.",
	"category": "8° Festival de Cinema Universitário de Alagoas"
}
```

### Consultar Júri:

`GET /judging-committee` (não precisa de autenticação): lista de júri completa.

### Atualizar Jurado:

`PUT /judging-committee/:id` (precisa de autenticação): atualiza um jurado.

#### Body example:

```
{
	"category": "11º Festival do Cinema Brasileiro"
}
```

### Remover Jurado:

`DELETE /judging-committee/:id` (precisa de autenticação): remove um jurado.

## Assessoria de Imprensa:

### Cadastrar Assessor:

`POST /advisory` (precisa de autenticação): cria um novo assossor de imprensa.

#### Body example:

```
{
	"name": "Ítalo Lima",
	"office": "Coordenador de Comunicação",
	"email": "italo@email.com",
  "phone": "123456780"
}
```

### Consultar Assessoria:

`GET /advisory` (não precisa de autenticação): lista de assessoria completa.

### Atualizar Assessor:

`PUT /advisory/:id` (precisa de autenticação): atualiza um assessor.

#### Body example:

```
{
	"office": "Coordenador de Gravação",
}
```

### Remover Assessor:

`DELETE /advisory/:id` (precisa de autenticação): remove um assessor.

## CLIPPING:

### Cadastrar CLIPPING:

`POST /clipping` (precisa de autenticação): cria um novo clipping.

#### Body example:

```
{
	"date": "2019-07-15",
	"title": "Technet: O Cinema às margens do Rio São Francisco"
}
```

### Consultar Clipping:

`GET /clipping` (não precisa de autenticação): lista de clipping completa.

### Atualizar Clipping:

`PUT /clipping/:id` (precisa de autenticação): atualiza um assessor.

#### Body example:

```
{
	"title": "Grande Rio FM: Circuito Penedo de Cinema premia vencedores de mostras competitivas",
}
```

### Remover Clipping:

`DELETE /clipping/:id` (precisa de autenticação): remove um assessor.

## Restaurantes e Bares:

### Cadastrar Restaurante e/ou Bar:

`POST /restaurant` (precisa de autenticação): cria um novo restaurante e/ou bar.

#### Body example:

```
{
	"name": "ORATÓRIO BAR E RESTAURANTE",
	"address": "Avenida Beira Rio, nº 304 – Centro Histórico",
  "phone": "123456789"
}
```

### Consultar Restaurantes e/ou Bares:

`GET /restaurant` (não precisa de autenticação): lista de restaurantes e/ou bares completa.

### Atualizar Restaurante e/ou Bar:

`PUT /restaurant/:id` (precisa de autenticação): atualiza um restaurante e/ou bar.

#### Body example:

```
{
	"name": "RESTAURANTE FORTE MAURÍCIO DE NASSAU",
}
```

### Remover Restaurante e/ou Bar:

`DELETE /restaurant/:id` (precisa de autenticação): remove um restaurante e/ou Bar.

## Hotéis e Pousadas:

### Cadastrar Hotel ou Pousada:

`POST /hostel` (precisa de autenticação): cria um novo hotel ou pousada.

#### Body example:

```
{
	"name": "HOTEL SÃO FRANCISCO",
	"address": "Avenida Floriano Peixoto, nº 237 – Centro Histórico ",
  "phone": " 123456789",
  "site": "www.hotelsaofrancisco.tur.br"
}
```

### Consultar Hotéis e Pousadas:

`GET /hostel` (não precisa de autenticação): lista de hotéis ou pousadas.

### Atualizar Hotel ou Pousada:

`PUT /hostel/:id` (precisa de autenticação): atualiza um hotel ou pousada.

#### Body example:

```
{
	"name": "POUSADA CENTRAL",
}
```

### Remover Hotel ou Pousada:

`DELETE /hostel/:id` (precisa de autenticação): remove um hotel ou pousada.

## Roteiros:

### Cadastrar Roteiro:

`POST /script` (precisa de autenticação): cria um novo roteiro.

#### Body example:

```
{
	"category": "Traçado Urbano",
  "locality": "Paço Municipal /Praça Barão de Penedo",
	"description": "Entre ruas irregulares e calçadas em pedras, o ..."
}
```

### Consultar Roteiros:

`GET /script` (não precisa de autenticação): lista de roteiros completa.

### Atualizar Roteiro:

`PUT /script/:id` (precisa de autenticação): atualiza um roteiro.

#### Body example:

```
{
	"locality": "Catedral Nossa Senhora do Rosário – Igreja Matriz",
}
```

### Remover Roteiro

`DELETE /script/:id` (precisa de autenticação): remove um roteiro.

## Telefones Úteis:

### Cadastrar Telefone Útil:

`POST /phone` (precisa de autenticação): cria um novo telefone útil.

#### Body example:

```
{
	"name": "Santa Casa de Misericórdia de Penedo",
  "locality": "Avenida Getúlio Vargas, 423 – Centro Histórico",
	"phone": "(82) 3551-3340"
}
```

### Consultar Telefone Útil:

`GET /phone` (não precisa de autenticação): lista de telefones úteis.

### Atualizar Telefone Útil:

`PUT /phone/:id` (precisa de autenticação): atualiza um telefone útil.

#### Body example:

```
{
	"name": "Hospital Regional de Penedo",
}
```

### Remover Telefone Útil

`DELETE /phone/:id` (precisa de autenticação): remove um telefone útil.
