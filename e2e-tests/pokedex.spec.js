const { test, describe, expect } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('/')

    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(
      page.getByText(
        'Pokémon and Pokémon character names are trademarks of Nintendo.'
      )
    ).toBeVisible()
  })

  test('navigate to ivysaur page and check ability', async ({ page }) => {
    await page.goto('http://localhost:5000')  // main page
    // Click on ivysaur link
    await page.getByText('ivysaur').click()

    // Wait for page to load and check that ability is visible
    await expect(page.getByText('chlorophyll')).toBeVisible()
  })
})
