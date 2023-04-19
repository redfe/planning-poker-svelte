import type { Meta, StoryObj } from '@storybook/svelte';

import OpenButton from './OpenButton.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
	component: OpenButton,
	tags: ['autodocs'],
	args: {},
	argTypes: {}
} satisfies Meta<OpenButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Closed: Story = {
	args: {
		isClosed: true
	}
};

export const Opend: Story = {
	args: {
		isClosed: false
	}
};
