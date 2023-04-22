import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, render } from '@testing-library/svelte';
import Comoponent from './CopyButton.svelte';

describe('Comoponent.svelte', () => {
	afterEach(() => cleanup());
	it('isCopied が true の場合は CPIED が表示される', () => {
		// Arrange & Act
		const { container } = render(Comoponent, { isCopied: true });

		// Assert
		expect(container).toBeTruthy();
		expect(container.innerHTML).contain('COPIED');
	});
});
