const { test, expect } = require("@playwright/test");

test.describe("Actividad 1 - practica de estilos globales", () => {
  test("la pagina muestra la tarjeta de Actividad 1", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByText("Actividad 1")).toBeVisible();
    await expect(page.getByRole("heading", { name: "Trabajo en PP" })).toBeVisible();
  });

  test("el fondo de la pagina usa un gradiente computado", async ({ page }) => {
    await page.goto("/");

    const backgroundImage = await page.locator("body").evaluate((el) => {
      return window.getComputedStyle(el).backgroundImage;
    });

    expect(backgroundImage).not.toBe("none");
    expect(backgroundImage).toContain("gradient");
  });

  test("la familia tipografica global no queda vacia", async ({ page }) => {
    await page.goto("/");

    const fontFamily = await page.locator("body").evaluate((el) => {
      return window.getComputedStyle(el).fontFamily;
    });

    expect(fontFamily).toBeTruthy();
    expect(fontFamily.length).toBeGreaterThan(2);
  });

  test("el boton de bitacora alterna la vista de la actividad", async ({ page }) => {
    await page.goto("/");

    const firstToggle = page.locator("[data-bitacora-toggle]").first();
    await firstToggle.click();

    await expect(page.getByRole("heading", { name: "Bitacora" }).first()).toBeVisible();
    await expect(firstToggle).toHaveText("Volver a actividad");

    await firstToggle.click();
    await expect(firstToggle).toHaveText("Ver bitacora");
  });
});
