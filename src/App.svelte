<script>
  import Table from "./Table.svelte";
  import UserSelection from "./UserSelection.svelte";
  import { setup } from "./stores.js";
  export let name;
  let height = "auto";
  let title;
  const changeHeight = () => {
    height =
      document.documentElement.offsetHeight <
      document.documentElement.scrollHeight
        ? "auto"
        : "100%";
  };
  $: {
    if (title) {
      changeHeight();
    }
  }
</script>

<style>
  main {
    text-align: center;
    max-width: 20rem;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 0 1.5rem;
    height: 100%;
  }
  :global(body) {
    background-image: url(https://source.unsplash.com/random/1600x900/?nature);
    background-repeat: repeat-y;
    background-size: cover;
    background-blend-mode: overlay;
    padding: 0;
  }

  h1 {
    color: white;
    font-size: 2em;
    font-weight: 700;
    margin-top: 0;
    padding-top: 3rem;
  }

  p {
    color: white;
  }

  @media (min-width: 640px) {
    main {
      max-width: 42rem;
    }
  }
  :global(body) {
    font-family: "M PLUS 1p";
  }
</style>

<svelte:head>
  <title>{name}</title>
  <link
    href="https://fonts.googleapis.com/css?family=M+PLUS+1p"
    rel="stylesheet" />
</svelte:head>

<svelte:window on:resize={changeHeight} />

<main style="height: {height}">
  {#await setup}
    <p>...waiting</p>
  {:then}
    <h1 bind:this={title}>{name}</h1>
    <p>share the URL of this page with your team members.</p>
    <Table />
    <UserSelection />
  {/await}
</main>
