# VamosJuntos
Esse repositório tem como objetivo auxiliar quem está tendo dificuldades em iniciar os estudos com react-native.   Até o momento desenvolvi uma tela de autentificação  que faz login via social (google e facebook) e por email e senha. A Princípio o app tem uma tela inicial que será feito o login, uma tela para registrar um novo usuário , caso ele não faça login através dos meios sociais, e a tela de BoasVindas.  Lembrando que não vou me aprofundar em que ferramentas eu utilizei para estilizar meu app, ou outros detalhes desse tipo,  mas sim mostrar , somente, o que foi necessário para fazer o processo de autentificação.
Vale ressaltar que sou um estudante e não tenho nenhuma especialização no assunto mas com o pouco que pesquisei consegui desenvolver este projeto.


## Primeiros passos
### Navegação
Para fazer a navegação entre tela foi utlizado uma  API do React_native (Stack Navigator) que permite que eu navegue entre as telas, fiz algumas alterações de estilização e locomoção, clicando [aqui](https://reactnavigation.org/docs/getting-started) você poderá ver o guia de instalação e a utilização .

### Auth
Para isso eu utilizei duas api ( por enquanto ) do firebase uma para permitir o login via conta google e outra para fazer o login e cadastro tradicionalmente, não vou me aprofundar nisso pois só queria mostrar o funcionamento, se conseguirem baixar a pasta ou o apk deste aplicativo vão poder utlizar normalmente sem precisar de uma conta no firebase,já que neste projeto estou utilizando minha conta,  basta conexão com internet.  Todas as informações podem ser econtradas no site do [firebase](https://firebase.google.com/docs/auth) ou [aqui](https://rnfirebase.io/auth/usage).


## TELAS

### Tela Inicial
<img src="https://github.com/PabloProta/VamosJuntos/blob/master/Login.png" width="280" height="500" />

### Tela de Cadastro
<img src="https://github.com/PabloProta/VamosJuntos/blob/master/Inscrição.png" width="280" height="500" />

### Tela de Boas Vindas
<img src="https://github.com/PabloProta/VamosJuntos/blob/master/Logado.png" width="280" height="500" />
