<script lang="ts">
    import Counter from 'components/counter/Counter.svelte'

    export let name: string
</script>

<h1 class="font-serif font-bold text-3xl text-center py-4">Hello from <i>{name}</i></h1>

<div class="grid grid-cols-2 gap-4">
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
    h2 {
        @apply w-auto text-xl font-semibold;
    }

    .column {
        @apply flex flex-col items-center gap-2;
    }
</style>
