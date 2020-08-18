function addElement(rootElement, content) {
  let element = document.getElementById(rootElement);
  element.innerHTML += content;
}

function removeElement(childId, rootElement) {
  setTimeout(function () {
    rootElement[childId].remove();
  }, 2000);
}

export {addElement, removeElement};