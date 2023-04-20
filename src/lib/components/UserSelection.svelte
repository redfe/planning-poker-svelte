<script lang="ts">
	import type { Estimate } from '../types';

	import Card from './Card.svelte';
	import OkButton from './OkButton.svelte';
	export let userName = '';
	export let isFixedUserName = false;
	export let estimates: Estimate[] = [];
	export let handleSelectCard: (e: CustomEvent<{ point: string }>) => void;
	export let handleFixName: (name: string) => void;

	estimates = estimates || [];

	$: selectedPoint = estimates
		.filter((e) => e.name === userName)
		.map((e) => e.point)
		.pop();

	const fibonacci: string[] = ['0', '1', '2', '3', '5', '8', '13', '21', '34', '55', '?', '∞'];
	const ten: string[] = [
		'0',
		'10',
		'20',
		'30',
		'40',
		'50',
		'60',
		'70',
		'80',
		'90',
		'100',
		'?',
		'∞'
	];

	const pointsTemplates: { id: string; points: string[] }[] = [
		{ id: 'fibonacci', points: fibonacci },
		{ id: 'ten', points: ten }
	];

	let selectedPointsTemplateId = pointsTemplates[0].id;

	$: points = pointsTemplates.filter((p) => selectedPointsTemplateId === p.id)[0].points;
</script>

<div class={'user-selection'}>
	{#if userName && isFixedUserName}
		<div class="user-name">{userName}</div>
		<div>
			<select bind:value={selectedPointsTemplateId}>
				{#each pointsTemplates as pointsTemplate}
					<option value={pointsTemplate.id}>{pointsTemplate.id}</option>
				{/each}
			</select>
		</div>
		{#each points as point}
			<Card
				{point}
				selectable={true}
				size={'medium'}
				selected={selectedPoint === point}
				on:selectCard={handleSelectCard}
			/>
		{/each}
	{:else}
		<div class="user-name">
			<form on:submit|preventDefault={() => handleFixName(userName)}>
				<!-- svelte-ignore a11y-autofocus -->
				<input bind:value={userName} placeholder="your name" autofocus />
				{#if userName}
					<OkButton on:click={() => handleFixName(userName)} />
				{/if}
			</form>
		</div>
	{/if}
</div>

<style>
	.user-selection {
		text-align: center;
	}

	div > :global(.card) {
		display: inline-block;
		margin: 0 0 0.75rem 0.75rem;
		border-width: 2px;
		transition: background-color 0.2s ease-in-out 0s;
	}

	.user-name {
		text-align: cener;
		color: #fff;
		padding: 0.75rem 0;
		font-size: 2rem;
	}

	.user-name input {
		font-family: inherit;
		text-align: center;
		color: white;
		background: none;
		padding: 0;
		max-width: 70%;
		border-top: none;
		border-left: none;
		border-right: none;
		border-bottom: white solid 1px;
		font-size: 2rem;
		margin-bottom: 0.5em;
	}
	.user-name input::placeholder {
		color: rgba(255, 255, 255, 0.7);
	}
	.user-name input:focus {
		outline: none;
	}
</style>
