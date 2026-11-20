const { test, expect } = require('@playwright/test');

test('1. Cargar la página principal', async ({ page }) => {
    await page.goto('/');

    await expect(
        page.getByRole('heading', {
            name: 'Ferretería El Constructor'
        })
    ).toBeVisible();
});

test('2. Navegar a la sección de productos', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('link', {
        name: 'Productos'
    }).click();

    await expect(page).toHaveURL(/#productos/);

    await expect(
        page.getByRole('heading', {
            name: 'Nuestros productos'
        })
    ).toBeVisible();
});

test('3. Buscar un producto', async ({ page }) => {
    await page.goto('/');

    await page.locator('#busqueda').fill('Cemento');

    await page.getByRole('button', {
        name: 'Buscar'
    }).click();

    await expect(
        page.locator('#resultado')
    ).toHaveText(/Cemento.*450/);
});