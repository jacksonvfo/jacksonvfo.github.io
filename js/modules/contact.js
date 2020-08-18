import { sleep } from '../script.js';

export async function contact() {
  
  let htmlElement =
    "<div id='contact'>\
      <img src='../../img/contact.jpg'/>\
      <div id='fluent-container'>\
        <form id='contact-content' method='post'>\
          <div id='transparent-area'>\
            <h2>Entre em contato comigo</h2>\
            <div id='not-message-wrapper' class='form-item'>\
              <div>\
              <input type='hidden' name='contact_number'>\
              <label for='name'>nome</label>\
              <input id='name-input' type='text' name='name' autocomplete='off' autofocus required>\
              </div>\
              <div>\
              <label for='email'>email</label>\
              <input id='email-input' type='email' name='email' required>\
              </div>\
            </div>\
            <div id='message-wrapper' class='form-item'>\
              <textarea  id='message-input'  name='message' rows='5' columns='50' autocomplete='off required'\
              placeholder='\n\ndeixe sua mensagem aqui'></textarea>\
            </div>\
            <div id='submit-button' class='form-item'>\
              <button type='submit' name='submit-button'>Enviar</button>\
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
        </form>\
        <div id='transparent-background' class='noise'></div>\
      </div>\
    </div>";

  document.getElementById('apresentacao').innerHTML = htmlElement;

  await sleep(100);

  
  document.getElementById('contact-content').addEventListener('submit', async function(event) {
    event.preventDefault();

    try{    
      this.contact_number.value = Math.random() * 100000 | 0;
      returned = await emailjs.sendForm('gmail', 'template_PkCjE1vS', this);
        console.log(returned);
      if (returned === 400){
        throw(error);
      }
    } catch{
      document.getElementById('email-confirmation').innerHTML = "<p>Houve algum problema</p>";
      document.getElementById('email-confirmation').style.setProperty('background-color', '#FF5555');
    }

    
    document.getElementById('name-input').value = '';
    document.getElementById('email-input').value = '';
    document.getElementById('message-input').value = '';

    
    document.getElementById('email-confirmation').classList.replace('hidden', 'moveIn');

    await sleep(2500);

    document.getElementById('email-confirmation').classList.replace('moveIn', 'moveOut');
    await sleep(500);

    document.getElementById('email-confirmation').classList.replace('moveOut', 'hidden');
  });
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