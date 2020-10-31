<script>
    import Table from './Table.svelte';
    import SelectionCards from './SelectionCards.svelte';
    export let name;
</script>
<svelte:head>
    <title>{name}</title>
</svelte:head>

<main>
    <h1>Planning Poker</h1>
    <Table/>
    <br>
    <SelectionCards/>
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 20rem;
        margin: 0 auto;
        min-height: 20rem;
    }
    :global(body) {
        background-image: url(https://redfe.github.io/planning-poker/build/crop011kumakichi0327.jpg);
        background-repeat: repeat-y;
        background-size: cover;
    }

    h1 {
        color: #0d2356;
        font-size: 2em;
        font-weight: 700;
    }

    @media (min-width: 640px) {
        main {
            max-width: 42rem;
        }
    }
</style>