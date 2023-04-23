import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen, fireEvent } from '@testing-library/svelte';
import Card from './Card.svelte';

const doSelectCard = async (point: string, selectable: boolean) => {
	// Arrange
	let selectedPoint = null;
	const { container, component } = render(Card, { point: point, selectable: selectable });
	component.$on('selectCard', (event) => (selectedPoint = event.detail.point));
	const card = container.querySelector('.card') as Element;

	// Act
	await fireEvent.click(card);

	return selectedPoint;
};

describe('Card.svelte', () => {
	afterEach(() => {
		cleanup();
	});

	it('ポイントが表示される', () => {
		// Arrange & Act
		const { container } = render(Card, { point: '55' });

		// Assert
		expect(container.innerHTML).contain('55');
	});

	it('クローズ状態の場合はポイントが表示されない', () => {
		// Arrange & Act
		const { container } = render(Card, { point: '55', closed: true });

		// Assert
		expect(container.innerHTML).not.contain('55');
	});

	it('selectable=true の場合はクリックされると selectCard コールバックが実行される', async () => {
		// Arrange & Act
		const selectedPoint = await doSelectCard('55', true);

		// Assert
		expect(selectedPoint).toBe('55');
	});

	it('selectable=false の場合はクリックされても selectCard コールバックは実行されない', async () => {
		// Arrange & Act
		const selectedPoint = await doSelectCard('55', false);

		// Assert
		expect(selectedPoint).toBeNull();
	});
});
