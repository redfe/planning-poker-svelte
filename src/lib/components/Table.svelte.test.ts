import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/svelte';
import '@testing-library/user-event';
import { Timestamp } from 'firebase/firestore';
import Table from './Table.svelte';

describe('Table.svelte', () => {
	beforeEach(() => {
		vi.useFakeTimers();
	});
	afterEach(() => {
		vi.useRealTimers();
		cleanup();
	});

	it('初期状態ではテーブルに何も表示されていない', () => {
		// Arrange&Act
		const { container } = render(Table);

		// Assert
		expect(container.querySelectorAll('.estimate')).toHaveLength(0);
		expect(container.querySelectorAll('button')).toHaveLength(0);
	});

	it('オープンするとコピーボタンが表示されてOPENボタンがRETURNボタンに変わる', () => {
		// Arrange&Act
		const { container } = render(Table, {
			isClosed: false,
			estimates: [{ point: '15', name: 'user1', appendedAt: Timestamp.now() }]
		});

		// Assert
		expect(container.querySelectorAll('.estimate')).toHaveLength(1);
		expect(container.querySelectorAll('button')).toHaveLength(2);
		expect(screen.getByText('15')).toBeDefined();
		expect(screen.getByText('user1')).toBeDefined();
		expect(screen.getByText('RETURN')).toBeDefined();
		expect(screen.getByText('COPY')).toBeDefined();
	});

	it('コピーボタンをクリックするとするとクリップボードに結果が保存される', () => {
		// Arrange
		const date = new Date(2023, 1, 15, 10, 20, 30);
		vi.setSystemTime(date);

		let createdText = null;
		Object.assign(navigator, {
			clipboard: {
				writeText: (text: string) => {
					createdText = text;
				}
			}
		});
		const estimates = [
			{ point: '15', name: 'user1', appendedAt: Timestamp.now() },
			{ point: '33', name: 'user2', appendedAt: Timestamp.now() }
		];

		render(Table, {
			isClosed: false,
			estimates: estimates
		});

		// Act
		screen.getByText('COPY').click();

		// Assert
		const estimateText = estimates
			.sort((e1, e2) => (e1.name > e2.name ? 1 : -1))
			.map((e) => `${e.name}(${e.point})`)
			.join(' ');
		expect(createdText).toBe(
			`[${date.toLocaleDateString()} ${date.toLocaleTimeString()}] ${estimateText}`
		);
	});
});
