import type { Meta, StoryObj } from '@storybook/svelte';
import { Timestamp } from 'firebase/firestore';
import Page from './Page.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
	component: Page,
	tags: ['autodocs'],
	args: {
		handleFixName: undefined,
		handleOpenButtonClick: undefined,
		handleSelectCard: undefined
	},
	argTypes: {}
} satisfies Meta<Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Initialized: Story = {
	args: {
		name: 'Planning Poker'
	}
};

export const UserNameInputed: Story = {
	args: {
		...Initialized.args,
		userName: '山田'
	}
};

export const UserNameFixed: Story = {
	args: {
		...UserNameInputed.args,
		isFixedUserName: true
	}
};

export const PointSelected: Story = {
	args: {
		...UserNameFixed.args,
		estimates: [{ name: '山田', point: '55', appendedAt: Timestamp.now() }]
	}
};

export const OtherUsersAdded: Story = {
	args: {
		...PointSelected.args,
		estimates: [
			{ name: '山田', point: '55', appendedAt: Timestamp.now() },
			{ name: '鈴木', point: '8', appendedAt: Timestamp.now() },
			{ name: '田中', point: '13', appendedAt: Timestamp.now() }
		]
	}
};

export const Opened: Story = {
	args: {
		...OtherUsersAdded.args,
		isTableClosed: false
	}
};
