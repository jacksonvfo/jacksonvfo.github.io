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
        <div class='about-card-banner' id='about-card1'>\
          <div id='img-wall-wrapper'>\
            <div id='img-wall'>\
              <div class= 'vertical'></div>\
              <img class='about-card-list' id='wall1' src='../../img/ds3.jpg'/>\
              <img class='about-card-list' id='wall2' src='../../img/hardware.jpg'/>\
              <img class='about-card-list' id='wall3' src='../../img/physics.jpg'/>\
            </div>\
          </div>\
      </div>\
    </div>";


  document.getElementById('apresentacao').innerHTML = htmlElement;
  document.getElementById('apresentacao').style.setProperty('height', 'initial');

  eventListenersMouseClick();
}

async function eventListenersMouseClick() {
  let menu_about = document.querySelectorAll(".about-card-list");

  menu_about.forEach(function (elem) {
    elem.addEventListener("click", async function () {
      let about_content;

      if (elem.id === "wall1") {
        about_content =
          "<div id='about-outer-flex' class='outer-flex-bg-change1'>\
            <div class='about-card-banner' id='about-card1'>\
              <div id='img-wall-wrapper'>\
                <div id='img-wall'>\
                  <div class= 'vertical'></div>\
                  <img class='about-card-list ' id='wall1' src='../../img/ds3.jpg'/>\
                  <img class='about-card-list disabled' id='wall2' src='../../img/hardware.jpg'/>\
                  <img class='about-card-list disabled' id='wall3' src='../../img/physics.jpg'/>\
                </div>\
              </div>\
              <div id='about-text2' class='invisible-fast'>\
                <h3> Games </h3>\
                <p> Meu passatempo mais antigo. Uma boa jogabilidade, aliada a uma boa história,\
                fazem com que eu possa passar horas a fio imerso em um mundo a se explorar.\
                Meus gêneros favoritos são Action RPG, Corrida, Terror/horror e estratégia. </p>\
              </div>\
            </div>\
          </div>"

      }
      else if (elem.id === "wall2") {
        about_content =
          "<div id='about-outer-flex'  class='outer-flex-bg-change2'>\
            <div class='about-card-banner' id='about-card1'>\
              <div id='img-wall-wrapper'>\
                <div id='img-wall'>\
                  <div class= 'vertical'></div>\
                  <img class='about-card-list disabled' id='wall1' src='../../img/ds3.jpg'/>\
                  <img class='about-card-list ' id='wall2' src='../../img/hardware.jpg'/>\
                  <img class='about-card-list disabled' id='wall3' src='../../img/physics.jpg'/>\
                </div>\
              </div>\
              <div id='about-text2' class='invisible-fast'>\
                <h3> Hardware </h3>\
                <p> Como consequência dos games, veio o interesse por hardware de desktop.\
                Ja se passaram algumas noites em que fiquei estudando CPUs, GPUs e todo o\
                setup para encontrar a melhor combinação possível para as minhas necessidades.\
                Obviamente, descobrir porque a peça x é melhor que a y em combinação com a peça\
                z, é a parte mais divertida.</p>\
              </div>\
            </div>\
          </div>"
      }
      else if (elem.id === "wall3") {
        about_content =
          "<div id='about-outer-flex'  class='outer-flex-bg-change3'>\
            <div class='about-card-banner' id='about-card1'>\
              <div id='img-wall-wrapper'>\
                <div id='img-wall'>\
                  <div class= 'vertical'></div>\
                  <img class='about-card-list disabled' id='wall1' src='../../img/ds3.jpg'/>\
                  <img class='about-card-list disabled' id='wall2' src='../../img/hardware.jpg'/>\
                  <img class='about-card-list ' id='wall3' src='../../img/physics.jpg'/>\
                </div>\
              </div>\
              <div id='about-text2'  class='invisible-fast'>\
                <h3> Ciência </h3>\
                <p> Mas, nenhum passatempo me ensinou tanto quanto o de saciar minha curiosidade\
                sobre como o mundo funciona. Seja na forma mais elementar da matéria, seja em como\
                os fenômenos que vemos no dia a dia funcionam, ou até mesmo, como os eventos\
                mais extremos do universo ocorrem. Dado isso, é claro que física é um dos\
                meus assuntos preferidos.</p>\
              </div>\
            </div>\
          </div>"
      }

      if(document.getElementById('about-outer-flex') === null){
        document.getElementById('img-wall-wrapper').classList.add('reset-wall-position');
        document.getElementById('about-outer-flex2').style.setProperty('transition', 'background-color 0.3s linear');
        document.getElementById('about-outer-flex2').style.setProperty('background-color', '#07070A');

        await sleep(700);
      }

      document.getElementById('about-outer-flex2').innerHTML = about_content;
      await sleep(10);
      document.getElementById('about-text2').classList.replace('invisible-fast', 'visible-10-fast');

      eventListenersMouseClick();
    });
  });
}