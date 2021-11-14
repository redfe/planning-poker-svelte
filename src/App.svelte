<script>
  import { estimates, tableState } from "./stores.js";
  import Page from "./pages/Page.svelte";
  import { setup } from "./stores.js";
  export let name;

  let userName = window.localStorage.name || "";
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

  function handleFixName(inputedName) {
    if (inputedName) {
      userName = inputedName;
      window.localStorage.setItem("name", userName);
      isFixedUserName = true;
    }
  }

  function handleSelectCard(event) {
    const appendCallback = () => estimates.append(userName, event.detail.point);
    if (selectedPoint) {
      estimates.remove(
        userName,
        selectedPoint === event.detail.point
          ? null
          : () => setTimeout(appendCallback, 300)
      );
    } else {
      appendCallback();
    }
  }
</script>

<svelte:head>
  <title>{name}</title>
  <link
    href="https://fonts.googleapis.com/css?family=M+PLUS+1p"
    rel="stylesheet"
  />
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
