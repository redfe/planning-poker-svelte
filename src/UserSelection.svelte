<script>
  import { estimates } from "./stores.js";
  import Card from "./Card.svelte";
  let points = ["0", "1", "2", "3", "5", "8", "13", "21", "34", "55", "?", "∞"];
  let name;
  $: selectedPoint = $estimates
    .filter((e) => e.name === name)
    .map((e) => e.point)
    .pop();
  function handleSelectCard(event) {
    const appendCallback = () => estimates.append(name, event.detail.point);
    if (selectedPoint) {
      estimates.remove(
        name,
        selectedPoint === event.detail.point
          ? null
          : () => setTimeout(appendCallback, 300)
      );
    } else {
      appendCallback();
    }
  }
</script>

<style>
  div > :global(.card) {
    display: inline-block;
    margin: 0 0 0.75rem 0.75rem;
    padding: 1rem 0.5rem;
    width: 1.5rem;
    cursor: pointer;
    border-width: 2px;
    transition: background-color 0.2s ease-in-out 0s;
  }
  div > :global(.card):hover {
    background-color: #e8bcbc;
  }

  .user-name {
    text-align: cener;
    color: #fff;
    padding: 0.75rem 0;
    font-size: 2rem;
  }

  .user-name input {
    text-align: center;
    color: white;
    background: none;
    padding: 0;
    max-width: 100%;
    border-top: none;
    border-left: none;
    border-right: none;
  }
  .user-name input::placeholder {
    color: rgba(255, 255, 255, 0.8);
  }
  .user-name input:focus {
    outline: none;
  }
</style>

<div>
  <div class="user-name">
    <input bind:value={name} placeholder="your name" />
  </div>
  {#if name}
    {#each points as point}
      <Card
        {point}
        selected={selectedPoint === point}
        on:selectCard={handleSelectCard} />
    {/each}
  {:else}{/if}
</div>
