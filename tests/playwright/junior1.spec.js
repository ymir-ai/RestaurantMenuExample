const { test, expect } = require("@playwright/test");

test.describe("Junior 1 - login con Tailwind", () => {
  test("la pagina base explica la actividad", async ({ page }) => {
    await page.goto("/junior1/index.html");

    await expect(page.getByText("Actividad junior 1")).toBeVisible();
    await expect(page.getByRole("heading", { name: "Maqueta un login con Tailwind CSS" })).toBeVisible();
    await expect(page.getByText("Base para practicar")).toBeVisible();
    await expect(page.getByText("Paleta sugerida")).toBeVisible();
  });

  test("resolved.html muestra el login completo", async ({ page }) => {
    await page.goto("/junior1/resolved.html");

    await expect(page.getByRole("heading", { name: "Iniciar sesion" })).toBeVisible();
    await expect(page.getByLabel("Usuario")).toBeVisible();
    await expect(page.getByLabel("Contrasena")).toBeVisible();
    await expect(page.getByRole("button", { name: "Ingresar" })).toBeVisible();
    await expect(page.getByAltText("Logo de YurtzCamp")).toBeVisible();

    const firstChildTag = await page.locator("#login-form > :first-child").evaluate((el) => el.tagName);
    expect(firstChildTag).toBe("IMG");

    const firstFieldRow = page.locator("form > div").nth(1);
    const secondFieldRow = page.locator("form > div").nth(2);
    await expect(firstFieldRow).toHaveClass(/sm:grid-cols-\[120px,1fr\]/);
    await expect(secondFieldRow).toHaveClass(/sm:grid-cols-\[120px,1fr\]/);
  });

  test("resolved.html usa fondo definido, rounded multiples y boton con hover suave", async ({ page }) => {
    await page.goto("/junior1/resolved.html");

    const bodyClass = await page.locator("body").getAttribute("class");
    expect(bodyClass).toContain("bg-gradient-to-br");

    const roundedCount = await page.locator('[class*="rounded"]').count();
    expect(roundedCount).toBeGreaterThanOrEqual(4);

    const buttonClass = await page.getByRole("button", { name: "Ingresar" }).getAttribute("class");
    expect(buttonClass).toContain("transition");
    expect(buttonClass).toContain("hover:scale-[1.05]");
  });

  test("resolved.html usa placeholders, required y evita overflow horizontal normal", async ({ page }) => {
    await page.goto("/junior1/resolved.html");

    await expect(page.getByPlaceholder("carlos.dev")).toBeVisible();
    await expect(page.getByPlaceholder("********")).toBeVisible();

    const usernameRequired = await page.locator("#username").getAttribute("required");
    const passwordRequired = await page.locator("#password").getAttribute("required");
    expect(usernameRequired).toBe("");
    expect(passwordRequired).toBe("");

    const hasHorizontalOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    expect(hasHorizontalOverflow).toBe(false);
  });

  test("resolved.html responde al submit con un mensaje de bienvenida", async ({ page }) => {
    await page.goto("/junior1/resolved.html");

    await page.getByLabel("Usuario").fill("Carlos");
    await page.getByLabel("Contrasena").fill("123456");
    await page.getByRole("button", { name: "Ingresar" }).click();

    await expect(page.getByRole("status")).toContainText("Bienvenido Carlos");
  });
});
