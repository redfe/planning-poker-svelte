import type { Meta, StoryObj } from '@storybook/svelte';

import CopyButton from './CopyButton.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
	component: CopyButton,
	tags: ['autodocs'],
	args: {},
	argTypes: {}
} satisfies Meta<CopyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Copied: Story = {
	args: {
		isCopied: true
	}
};
