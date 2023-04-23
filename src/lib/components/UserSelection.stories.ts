import type { Meta, StoryObj } from '@storybook/svelte';

import UserSelection from './UserSelection.svelte';
import UserSelectionDecorator from './story_decorators/UserSelectionDecorator.svelte';
import { Timestamp } from 'firebase/firestore';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
	component: UserSelection,
	tags: ['autodocs'],
	args: {
		userName: undefined,
		isFixedUserName: false,
		estimates: [
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
		],
		handleSelectCard: () => {
			/** */
		},
		handleFixName: () => {
			/** */
		}
	},
	argTypes: {},
	decorators: [() => UserSelectionDecorator as UserSelectionDecorator__SvelteComponent_]
} satisfies Meta<UserSelection>;

class UserSelectionDecorator__SvelteComponent_ {}

export default meta;
type Story = StoryObj<typeof meta>;

export const NoName: Story = {};

export const NameInputed: Story = {
	args: {
		userName: '山田'
	}
};

export const CardSelected: Story = {
	args: {
		userName: '山田',
		isFixedUserName: true,
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
	}
};
