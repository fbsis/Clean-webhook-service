# listagem de webhook (GET)

> ## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **GET** na rota **/v3/webhook/** 
2. ✅ Deve devolver todos os registros do banco de dados
4. ✅ **consultar** processo no **mysql**
5. ✅ Retorna **200**, com os dados {status: 200, body: {webhook}}

> ## Exceções

1. ✅ Retorna erro **400** se tiver erro de entrada de dados (rota sem parametros)
2. ✅ Retorna erro **500** se der erro ao criar o registro