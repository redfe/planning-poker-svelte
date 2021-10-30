<script>
  import Card from "../card/Card.svelte";
  import OkButton from "../ok_button/OkButton.svelte";
  export let userName = "";
  export let isFixedUserName = false;
  export let estimates = [];
  export let handleSelectCard;
  export let handleFixName;

  estimates = estimates || [];

  const points = [
    "0",
    "1",
    "2",
    "3",
    "5",
    "8",
    "13",
    "21",
    "34",
    "55",
    "?",
    "∞",
  ];

  $: selectedPoint = estimates
    .filter((e) => e.name === userName)
    .map((e) => e.point)
    .pop();
</script>

<div class={"user-selection"}>
  {#if userName && isFixedUserName}
    <div class="user-name">{userName}</div>
    {#each points as point}
      <Card
        {point}
        selectable={true}
        size={"medium"}
        selected={selectedPoint === point}
        on:selectCard={handleSelectCard}
      />
    {/each}
  {:else}
    <div class="user-name">
      <form on:submit|preventDefault={() => handleFixName(userName)}>
        <!-- svelte-ignore a11y-autofocus -->
        <input bind:value={userName} placeholder="your name" autofocus />
        {#if userName}
          <OkButton on:click={() => handleFixName(userName)} />
        {/if}
      </form>
    </div>
  {/if}
</div>

<style>
  .user-selection {
    text-align: center;
  }

  div > :global(.card) {
    display: inline-block;
    margin: 0 0 0.75rem 0.75rem;
    border-width: 2px;
    transition: background-color 0.2s ease-in-out 0s;
  }

  .user-name {
    text-align: cener;
    color: #fff;
    padding: 0.75rem 0;
    font-size: 2rem;
  }

  .user-name input {
    font-family: inherit;
    text-align: center;
    color: white;
    background: none;
    padding: 0;
    max-width: 70%;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: white solid 1px;
    font-size: 2rem;
    margin-bottom: 0.5em;
  }
  .user-name input::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
  .user-name input:focus {
    outline: none;
  }
</style>
