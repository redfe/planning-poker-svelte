<script lang="ts">
	import { setup, estimates, tableState } from '$lib/stores.js';
	import Page from '$lib/pages/Page.svelte';
	export let name: string;

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
				selectedPoint === event.detail.point
					? () => {
							/* noop */
					  }
					: () => setTimeout(appendCallback, 450)
			);
		} else {
			appendCallback();
		}
	}
</script>

<svelte:head>
	<title>{name}</title>
	<link href="https://fonts.googleapis.com/css?family=M+PLUS+1p" rel="stylesheet" />
</svelte:head>

{#await setup}
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
