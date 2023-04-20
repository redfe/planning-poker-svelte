import type { Meta, StoryObj } from '@storybook/svelte';

import Card from './Card.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
	component: Card,
	tags: ['autodocs'],
	args: {
		point: '55',
		selected: false,
		closed: false,
		selectable: true,
		size: 'medium'
	},
	argTypes: {
		size: {
			control: { type: 'select' },
			options: ['small', 'medium', 'large']
		}
	}
} satisfies Meta<Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultOnUserSelection: Story = {};

export const SelectedOnUserSelection: Story = {
	args: {
		selected: true
	}
};

export const ClosedOnTable: Story = {
	args: {
		selectable: false,
		closed: true,
		size: 'large'
	}
};

export const OpenOnTable: Story = {
	args: {
		selectable: false,
		closed: false,
		size: 'large'
	}
};
