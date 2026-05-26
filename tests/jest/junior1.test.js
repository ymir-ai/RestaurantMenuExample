const fs = require("fs");
const path = require("path");

const starterPath = path.join(__dirname, "..", "..", "junior1", "index.html");
const resolvedPath = path.join(
  __dirname,
  "..",
  "..",
  "junior1",
  "resolved.html",
);
const readmePath = path.join(__dirname, "..", "..", "junior1", "README.md");

describe("Junior 1 - actividad de login con Tailwind", () => {
  const starterHtml = fs.readFileSync(starterPath, "utf8");
  const resolvedHtml = fs.readFileSync(resolvedPath, "utf8");
  const readme = fs.readFileSync(readmePath, "utf8");
  const roundedMatches =
    resolvedHtml.match(/rounded(?:-\[[^\]]+\]|-[a-z0-9/]+)/gi) || [];
  const forbiddenStylesheetPattern =
    /<link[^>]+rel=["']stylesheet["'][^>]*>|styles?\.css/i;

  test("el README explica el ejercicio y los criterios pedidos", () => {
    expect(readme).toContain("# Junior 1 - Login con Tailwind");
    expect(readme).toContain("resolved.html");
    expect(readme).toContain("minimo 4 elementos con bordes redondeados");
    expect(readme).toContain("login-message");
    expect(readme).toContain("hover, transicion suave y pequena escala");
    expect(readme).toContain("npm test");
  });

  test("la base de practica carga Tailwind por CDN y muestra una paleta entendible", () => {
    expect(starterHtml).toContain("https://cdn.tailwindcss.com");
  });

  test("la base incluye logo, labels, placeholders, required y boton", () => {
    expect(starterHtml).toContain('src="./logo.svg"');
    expect(starterHtml).toContain('for="username"');
    expect(starterHtml).toContain('for="password"');
    expect(starterHtml).toContain('placeholder="Ingresa tu usuario"');
    expect(starterHtml).toContain('placeholder="Ingresa tu contrasena"');
    expect(starterHtml).toContain("required");
    expect(starterHtml).toMatch(/>\s*Ingresar\s*</);
  });

  test("la version resuelta usa tarjeta centrada, rounded multiples y labels alineados", () => {
    expect(resolvedHtml).toContain(
      "min-h-[calc(100vh-4rem)] items-center justify-center",
    );
    expect(roundedMatches.length).toBeGreaterThanOrEqual(4);
    expect(resolvedHtml).toContain("sm:grid-cols-[120px,1fr]");
    expect(resolvedHtml).toContain("sm:text-right");
    expect(resolvedHtml).toContain('id="login-form"');
  });

  test("el logo es el primer elemento visual dentro del formulario", () => {
    expect(resolvedHtml).toMatch(
      /<form id="login-form"[\s\S]*?<img[\s\S]*?alt="Logo de YurtzCamp"/,
    );
  });

  test("la version resuelta define fondo, tipografias y evita overflow normal", () => {
    expect(resolvedHtml).toContain("bg-gradient-to-br");
    expect(resolvedHtml).toContain("font-sans");
    expect(resolvedHtml).toContain("font-serif");
    expect(resolvedHtml).toContain("font-mono");
    expect(resolvedHtml).toMatch(/text-4xl|md:text-5xl/);
    expect(resolvedHtml).toContain("overflow-hidden");
    expect(resolvedHtml).toContain("break-words");
  });

  test("el boton ingresar tiene transicion y efecto hover", () => {
    expect(resolvedHtml).toContain("transition duration-300");
    expect(resolvedHtml).toContain("hover:-translate-y-1");
    expect(resolvedHtml).toContain("hover:scale-[1.05]");
    expect(resolvedHtml).toContain("hover:bg-brand-accentDark");
  });

  test("la version resuelta agrega JavaScript para manejar el submit", () => {
    expect(resolvedHtml).toContain('form.addEventListener("submit"');
    expect(resolvedHtml).toContain('id="login-message"');
    expect(resolvedHtml).toContain("Bienvenido ${username}");
  });
});
