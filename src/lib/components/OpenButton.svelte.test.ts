import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, render } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import OpenButton from './OpenButton.svelte';

describe('OpenButton.svelte', () => {
	afterEach(() => cleanup());

	it('isClosed=true の場合は OPEN が表示される', () => {
		// Arrange&Act
		const { container } = render(OpenButton, { isClosed: true });

		// Assert
		expect(container.innerHTML).contain('OPEN');
	});

	it('isClosed=false の場合は RETURN が表示される', () => {
		// Arrange&Act
		const { container } = render(OpenButton, { isClosed: false });

		// Assert
		expect(container.innerHTML).contain('RETURN');
	});

	it('click イベントが実行される', async () => {
		// Arrange
		let clicked = false;
		const { container, component } = render(OpenButton);
		component.$on('click', () => (clicked = true));
		const button = container.querySelector('button') as Element;

		// Act
		await userEvent.click(button);

		// Assert
		expect(clicked).toBeTruthy();
	});
});
