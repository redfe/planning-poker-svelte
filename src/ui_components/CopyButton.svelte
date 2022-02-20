<script lang="ts">
  export let isCopied: boolean = false;
</script>

<button
  class={['copy-button', isCopied ? 'copied' : ''].join(' ')}
  on:click
  disabled={isCopied ? true : false}>{isCopied ? 'COPIED' : 'COPY'}</button>

<style>
  .copy-button {
    position: absolute;
    display: inline-block;
    border-radius: 0 1.2rem;
    font-size: 0.5rem;
    padding: 0.25rem;
    width: 4rem;
    box-shadow: -1px 3px 3px 0 rgba(0, 0, 0, 0.15);
    transition: color 1s, box-shadow 0 1s;
  }
  .copy-button.copied {
    color: rgb(161, 18, 18);
    box-shadow: none;
    font-size: 0.2rem;
    font-weight: bold;
    cursor: auto;
    transform: translateY(2px);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.15);
  }

  button {
    text-align: center;
    border: none;
    border-radius: 0.5rem;
    background-color: silver;
    cursor: pointer;
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.15);
    transition: transform 0.1s ease-in-out 0s;
    user-select: none;
    padding: 0;
    display: block;
    outline: none;
  }

  button:active {
    transform: translateY(2px);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.15);
  }
</style>
