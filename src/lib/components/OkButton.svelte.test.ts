import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, render } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import OkButton from './OkButton.svelte';

describe('OkButton.svelte', () => {
	afterEach(() => cleanup());
	it('click イベントが実行される', async () => {
		// Arrange
		let clicked = false;
		const { container, component } = render(OkButton);
		component.$on('click', () => (clicked = true));
		const button = container.querySelector('button') as Element;

		// Act
		await userEvent.click(button);

		// Assert
		expect(clicked).toBeTruthy();
	});
});
