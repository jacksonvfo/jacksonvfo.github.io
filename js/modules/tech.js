import { sleep } from '../script.js';

export async function tech() {

  let htmlElement =
    "<div id='tech'>\
      <div id='tech-content-wrapper'>\
        <div class='tech-button' id='js'> JS </div>\
        <div class='tech-button' id='uxui'> UX/UI </div>\
        <div class='tech-button' id='react'> React </div>\
        <div class='tech-button' id='type'> TS </div>\
        <div class='tech-button' id='css'> CSS </div>\
        <div class='tech-button' id='node'> Node.js </div>\
        <div class='tech-button' id='docker'> Docker </div>\
        <div class='tech-button' id='microservices'> Microservices </div>\
        <div class='tech-button' id='db'> Database </div>\
        <div class='tech-button' id='java'> Java </div>\
        <div id='screen'>\
          \
        </div>\
      </div>\
    </div>";

  document.getElementById('apresentacao').innerHTML = htmlElement;



  let menu = document.querySelectorAll(".tech-button");

  menu.forEach(function (elem) {
    elem.addEventListener("mouseover", async function () {
      
      document.getElementById('screen').classList.add('shadow');
      await sleep(50);

      if (elem.id === "js") {
        document.getElementById('screen').innerHTML =
          "<span id='icon-wrapper' class='neumorphism-disabled'>\
            <img class='icon-tech' src='../../img/javascript.png'/>\
          </span>\
          <div id='tech-text'>\
            <h3 id='screen-title'>Javascript</h3>\
            <p id='screen-paragrath'> Obrigatório no desenvolvimento fullstack,\
             permite o uso de uma linguagem só em todas as áreas da aplicação\
              seja no front, back e até na database. Depois do C, foi a primeira\
              linguagem com a qual tive contato e de imediato ja gostei da\
              manipulação do DOM que ela proporciona.</p>\
          </div>\
          ";
      }
      else if (elem.id === "type") {
        document.getElementById('screen').innerHTML =
          "<span id='icon-wrapper' class='neumorphism-disabled'>\
            <img class='icon-tech' src='../../img/typescript.png'/>\
          </span>\
          <div id='tech-text'>\
            <h3 id='screen-title'>Typescript</h3>\
            <p id='screen-paragrath'> Evolução natural do JS, ajuda muito\
             principalmente na verificação de tipos, evitando muito código.\
             Está na minha lista atual de estudos.</p>\
          </div>\
        ";
      }
      else if (elem.id === "react") {
        document.getElementById('screen').innerHTML =
          "<span id='icon-wrapper' class='neumorphism-disabled'>\
            <img class='icon-tech' src='../../img/react.png'/>\
          </span>\
          <div id='tech-text'>\
            <h3 id='screen-title'>React.js</h3>\
            <p id='screen-paragrath'>Um dos frameworks mais importantes quando se\
            trata de front-end na atualidade. Ainda estou no meio dos estudos\
            de react, mas posso dizer que gostei da forma de que o código é escrito.\
            Estou usando no meu TCC junto com o React Native.</p>\
          </div>\
        ";
      }
      else if (elem.id === "css") {
        document.getElementById('screen').innerHTML =
          "<span id='icon-wrapper' class='neumorphism-disabled'>\
            <img class='icon-tech' src='../../img/css.png'/>\
          </span>\
          <div id='tech-text'>\
            <h3 id='screen-title'>CSS</h3>\
            <p id='screen-paragrath'>Aprecio bastante 'brincar' com o CSS. Atualmente\
              estou estudando e tendo algum domínio inicial da Flexbox e do \
              sistema de grid. Não acho que os pré-processadores sejam tão importantes\
              aqui, principalmente pelas novas tendências de styled components,\
               mas ainda devo estuda-los em um futuro próximo.</p>\
          </div>\
        ";
      }
      else if (elem.id === "uxui") {
        document.getElementById('screen').innerHTML =
          "<span id='icon-wrapper' class='neumorphism-disabled'>\
            <img class='icon-tech' src='../../img/web-design.png'/>\
          </span>\
          <div id='tech-text'>\
            <h3 id='screen-title'>UI/UX DESIGN</h3>\
            <p id='screen-paragrath'>Tenho estudado frameworks de web design, tal como\
               o material design, neumorfismo e o fluent design. O objetivo é sempre\
               buscar pela experiência mais intuitiva para o usuário e também, \
               buscar uma identidade nos projetos através do look and feel.\
               Gosto bastante de trabalhar com efeitos de iluminação dos elementos.</p>\
          </div>\
        ";
      }
      else if (elem.id === "node") {
        document.getElementById('screen').innerHTML =
          "<span id='icon-wrapper' class='neumorphism-disabled'>\
            <img class='icon-tech' src='../../img/nodejs.png'/>\
          </span>\
          <div id='tech-text'>\
            <h3 id='screen-title'>Node.js</h3>\
            <p id='screen-paragrath'>Mais recentemente comecei a usar o node.js\
            para a criação de API express com o axios. Além da agilidade de setup,\
            usar a mesma linguagem no back-end reduziu um pouco a curva de\
            aprendizado.</p>\
          </div>\
        ";
      }
      else if (elem.id === "docker") {
        document.getElementById('screen').innerHTML =
          "<span id='icon-wrapper' class='neumorphism-disabled'>\
            <img class='icon-tech' src='../../img/docker.png'/>\
          </span>\
          <div id='tech-text'>\
            <h3 id='screen-title'>Docker</h3>\
            <p id='screen-paragrath'>Uma tecnologia que facilita muito o gerenciamento\
            de microservices, junto com o kubernetes. A economia de recursos usando\
            um alpine linux para definir cada microservice é esmagadora perto das \
            maquinas virtuais</p>\
          </div>\
        ";
      }
      else if (elem.id === "microservices") {
        document.getElementById('screen').innerHTML =
          "<span id='icon-wrapper' class='neumorphism-disabled'>\
            <img class='icon-tech' src='../../img/ms.png'/>\
          </span>\
          <div id='tech-text'>\
            <h3 id='screen-title'>Microservices</h3>\
            <p id='screen-paragrath'>Multiplos micro-programas com alta coesão e\
            baixo acoplamento. Eu acharia impensável fazer isso sozinho a uns anos\
             atras. Porém, o docker e o node.js cairam aqui como uma luva, me permitindo\
             desenvolver com essa arquitetura e fazer deploy em uma máquina pessoal bem\
             limitada.</p>\
          </div>\
        ";
      }
      else if (elem.id === "db") {
        document.getElementById('screen').innerHTML =
          "<span id='icon-wrapper' class='neumorphism-disabled'>\
            <img class='icon-tech' src='../../img/database.png'/>\
          </span>\
          <div id='tech-text'>\
            <h3 id='screen-title'>Database</h3>\
            <p id='screen-paragrath'>Usei diversos bancos, relacionais e não relacionais\
            em uma unica aplicação. A chamada persistência poliglota. Redis para sessão,\
            postgres ou oracle em grandes projetos para dados relacionais e mongo para\
            outros dados não fortemente relacionados</p>\
          </div>\
        ";
      }
      else if (elem.id === "java") {
        document.getElementById('screen').innerHTML =
          "<span id='icon-wrapper' class='neumorphism-disabled'>\
            <img class='icon-tech' src='../../img/java.png'/>\
          </span>\
          <div id='tech-text'>\
            <h3 id='screen-title'>Java</h3>\
            <p id='screen-paragrath'>É a linguagem em que aprendi a orientação a\
            objetos, estruturas de dados e alguns design patterns. Uma linguagem\
             que mesmo não sendo 'moda' é uma das mais fortes do mundo por décadas e\
             ainda não demonstra sinal algum de cansaço.</p>\
          </div>\
        ";
      }

      await sleep(250);
      document.getElementById('screen').classList.remove('shadow');
      await sleep(50);
      document.getElementById('icon-wrapper').classList.remove('neumorphism-disabled');
    });
  })
};
