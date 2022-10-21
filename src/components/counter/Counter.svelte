<script lang="ts">
    import { counter, createId } from './counter'

    export let persistent: boolean = false

    const id = createId()
    let count = 0

    persistent && $counter(id).then((value: number | null) => count = value ?? count)

    $: persistent && $counter(id, count)
</script>

<div class="wrapper">
    <button on:click={() => count--}>-</button>
    <div class="counter">{count}</div>
    <button on:click={() => count++}>+</button>
</div>

<style>
    .wrapper {
        display: flex;
        gap: 0.375rem;
        min-width: 80%;
        padding: 0.375rem;
        background-color: rgb(255 255 255);
        border: 1px solid #e5e7eb;
        border-radius: 0.5rem;
        overflow: hidden;
    }

    button {
        display: block;
        width: auto;
        border: 1px solid #e5e7eb;
        border-radius: 0.375rem;
        margin: 0;
        padding:.25rem 1rem;
        text-transform: none;
        color: rgb(255 255 255);
        background-color: rgb(37 99 235);
        cursor: pointer;
    }

    .counter {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        border: 1px solid #e5e7eb;
        border-radius: 0.375rem;
        margin: 0;
        font-family: 'Courier New', Courier, monospace;
        font-weight: 700;
        font-size: large;
        padding-top: 3px;
        line-height: 1.5;
    }
</style>
