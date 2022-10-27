<script lang="ts">
    import Button from 'components/button/Button.svelte'
    import { counter, createId } from './counter'

    export let persistent: boolean = false

    const id = createId()
    let count = 0

    persistent && $counter(id).then((value: number | null) => count = value ?? count)

    $: persistent && $counter(id, count)
</script>

<div class="card shadow-xl flex-row gap-1.5 min-w-[80%] bg-base-300 p-3">
    <Button type="accent" class="font-bold text-2xl" on:click={() => count--}>&minus;</Button>
    <div class="flex justify-center items-center flex-1 border rounded-md font-mono font-semibold text-base pt-[1px]">{count}</div>
    <Button type="accent" class="font-bold text-2xl" on:click={() => count++}>&plus;</Button>
</div>
