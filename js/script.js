import { about } from './modules/about.js';
import { contact } from './modules/contact.js';
import { tech } from './modules/tech.js';

window.mobileCheck = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

document.addEventListener('DOMContentLoaded', async function (event) {
  setTimeout(function () {
    document.getElementById('apresentacao').classList.add("change-bg-dark-grey");
  }, 300);

  if(window.mobileCheck()){
    document.getElementById('mobile-wrapper').classList.add("overlay-html");
  }

  mainPage();
});

async function mainPage() {
  let htmlElement = "<h1 id='initial-bar' class='welcome-element'> | </h1>\n"
    + "<h1 id='initial-text2' class='welcome-element'>Este é meu site pessoal</h1>";

  document.getElementById('apresentacao').innerHTML += htmlElement;

  await changeVisibility('initial-bar', 'visible-05', 1500);
  await changeVisibility('initial-text2', 'visible-05', 1000);
  await changeVisibility('initial-text2', 'invisible', 4000);
  await changeVisibility('initial-bar', 'invisible', 500);
  await changeVisibility('header-title', 'invisible', 500);

  await sleep(1000);

  removeElementByClass('welcome-element');

  renderCards();

  let cards = document.querySelectorAll(".card");
  let menu = document.querySelectorAll(".menu-item");

  cards.forEach(function (elem) {
    elem.addEventListener("click", async function () {
      await changeVisibility('card3', 'invisible', 200);
      await changeVisibility('card2', 'invisible', 200);
      await changeVisibility('card1', 'invisible', 200);

      await sleep(1000);
      removeElementByClass('card');

      if (elem.id === "card3") { contact();
        changeVisibility('contact', 'visible-10', 100); }
      else if (elem.id === "card2") { tech();
        changeVisibility('tech', 'visible-10', 100); }
      else if (elem.id === "card1") { about();
        changeVisibility('about', 'visible-10', 100); }
    });
  });

  menu.forEach(function (elem) {
    elem.addEventListener("click", async function () {
      document.getElementById('apresentacao').classList.toggle('invisible-fast');
      await sleep(150);
      document.getElementById('apresentacao').style.setProperty('height', '100vh');

      if (elem.id === "menu-contact") {
        contact();
        changeVisibility('contact', 'visible-10', 100);
      }
      else if (elem.id === "menu-tech") {
        tech();
        changeVisibility('tech', 'visible-10', 100);
      }
      else if (elem.id === "menu-about") {
        about();
        changeVisibility('about', 'visible-10', 100);
      }
      await sleep(200);
      document.getElementById('apresentacao').classList.toggle('invisible-fast');
    }); 
  });

  changeVisibility('card1', 'visible-10', 700);
  changeVisibility('card2', 'visible-10', 900);
  changeVisibility('card3', 'visible-10', 1200);
}

function renderCards() {
  document.getElementById('apresentacao').innerHTML =
    "<div class='card' id='card1'>\
      <h1>sobre</h1>\
      <i class='material-icons icon-card' id='icon-about'>account_circle</i>\
     </div>\
     <div class='card' id='card2'>\
      <h1>tecnologias</h1>\
      <i class='material-icons icon-card' id='icon-tech'>code</i>\
     </div>\
     <div class='card' id='card3'>\
      <h1>contato</h1>\
      <i class='material-icons icon-card' id='icon-contact'>phone</i>\
     </div>";
}

async function changeVisibility(elementID, visibility, time) {
  await sleep(time);

  let element = document.getElementById(elementID);
  element.classList.add(visibility);
}

function addElement(rootElement, content) {
  let element = document.getElementById(rootElement);
  element.innerHTML += content;
}

async function removeElementById(element) {
  await sleep(1000);
  document.getElementById(element).remove();
}

async function removeElementByClass(element) {
  let elements = document.getElementsByClassName(element);
  while (elements.length > 0) elements[0].remove();
}

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
