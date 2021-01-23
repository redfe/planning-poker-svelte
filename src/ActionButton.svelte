<script>
  export let click;
  export let disabled = false;
  export let myClass = "";
</script>

<button class={myClass} on:click={click} {disabled}><slot /></button>

<style>
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
