import type { Meta, StoryObj } from '@storybook/svelte';

import Table from './Table.svelte';
import { Timestamp } from 'firebase/firestore';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
	component: Table,
	tags: ['autodocs'],
	args: {
		isClosed: true,
		estimates: [
			{
				name: '山田',
				point: '55',
				appendedAt: Timestamp.now()
			},
			{
				name: '鈴木',
				point: '8',
				appendedAt: Timestamp.now()
			},
			{
				name: '田中',
				point: '13',
				appendedAt: Timestamp.now()
			}
		]
	},
	argTypes: {}
} satisfies Meta<Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Closed: Story = {
	args: {}
};

export const Opend: Story = {
	args: {
		isClosed: false
	}
};
