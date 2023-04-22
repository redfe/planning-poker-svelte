<script lang="ts">
	import Table from '$lib/components/Table.svelte';
	import UserSelection from '$lib/components/UserSelection.svelte';
	import UnsplashCredit from '$lib/components/UnsplashCredit.svelte';
	import { PUBLIC_BASE_URL } from '$env/static/public';
	import type { Estimate } from '../types';
	import { onMount } from 'svelte';

	export let name: string;
	export let isTableClosed = true;
	export let estimates: Estimate[] = [];
	export let userName = '';
	export let isFixedUserName = false;
	export let handleOpenButtonClick: () => void;
	export let handleFixName: (name: string) => void;
	export let handleSelectCard: (e: CustomEvent<{ point: string }>) => void;

	estimates = estimates || [];

	let height = '';
	const changeHeight = () => {
		height =
			document.documentElement.offsetHeight < document.documentElement.scrollHeight
				? 'auto'
				: '100%';
	};

	onMount(() => {
		changeHeight();
	});
</script>

<svelte:window on:resize={changeHeight} />

<div class="container" style="height: {height}">
	<main>
		<h1>{name}</h1>
		<p>share the URL of this page with your team members.</p>
		<Table isClosed={isTableClosed} {estimates} {handleOpenButtonClick} />
		<UserSelection {userName} {isFixedUserName} {estimates} {handleFixName} {handleSelectCard} />
		<div class="devinfo">
			development: <a
				href="https://github.com/redfe/planning-poker-svelte"
				target="_blank"
				rel="noopener noreferrer">Source code</a
			>,<a href={`${PUBLIC_BASE_URL}/storybook-static/`} target="_blank" rel="noopener noreferrer"
				>Storybook</a
			>.
		</div>
	</main>
	<UnsplashCredit />
</div>

<style>
	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@keyframes bgFadeIn {
		0% {
			background-color: rgba(0, 0, 0, 1);
		}
		100% {
			background-color: rgba(0, 0, 0, 0);
		}
	}
	.container {
		position: relative;
		zoom: 0.8;
	}

	main {
		text-align: center;
		max-width: 46rem;
		height: 100%;
		margin: 0 auto;
		background-color: rgba(0, 0, 0, 0.7);
		padding: 1.5rem 1.5rem;
		animation: 2s fadeIn forwards;
		box-sizing: border-box;
	}

	h1 {
		color: white;
		font-size: 2em;
		font-weight: 700;
		margin-top: 0;
	}

	p {
		color: white;
	}

	.devinfo {
		color: white;
		margin-top: 2rem;
	}
	.devinfo a {
		color: white;
	}

	@media (max-width: 639px) {
		:global(body) {
			zoom: 0.9;
		}
	}
</style>
