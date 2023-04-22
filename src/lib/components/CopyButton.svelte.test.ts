import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, render } from '@testing-library/svelte';
import CopyButton from './CopyButton.svelte';

describe('CopyButton.svelte', () => {
	afterEach(() => cleanup());
	it('isCopied が true の場合は CPIED が表示される', () => {
		// Arrange & Act
		const { container } = render(CopyButton, { isCopied: true });

		// Assert
		expect(container).toBeTruthy();
		expect(container.innerHTML).contain('COPIED');
	});
});
