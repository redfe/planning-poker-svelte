<script>
  import { fly } from "svelte/transition";
  import { estimates, tableState } from "./stores.js";
  import Card from "./ui_modules/card/Card.svelte";
  import OpenButton from "./ui_modules/open_button/OpenButton.svelte";
  import CopyButton from "./ui_modules/copy_button/CopyButton.svelte";

  let isCopied = false;

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
    isCopied = true;
    setTimeout(() => {
      isCopied = false;
    }, 1000);
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
        <Card
          point={estimate.point}
          size={"large"}
          selectable={false}
          closed={$tableState.closed}
        />
        <div class="name">{estimate.name}</div>
      </div>
    {/each}
  </div>
  {#if $estimates.length > 0 || !$tableState.closed}
    <div class="open-button-area">
      <OpenButton
        isClosed={$tableState.closed}
        on:click={handleOpenButtonClick}
      />
    </div>
  {/if}
  {#if !$tableState.closed}
    <CopyButton on:click={handleCopyButtonClick} {isCopied} />
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
</style>
