<script>
  import Table from "./Table.svelte";
  import UserSelection from "./UserSelection.svelte";
  import UnsplashCredit from "./UnsplashCredit.svelte";
  import { setup } from "./stores.js";
  export let name;
  let height = null;
  const changeHeight = () => {
    height =
      document.documentElement.offsetHeight <
      document.documentElement.scrollHeight
        ? "auto"
        : "100%";
  };
</script>

<svelte:head>
  <title>{name}</title>
  <link
    href="https://fonts.googleapis.com/css?family=M+PLUS+1p"
    rel="stylesheet"
  />
</svelte:head>

<svelte:window on:resize={changeHeight} on:load={changeHeight} />

<main style="height: {height}">
  {#await setup}
    <p>...waiting</p>
  {:then}
    <h1>{name}</h1>
    <p>share the URL of this page with your team members.</p>
    <Table />
    <UserSelection />
  {/await}
</main>
<UnsplashCredit />

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
  main {
    text-align: center;
    max-width: 42rem;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 0 1.5rem;
    animation: 2s fadeIn forwards;
  }
  :global(body) {
    background-image: url(https://source.unsplash.com/1600x900/?nature);
    background-repeat: repeat-y;
    background-size: cover;
    background-blend-mode: overlay;
    padding: 0;
    font-family: "M PLUS 1p";
    animation: 3s bgFadeIn forwards;
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

  @media (max-width: 639px) {
    :global(body) {
      zoom: 0.9;
    }
  }
</style>
