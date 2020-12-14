<script>
  import Table from "./Table.svelte";
  import UserSelection from "./UserSelection.svelte";
  import { setup } from "./stores.js";
  export let name;
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 20rem;
    margin: 0 auto;
    min-height: 20rem;
  }
  :global(body) {
    background-image: url(https://source.unsplash.com/random/1600x900/?nature);
    background-repeat: repeat-y;
    background-size: cover;
    background-blend-mode: overlay;
    padding: 0;
  }

  main {
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    padding: 0 2rem;
  }
  h1 {
    color: white;
    font-size: 2em;
    font-weight: 700;
    margin-top: 0;
    padding-top: 5rem;
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

<main>
  {#await setup}
    <p>...waiting</p>
  {:then}
    <h1>Planning Poker</h1>
    <p>share the URL of this page with your team members.</p>
    <Table />
    <UserSelection />
  {/await}
</main>
