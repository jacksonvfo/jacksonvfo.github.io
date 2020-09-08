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
          </div>\
        </div>\
        <div id='transparent-background' class='noise'></div>\
      </div>\
    </div>";

  document.getElementById('apresentacao').innerHTML = htmlElement;
};