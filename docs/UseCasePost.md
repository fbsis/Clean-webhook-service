# Criação de webhook (POST)

> ## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **POST** na rota **/v3/webhook/** com o **payload** 
´{
    "institutionId": 1,
    "action": "authentication.pre.sso",
    "name": "name",
    "method": "post",
    "url": "http://www.ig.com.br/",
    "secret": "secret", *
    "timeout": 10, *
    "status": true
}´
2. ✅ Deve validar todos os dados do payload
3. ✅ **secret**, **timeout**, **method** são **opcional**, Todos os **outros** campos são **obrigatórios**
4. ✅ **Criar** processo no **mysql**
5. ✅ Retorna **201**, sem dados {status: 201,body: {}}

> ## Exceções

1. ✅ Retorna erro **400** se tiver erro de entrada de dados
2. ✅ Retorna erro **500** se der erro ao criar o registro