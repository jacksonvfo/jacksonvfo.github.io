import { sleep } from '../script.js';

export async function contact() {
  
  let htmlElement =
    "<div id='contact'>\
      <img src='../../img/contact.jpg'/>\
      <div id='fluent-container'>\
        <div id='contact-content'>\
          <div id='transparent-area'>\
            <h2>Entre em contato comigo</h2>\
            <h4>Ficarei feliz em te responder :D</h4>\
            <div id='contact-text'>\
              <h5>PS: a não ser que você queira falar sobre esquemas de pirâmide</h5>\
            </div>\
          </div>\
          <div id='black-background'>\
            <div id='linkedin' class='contact-icons'>\
              <a href='https://www.linkedin.com/in/jacksonvfo/' target='_blank'>\
                <img src='https://img.icons8.com/ios/72/linkedin.png' />\
              </a>\
            </div>\
            <div id='gmail' class='contact-icons'>\
              <img id='gmail-img' src='https://img.icons8.com/ios-filled/72/gmail.png' />\
              <p id='gmail-p' class='hidden'> jacksonvfo@gmail.com </p>\
            </div>\
            <div id='whats' class='contact-icons'>\
              <img id='whats-img' src='https://img.icons8.com/ios/72/whatsapp.png' />\
              <p id='whats-p' class='hidden'> +55 45 99929-8962 </p>\
            </div>\
          </div>\
        </div>\
        <div id='transparent-background' class='noise'></div>\
      </div>\
    </div>";

  document.getElementById('apresentacao').innerHTML = htmlElement;

  eventListenersMouseOver();
};

async function eventListenersMouseOver() {
  let contact_icons = document.querySelectorAll(".contact-icons");

  contact_icons.forEach(function (elem) {
    elem.addEventListener("mouseover", async function () {
      if(elem.id==='gmail'){
        document.getElementById('gmail-img').classList.add('moveOut');
        await sleep(500);
        document.getElementById('gmail-img').classList.replace('moveOut', 'hidden');

        document.getElementById('gmail-p').classList.replace('hidden', 'moveIn');

      } else if(elem.id==='whats'){
        document.getElementById('whats-img').classList.add('moveOut');
        await sleep(500);
        document.getElementById('whats-img').classList.replace('moveOut', 'hidden');

        document.getElementById('whats-p').classList.replace('hidden', 'moveIn');
      }  
    });
  });

}