<script>
  import { estimates } from "./stores.js";
  import Card from "./Card.svelte";
</script>

<style>
  .table {
    background: linear-gradient(
      140deg,
      #6fa27f 30%,
      rgba(111, 162, 127, 0.6274509803921569)
    );
    padding: 1rem 1rem 0 0;
    border-radius: 0.5rem;
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
</style>

<div class="table">
  <div class="estimates">
    {#each $estimates as estimate}
      <div class="estimate">
        <Card closed={true} point={estimate.point} />
        <div class="name">{estimate.name}</div>
      </div>
    {/each}
  </div>
  <div>
    <div class="open-button">open</div>
  </div>
</div>
