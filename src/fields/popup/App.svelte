<script lang="ts">
    import Counter from 'components/counter/Counter.svelte'

    export let name: string
</script>

<h1>Hello from {name}</h1>

<div class="container">
    <div class="column">
        <h2>Persistent</h2>
        <Counter persistent />
        <Counter persistent />
    </div>
    <div class="column">
        <h2>Non-Persistent</h2>
        <Counter />
    </div>
</div>

<style>
    h1 {
        font-size: 1.75rem;
        font-weight: 700;
        text-align: center;
        margin: 2rem 0;
    }

    h2 {
        width: auto;
        margin-bottom: 1rem;
        font-size: 1.125rem;
        font-weight: 600;
    }

    .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 2rem 1rem;
    }

    .column {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: .5rem;
    }
</style>
