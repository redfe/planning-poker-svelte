import type { Meta, StoryObj } from '@storybook/svelte';

import OkButton from './OkButton.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
	component: OkButton,
	tags: ['autodocs'],
	args: {},
	argTypes: {}
} satisfies Meta<OkButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
