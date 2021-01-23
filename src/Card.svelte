<script>
  import { createEventDispatcher } from "svelte";
  export let point;
  export let selected = false;
  export let closed = false;
  const dispatch = createEventDispatcher();

  function selectCard() {
    dispatch("selectCard", {
      point: point,
    });
  }
</script>

<div class="card" class:closed class:selected on:click={selectCard}>
  {closed ? "" : point}
</div>

<style>
  .card {
    border-radius: 0.5rem;
    background-color: #f3ede2;
    box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.15);
    user-select: none;
    text-align: center;
  }
  .card.selected {
    background-color: #f17f7f !important;
  }
  .card.closed {
    background-color: #260fa0;
  }
</style>
