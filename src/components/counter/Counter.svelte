<script lang="ts">
    import { counter, createId } from './counter'

    export let persistent: boolean = false

    const id = createId()
    let count = 0

    persistent && $counter(id).then((value: number | null) => count = value ?? count)

    $: persistent && $counter(id, count)
</script>

<div class="flex gap-1.5 p-1.5 bg-white border rounded-lg min-w-[80%] overflow-hidden">
    <button on:click={() => count--}>-</button>
    <div class="flex justify-center items-center flex-1 border rounded-md font-mono font-semibold text-base pt-[1px]">{count}</div>
    <button on:click={() => count++}>+</button>
</div>

<style>
    button {
        @apply block border rounded-md text-white bg-blue-600 cursor-pointer px-4 text-lg font-bold;
    }
</style>
