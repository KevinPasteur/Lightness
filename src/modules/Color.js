import { convertHSLToHEX } from "./utils";

class Color {
  #hsl = [];
  #hex;
  #element;

  constructor(hsl) {
    this.#hsl = hsl;
    this.#hex = "#" + convertHSLToHEX(hsl);
    this.#element = this.#generateElement();
  }

  #generateElement() {
    const newDiv = document.createElement("div");
    newDiv.classList.add("color");
    newDiv.dataset.color = this.#hex;
    newDiv.style.backgroundColor = this.#hex;

    const newP = document.createElement("p");
    newP.style.color = this.#hsl[2] < 60 ? "#ffffff" : "#000000";
    newP.textContent = this.#hex;
    newDiv.appendChild(newP);

    return newDiv;
  }

  display(parentElement) {
    parentElement.appendChild(this.#element);
  }
}

export default Color;
