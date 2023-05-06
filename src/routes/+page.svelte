<script lang="ts">
	import { setup, estimates, tableState } from '$lib/stores.js';
	import Page from '$lib/pages/Page.svelte';
	import { v4 as uuidv4 } from 'uuid';

	const name = 'Planning Poker';
	let userName = window.localStorage.name || '';
	let isFixedUserName = false;

	function handleOpenButtonClick() {
		if ($tableState.closed) {
			if ($estimates.length > 0) {
				tableState.open();
			}
		} else {
			estimates.clear();
			tableState.close();
		}
	}

	$: selectedPoint = $estimates
		.filter((e) => e.name === userName)
		.map((e) => e.point)
		.pop();

	function handleFixName(inputedName: string) {
		if (inputedName) {
			userName = inputedName;
			window.localStorage.setItem('name', userName);
			isFixedUserName = true;
		}
	}

	function handleSelectCard(event: CustomEvent<{ point: string }>) {
		const appendCallback = () => estimates.append(userName, event.detail.point);
		if (selectedPoint) {
			estimates.remove(
				userName,
				selectedPoint === event.detail.point ? () => null : () => setTimeout(appendCallback, 450)
			);
		} else {
			appendCallback();
		}
	}

	function getSetupedRoomId() {
		const search = window.location.search;
		let roomId;
		if (!search) {
			const uuid = uuidv4();
			window.history.replaceState('', '', '?' + uuid);
			roomId = uuid;
		} else {
			roomId = search.substring(1);
		}
		return roomId;
	}
</script>

<svelte:head>
	<title>{name}</title>
	<link href="https://fonts.googleapis.com/css?family=M+PLUS+1p" rel="stylesheet" />
</svelte:head>

{#await setup(getSetupedRoomId())}
	<p>...waiting</p>
{:then}
	<Page
		{name}
		isTableClosed={$tableState.closed}
		estimates={$estimates}
		{userName}
		{isFixedUserName}
		{handleOpenButtonClick}
		{handleFixName}
		{handleSelectCard}
	/>
{/await}

<style>
	p {
		color: white;
		width: 100%;
		font-size: 3rem;
		text-align: center;
	}
</style>
