# ReactNative-Facebook-Login
Aplicação simples para autenticação via Facebook usando React Native no Android.

## Como funciona?
Ao usar o login, o primeiro login retorna um Token. Esse token contém as informações básicas do usuário e as permissões que o mesmo permitiu que o aplicativo acesse.
Com o token em mãos, utilizamos a [Graph API](https://developers.facebook.com/docs/graph-api/) do facebook para obter dados do usuário como Nome, Idade e etc. Podemos testar as requisições na [tools](https://developers.facebook.com/tools/explorer) deles.

## Configurando projeto
**Atenção:** O projeto foi feito para rodar somente em **ANDROID**.

- Crie um aplicativo na área de [desenvolvedor do facebook](https://developers.facebook.com/apps/).
- Pegue o ID do aplicativo e coloque no arquivo strings.xml do android, na string "facebook_app_id" (*Caminho: android\app\src\main\res\values\strings.xml*).
- Rode o projeto com *react-native run-android*
