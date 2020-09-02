import { sleep } from '../script.js';

export async function about() {

  let htmlElement =
    "<div id='about'>\
      <div id='about-inner-flex'>\
      <div id='about-title'>\
      <h1> Jackson Oliveira </h1>\
      <p id='about-text1'> 21 anos. Sou um Webdeveloper e webdesigner residente em Toledo/PR. \
       Atualmente trabalhando em projetos com React.js e Native, Node.js, persistencia poliglota e \
       estudando orientações e técnicas de design (este site está sendo feito com css e js puros).</p>\
      </div>\
      <div id='about-img'>\
      </div>\
      </div>";

  htmlElement +=
    "<div id='about-outer-flex2'>\
      <div id='about-outer-flex'>\
        <div class='about-card-banner'>\
          <div id='img-wall-wrapper'>\
            <div id='img-wall'>\
              <div >\
                <div id='backdrop1' class='noise backdrop'></div>\
                <div class='card-container' id='backdrop-origin1'>\
                  <div class='about-card-header'>\
                    <img class='about-card-list' id='wall1' src='../../img/ds3.jpg'/>\
                    <div class='about-card-header-text'>\
                      <h3> Games </h3>\
                      <p> 4K : on </p>\
                      <p> 60FPS : on </p>\
                      <p> Ultra : on </p>\
                    </div>\
                  </div>\
                  <div class='about-card-text'>\
                    <div id='about-text2' class='about-text'>\
                      <p> Meu passatempo mais antigo. Uma boa jogabilidade, aliada a uma boa história,\
                      fazem com que eu possa passar horas a fio imerso em um mundo a se explorar.\
                      Meus gêneros favoritos são Action RPG, Corrida, Terror/horror e estratégia. </p>\
                    </div>\
                  </div>\
                </div>\
              </div>\
              <div >\
                <div  id='backdrop2' class='noise backdrop'></div>\
                <div class='card-container' id='backdrop-origin2'>\
                  <div class='about-card-header'>\
                    <img class='about-card-list ' id='wall2' src='../../img/hardware.jpg'/>\
                    <div class='about-card-header-text'>\
                      <h3> Hardware </h3>\
                      <p> Meu amigo, </p>\
                      <p> isso ai vai gargalar </p>\
                    </div>\
                  </div>\
                  <div class='about-card-text'>\
                    <div id='about-text3' class='about-text'>\
                      <p> Como consequência dos games, veio o interesse por hardware de desktop.\
                      Ja se passaram algumas noites em que fiquei estudando CPUs, GPUs e todo o\
                      setup para encontrar a melhor combinação possível para as minhas necessidades.\
                      Obviamente, descobrir porque a peça x é melhor que a y em combinação com a peça\
                      z, é a parte mais divertida.</p>\
                    </div>\
                  </div>\
                </div>\
              </div>\
              <div>\
                <div id='backdrop3' class='noise backdrop'></div>\
                <div class='card-container' id='backdrop-origin3'>\
                  <div class='about-card-header'>\
                    <img class='about-card-list' id='wall3' src='../../img/physics.jpg'/>\
                    <div class='about-card-header-text'>\
                      <h3> Ciência </h3>\
                      <p> Cara, eu to falando, </p>\
                      <p> tinha um gato vivo </p>\
                      <p> nessa caixa </p>\
                    </div>\
                  </div>\
                  <div class='about-card-text'>\
                    <div id='about-text4' class='about-text'>\
                      <p> Nenhum hobby me ensinou tanto quanto o de saciar minha curiosidade\
                      de como o mundo funciona. Seja em como\
                      os fenômenos que vemos no dia a dia funcionam, ou até mesmo, como os eventos\
                      mais extremos do universo ocorrem..</p>\
                    </div>\
                  </div>\
                </div>\
              </div>\
            </div>\
          </div>\
        </div>\
      </div>\
    </div>";


  document.getElementById('apresentacao').innerHTML = htmlElement;
  document.getElementById('apresentacao').style.setProperty('height', 'initial');

}

async function eventListenersMouseClick() {
  
}