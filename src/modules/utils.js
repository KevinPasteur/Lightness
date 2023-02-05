var convert = require("color-convert");

export function convertHSLToHEX(hsl) {
  return convert.hsl.hex(hsl);
}

export function convertHEXToHSL(hex) {
  return convert.hex.hsl(hex);
}

export function generatePalette(hex) {
  let palette = [];
  let [h, s] = convertHEXToHSL(hex);

  for (let index = 0; index <= 100; index += 10) {
    palette.push([h, s, index]);
  }

  return palette;
}

export function printShadow(hex) {
  let hsl = convertHEXToHSL(hex);

  return hsl[0] + "deg " + hsl[1] + "% " + hsl[2] + "%";
}
