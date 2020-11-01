<script>
  import { estimates } from "./stores.js";
  import Card from "./Card.svelte";
  let points = ["0", "1", "2", "3", "5", "8", "13", "21", "34", "55", "?", "∞"];
  let selectedPoint;
  let name = "hoge";
  function handleSelectCard(event) {
    if (selectedPoint === event.detail.point) {
      selectedPoint = null;
      estimates.remove(name);
    } else {
      selectedPoint = event.detail.point;
      estimates.append(name, selectedPoint);
    }
  }
</script>

<style>
  div > :global(.card) {
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
</style>

<div>
  <div>{name}</div>
  {#each points as point}
    <Card
      {point}
      selected={selectedPoint == point}
      on:selectCard={handleSelectCard} />
  {/each}
</div>
