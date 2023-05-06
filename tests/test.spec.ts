import { expect, test } from '@playwright/test';

test('タイトルは Planning Poker', async ({ page }) => {
	await page.goto('/');
	await new Promise((resolve) => {
		setTimeout(resolve, 1000);
	});
	await expect(page.getByTitle('Planning Poker')).toBeDefined();
});
