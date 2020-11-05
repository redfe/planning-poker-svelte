<script>
  import { fly } from "svelte/transition";
  import { estimates, tableState } from "./stores.js";
  import Card from "./Card.svelte";
  function handleOpenButtonClick(event) {
    if ($tableState.closed) {
      if ($estimates.length > 0) {
        tableState.open();
      }
    } else {
      estimates.clear();
      tableState.close();
    }
  }

  function handleCopyButtonClick(event) {
    const text = createCopyText();
    navigator.clipboard.writeText(text);
  }

  function createCopyText() {
    if ($estimates.length === 0) {
      return "empty.";
    }
    const now = new Date();
    return (
      "[" +
      now.toLocaleDateString() +
      " " +
      now.toLocaleTimeString() +
      "] " +
      $estimates
        .sort((e1, e2) => (e1.name > e2.name ? 1 : -1))
        .reduce(
          (acc, cur) => (acc ? acc + " " : "") + `${cur.name}(${cur.point})`,
          null
        )
    );
  }
</script>

<style>
  .table {
    background: linear-gradient(
      140deg,
      #6fa27f 30%,
      rgba(111, 162, 127, 0.6274509803921569)
    );
    padding: 1rem 1rem 0 0;
    border-radius: 20px;
    height: 20rem;
    position: relative;
    box-shadow: 0 4px 3px 3px rgba(0, 0, 0, 0.15);
    margin-top: 2rem;
  }
  .estimates {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 70%;
  }
  .estimate {
    margin: 0 0 2rem 2rem;
    width: 3.5rem;
    display: inline-block;
  }
  .estimate > :global(.card) {
    padding-top: 1rem;
    height: 4rem;
    width: 100%;
    font-size: 2rem;
    transition: background-color 0.2s ease-in-out 0s;
  }
  .name {
    color: white;
  }
  .open-button {
    margin: 2rem auto;
    width: 15rem;
    text-align: center;
    font-size: 2rem;
    border-radius: 0.5rem;
    background-color: silver;
    cursor: pointer;
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.15);
    transition: transform 0.1s ease-in-out 0s;
    user-select: none;
  }
  .open-button:active {
    transform: translateY(2px);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.15);
  }
  .copy-button {
    position: absolute;
    display: inline-block;
    top: 0;
    right: 0;
    background-color: silver;
    border-radius: 0 1.2rem;
    font-size: 0.5rem;
    padding: 0.25rem;
    cursor: pointer;
    text-align: center;
    width: 2rem;
    box-shadow: -1px 3px 3px 0 rgba(0, 0, 0, 0.15);
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .copy-button:active {
    transform: translateY(2px) translateX(-2px);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.15);
  }
</style>

<div class="table">
  <div class="estimates">
    {#each $estimates as estimate (estimate.name)}
      <div class="estimate" transition:fly={{ y: 100 }}>
        <Card point={estimate.point} closed={$tableState.closed} />
        <div class="name">{estimate.name}</div>
      </div>
    {/each}
  </div>
  {#if $estimates.length > 0 || !$tableState.closed}
    <div class="open-button" on:click={handleOpenButtonClick}>
      {$tableState.closed ? 'open' : 'return'}
    </div>
  {/if}
  {#if !$tableState.closed}
    <div class="copy-button" on:click={handleCopyButtonClick}>Copy</div>
  {/if}
</div>
