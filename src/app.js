import Color from "./modules/Color";
import {
  generatePalette,
  convertHSLToHEX,
  printShadow,
} from "../src/modules/utils";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

const formElement = document.querySelector("form");
const mainElement = document.querySelector("main");
const headerElement = document.querySelector("header");
const bodyElement = document.querySelector("body");
const root = document.documentElement;
let hex;
const notyf = new Notyf();

const myFunction = (e) => {
  e.preventDefault();

  hex = e.target.querySelector("input").value;

  if (/^#[0-9A-F]{6}$/i.test(hex)) {
    displayColors(generatePalette(hex));
  } else {
    notyf.error(hex + "is not a valid Hexadecimal color.");
  }
};

mainElement.addEventListener("click", function (e) {
  if (e.target.tagName == "DIV") {
    navigator.clipboard.writeText(e.target.dataset.color).then(
      function () {
        notyf.success(`copied ${e.target.dataset.color} to clipboard`);
      },
      function () {}
    );
  }
});

const displayColors = (palette) => {
  let gradient =
    "linear-gradient(-45deg,#" +
    convertHSLToHEX(palette[1]) +
    ",#" +
    convertHSLToHEX(palette[5]) +
    ",#" +
    convertHSLToHEX(palette[9]) +
    ")";

  headerElement.classList.add("minimized");
  mainElement.textContent = "";
  bodyElement.style.background = gradient;
  bodyElement.style.backgroundSize = `400% 400%`;

  root.style.setProperty("--shadow-color", printShadow(hex));

  palette.forEach((hsl) => {
    const color = new Color(hsl);
    color.display(mainElement);
  });
};

formElement.addEventListener("submit", myFunction);
