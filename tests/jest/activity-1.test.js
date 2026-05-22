const fs = require("fs");
const path = require("path");

const htmlPath = path.join(__dirname, "..", "..", "index.html");
const cssPath = path.join(__dirname, "..", "..", "assets", "css", "style.css");

describe("Actividad 1 - cambios globales de estilo", () => {
  const html = fs.readFileSync(htmlPath, "utf8");
  const css = fs.readFileSync(cssPath, "utf8");

  test("la pagina carga la hoja de estilos principal", () => {
    expect(html).toContain('./assets/css/style.css');
  });

  test("el body define una familia tipografica global", () => {
    expect(css).toMatch(/body\s*\{[\s\S]*font-family:\s*var\(--fontFamily-dm_sans\)/);
  });

  test("learning-page usa un fondo con gradiente", () => {
    expect(css).toMatch(/\.learning-page\s*\{[\s\S]*linear-gradient\(/);
  });

  test("existe una Activity 1 visible para practicar estilos", () => {
    expect(html).toContain("Actividad 1");
    expect(html).toContain("Trabajo en PP");
  });
});
