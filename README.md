
<!-- Title -->

<p align="center">
  <h2 align="center">He4rtoberfest 2022</h2>
</p>
    
 <!-- ABOUT THE PROJECT -->


## Sobre o Projeto
Sejam todos bem vindos a segunda edição do He4rtoberfest, evento da He4rt Developers para incentivar novos desenvolvedores a participar do Hacktoberfest pela DigitalOcean e aprender um pouco mais sobre a ideia do open source.

A ideia da He4rt Developers sempre foi a inclusão dos mais iniciantes na área e iremos focar em trazer essa inclusão para o Hacktoberfest! Se liga:

A ideia se baseia em pegar exercicios de faculdade, desde o mais simples até o mais complexo e fazer nas mais variadas linguagens e assim deixando uma biblioteca gigante de conhecimento para novos universitários mostrando a maior quantidade de jeitos possíveis de resolver o mesmo problema.
## 
<!-- ROADMAP OF PROJECT -->

## Exercicios disponíveis

Na lista abaixo estarão todos os exercicios que iremos aceitar nos nossos pull request. 

- [0 - Hello World (não irá contar)](./challenges/0-hello-world/readme.md)
- [1 - Produto Simples](./challenges/1-produto-simples/readme.md)
- [2 - Idade em Dias](./challenges/2-idade-em-dias/readme.md)
- [3 - Tipos de Triângulo](./challenges/3-tipos-de-triangulo/readme.md)
- [4 - Fizz Buzz](./challenges/4-fizz-buzz/readme.md)
- [5 - Cobaias](./challenges/5-cobaias/readme.md)
- [6 - Converter Segundos](./challenges/6-converter-segundos/readme.md)
- [7 - Jokenpo Nerd](./challenges/7-jokenpo-nerd/readme.md)

Caso você queira dar sugestões de desafios, contate algum moderador no [Discord da He4rt](https://discord.gg/he4rt).
  
<!-- CONTRIBUTING -->

## Como participar

Contribuições fazem com que a comunidade open source seja um lugar incrível para aprender, inspirar e criar. Todas contribuições
são **extremamente apreciadas**

Porém, como esse será um evento, haverão algumas regras a serem seguidas para que você seja aprovado e não é nada complexo. Entenda:

- Para que você tenha um Pull Request (PR) aprovado vinculado ao Hacktoberfest, você terá que fazer um PR do **desafio 0** (Hello World);
- Caso você faça os outros desafios e não faça o Hello World, seu PR não será aprovado enquanto não fizer o desafio inicial.

A ideia do desafio 0 é deixar registrado todos os participantes do He4rtoberfest, e por isso será obrigatório.

Quando você for criar a branch para mandar o Pull Request, você deverá seguir o exemplo abaixo:

1. Realize um Fork do projeto
2. Vá até o repositório do fork no seu github e na parte code copie o link para clonar (HTTPS ou SSH)
3. Abra o terminal, escolha uma pasta de sua preferência e faça um clone git clone cole o link que você copiou
4. Crie uma pasta da linguagem que você escolheu no diretório `challenges/id_challenge/lang/`
5. Depois dentro desta pasta lang crie a pasta com seu nickname ficando assim `challenges/id_challenge/lang/nickname`
6. Resolva o desafio
7. Copie o model.md para a sua pasta, preencha com as informações descritas e renomeie o arquivo para **README.MD**
8. Crie um branch com o desafio seguindo o modelo ao lado `(git checkout -b challenges/id_challenge/lang/nickname)`
9. O exemplo acima ficaria assim do desafio 0 feito em PHP: `(git checkout -b challenges/0/php/danielhe4rt)`
10. Depois faça `git add .`
11. Realize o Commit `(git commit -m 'Finalizando o desafio')`
12. Realize o Push no Branch `(git push origin challenges/id_challenge/lang/nickname)`
13. Abra um Pull Request

## Revisão de Pull Requests

Como o nosso objetivo será dar a melhor experiência possível para o participante, nós iremos ter algumas regras básicas de revisão de código para que seja uma experiência interessante para quem está aplicando o desafio, sendo elas:

- Reforçar uma leitura de código e tipagem quando possível;
- Erros de digitação/gramaticais e nomes de variáveis sem um contexto, tais como [a,b,c,x,y,z] deverão ser pedidas alterações;
- Isolamento de funções quando necessário também poderá ser requisitado.

Qualquer dúvida, poderá ir o nosso [banco de dúvidas](https://github.com/he4rt/he4rtoberfest-2022/issues) e perguntar.

## Atualizando o seu fork

Caso esse repositório seja atualizado com novos exercícios você precisa atualizar seu fork

```bash
# 1. Mudar para a branch main
git checkout main
# 2. Checar se sua cópia local tem o link do original
git remote -v
# 3. Se não, adicione o link do original
git remote add upstream git@github.com:he4rt/he4rtoberfest-2022.git 
# ou 
git remote add upstream https://github.com/he4rt/he4rtoberfest-2022.git 
# 4. Confirme se o link foi adicionado
git remote -v
# 5. Agora você pode fazer o fetch com o repo original, assumindo que o nome do link é 'upstream'
git fetch upstream
# 6. Fazer merge dos updates para sua branch main
git merge upstream/main main 
# 7. Realizar o push para seu fork com as novas mudanças 
git push origin main
```

## Materiais complementares

- [**Git4Noobs**](https://github.com/danielhe4rt/git4noobs)
- [**Aprendendo sobre Git e Github**](https://www.youtube.com/watch?v=_LNWekPPS9w)

