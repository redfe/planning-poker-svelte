<script>
  import { fly } from "svelte/transition";
  import { estimates, tableState } from "./stores.js";
  import Card from "./Card.svelte";
  import ActionButton from "./ActionButton.svelte";

  let copyButtonName = "COPY";

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
    event.target.classList.add("copied");
    event.target.disabled = true;
    const srcName = copyButtonName;
    copyButtonName = "COPIED!";
    setTimeout(() => {
      event.target.classList.remove("copied");
      event.target.disabled = false;
      copyButtonName = srcName;
    }, 2000);
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
    <div class="open-button-area">
      <ActionButton class="open-button" on:click={handleOpenButtonClick}>
        {$tableState.closed ? "OPEN" : "RETURN"}
      </ActionButton>
    </div>
  {/if}
  {#if !$tableState.closed}
    <ActionButton class="copy-button" on:click={handleCopyButtonClick}>
      {copyButtonName}
    </ActionButton>
  {/if}
</div>

<style>
  .table {
    position: relative;
    background: rgba(111, 162, 127, 0.8);
    padding: 1.5rem 1rem 4rem 1rem;
    border-radius: 20px;
    min-height: 18rem;
    position: relative;
    box-shadow: 0 4px 3px 3px rgba(0, 0, 0, 0.15);
    margin-top: 2rem;
  }
  .estimates {
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    width: 90%;
  }
  .estimate {
    margin: 0.5rem;
    width: 5rem;
    display: inline-block;
  }
  .estimate > :global(.card) {
    margin: 0 auto;
    padding-top: 1rem;
    height: 4rem;
    width: 3.5rem;
    font-size: 2rem;
    transition: background-color 0.2s ease-in-out 0s;
  }
  .name {
    color: white;
    word-break: break-all;
    overflow-y: hidden;
    height: 3rem;
  }
  .table .open-button-area {
    position: absolute;
    bottom: 0.5rem;
    width: 100%;
    left: 0;
  }
  .table :global(.open-button) {
    margin: 0 auto;
    width: 10rem;
    font-size: 2rem;
    border-radius: 0.5rem;
  }
  .table :global(.open-button:active) {
    transform: translateY(2px);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.15);
  }
  .table :global(.copy-button) {
    position: absolute;
    display: inline-block;
    top: 0;
    right: 0;
    border-radius: 0 1.2rem;
    font-size: 0.5rem;
    padding: 0.25rem;
    width: 4rem;
    box-shadow: -1px 3px 3px 0 rgba(0, 0, 0, 0.15);
    transition: color 1s, box-shadow 0 1s;
  }
  .table :global(.copy-button.copied) {
    color: rgb(161, 18, 18);
    box-shadow: none;
    font-size: 0.2rem;
    font-weight: bold;
  }
  .table :global(.copy-button:active) {
    transform: translateY(2px) translateX(-2px);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.15);
  }
</style>
