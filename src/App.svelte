<script>
  import Table from "./Table.svelte";
  import UserSelection from "./UserSelection.svelte";
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
    background-image: url(https://redfe.github.io/planning-poker/build/crop011kumakichi0327.jpg);
    background-repeat: repeat-y;
    background-size: cover;
  }

  h1 {
    color: #0d2356;
    font-size: 2em;
    font-weight: 700;
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
  <h1>Planning Poker</h1>
  <Table />
  <UserSelection />
</main>
