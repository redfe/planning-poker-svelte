<script>
  import { createEventDispatcher } from "svelte";
  export let point;
  export let selectable = false;
  export let selected = false;
  export let closed = false;
  export let size = "medium";
  const dispatch = createEventDispatcher();

  function selectCard() {
    dispatch("selectCard", {
      point: point,
    });
  }
</script>

<div
  class={"card " + size}
  class:selectable
  class:closed
  class:selected
  on:click={selectable ? selectCard : undefined}
>
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

  .selectable {
    cursor: pointer;
  }
  .selectable:hover {
    background-color: #e8bcbc;
  }

  .selectable.selected {
    background-color: #f17f7f !important;
  }

  .closed {
    background-color: #260fa0;
  }

  .small {
    width: 2rem;
    line-height: 3rem;
    height: 3rem;
    font-size: 1rem;
  }

  .medium {
    width: 2.5rem;
    line-height: 3.75rem;
    height: 3.75rem;
    font-size: 1.25rem;
  }

  .large {
    width: 3.125rem;
    line-height: 4.67rem;
    height: 4.67rem;
    font-size: 1.56rem;
  }
</style>
