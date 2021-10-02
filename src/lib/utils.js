
export function hideElement(element) {
  element.innerHTML = "";
  element.classList.add("display-none");
  element.classList.remove("display");
}

export function displayElement(element) {
  element.classList.add("display");
  element.classList.remove("display-none");
}

export function showToastr(message = "", showTime = 3000, toastrDivId = "toastr-title") {

  const element = document.getElementById(toastrDivId);

  hideElement(element);
  createTextElement(element, message);
  displayElement(element);

  setTimeout(() => {
    hideElement(element);
  }, showTime);
}

export function autoSelectInput(id) {
  const element = document.getElementById(`${id}`);
  if (typeof(element) != 'undefined' && element != null) {
    element.select()
  }
}

export function autoFocus(id) {
  const element = document.getElementById(`${id}`);
  if (typeof(element) != 'undefined' && element != null) {
    element.focus()
  }
}