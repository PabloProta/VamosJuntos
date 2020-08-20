# VamosJuntos
Esse repositório tem como objetivo auxiliar quem está tendo dificuldades em iniciar os estudos com react-native.   Até o momento desenvolvi uma tela de autentificação  que faz login via social (google e facebook) e por email e senha. A Princípio o app tem uma tela inicial que será feito o login, uma tela para registrar um novo usuário , caso ele não faça login através dos meios sociais, e a tela de BoasVindas.  Lembrando que não vou me aprofundar em que ferramentas eu utilizei para estilizar meu app, ou outros detalhes desse tipo,  mas sim mostrar , somente, o que foi necessário para fazer o processo de autentificação.
Vale ressaltar que sou um estudante e não tenho nenhuma especialização no assunto mas com o pouco que pesquisei consegui desenvolver este projeto.


## Primeiros passos
### Navegação
Para fazer a navegação entre tela foi utlizado uma  API do React_native (Stack Navigator) que permite que eu navegue entre as telas, fiz algumas alterações de estilização e locomoção, clicando [aqui](https://reactnavigation.org/docs/getting-started) você poderá ver o guia de instalação e a utilização .

### Auth
Para isso eu utilizei duas api ( por enquanto ) do firebase uma para permitir o login via conta google e outra para fazer o login e cadastro tradicionalmente, não vou me aprofundar nisso pois só queria mostrar o funcionamento, se conseguirem baixar a pasta ou o apk deste aplicativo vão poder utlizar normalmente sem precisar de uma conta no firebase,já que neste projeto estou utilizando minha conta,  basta conexão com internet.  Todas as informações podem ser econtradas no site do [firebase](https://firebase.google.com/docs/auth) ou [aqui](https://rnfirebase.io/auth/usage).


## TELAS

### Telas Login

<img src="https://github.com/PabloProta/VamosJuntos/blob/master/inicio.gif" width="280" height="500" />

#### com google

<img src="https://github.com/PabloProta/VamosJuntos/blob/master/google.gif" width="280" height="500" />

#### com email 

<img src="https://github.com/PabloProta/VamosJuntos/blob/master/email_senha.gif" width="280" height="500" />

#### Tela de Cadastro

<img src="https://github.com/PabloProta/VamosJuntos/blob/master/cadastro.gif" width="280" height="500" />

### Tela de Boas Vindas

Aqui eu loguei com minha conta que eu utlizo no dia dia.

<img src="https://github.com/PabloProta/VamosJuntos/blob/master/Logado.png" width="280" height="500" />

## Versões
Node: v12.16.3
React-Native: 0.62.2
NPM: 6.14.4
yarn: 1.22.4



## Considerações finais
Como falado anteriormente sou um estudande e o projeto desenvolvido em questão pode servir como guia para quem não tem ideia por onde começar.
Todas as bibliotecas que eu baixei podem ser encontradas no package.json. , pode ser que dependendo da versão que for utilizar do react-native ou do node, pode ocorrer de não funcionar corretamente ou até não rodar,  por isso ***verifique as versões de cada um***.
Ressaltando que toda ajuda e feedbacks são bem aceitos, o intuito também é poder melhorar o projeto, então quem desejar colaborar  sera muito bem vindo.


