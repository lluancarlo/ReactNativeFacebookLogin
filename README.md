# ReactNative Facebook Login
Aplicação simples para autenticação via Facebook usando React Native no Android.

## Como funciona?
Ao usar o login, a primeira requisicao (A que muda o status logado/deslogado) retorna um Token. Esse token contém as informações básicas do usuário e as permissões que o mesmo permitiu que o aplicativo acesse.
Com o token em mãos, utilizamos a [Graph API](https://developers.facebook.com/docs/graph-api/) do facebook para obter dados do usuário como Nome, Idade e etc. Caso requisite algo não permitido pelo usuário, não será retornado a informação. Podemos testar as requisições na [tools](https://developers.facebook.com/tools/explorer) deles.

## Configurando projeto
**Atenção:** O projeto foi feito para rodar somente em **ANDROID**.

- Execute o *npm install* dentro da pasta *mobileapp*.
- Crie um aplicativo na área de [desenvolvedor do facebook](https://developers.facebook.com/apps/).
- Pegue o ID do aplicativo e coloque no arquivo strings.xml do android, na string "facebook_app_id" (*Caminho: android\app\src\main\res\values\strings.xml*).
- Rode o projeto com *react-native run-android* (Você tem que ter um emulador configurado **ou** um smartphone Android conectado via USB com a **depuração USB** ativada).

###### Notas de desenvolvimento
- O idioma do botão do facebook é de acordo com o idioma configurado no sistema.
- Ao que parece, não existe um tempo para expirar o token, preciso **checar**.
