<script lang="ts">
    import Counter from 'components/counter/Counter.svelte'
    import SignIn from 'components/signin/SignIn.svelte'

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

<div class="flex items-center justify-center mt-8">
    <div class="card w-3/4 shadow-lg bg-base-300">
        <div class="card-body">
            <SignIn />
        </div>
    </div>
</div>

<style>
    h2 {
        @apply w-auto text-xl font-semibold;
    }

    .column {
        @apply flex flex-col items-center gap-4;
    }
</style>
