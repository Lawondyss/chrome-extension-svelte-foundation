<script lang="ts">
    import type { ButtonType, ButtonSize } from 'src/types'

    export let type: ButtonType = 'default'
    export let size: ButtonSize = 'md'
    export let outline = false
    export let disabled = false
    export let loading = false
    export let square = false
    export let circle = false

    const classes = $$props.class ?? ''
</script>

<button on:click
    class="btn btn-{type} btn-{size} text-base {classes}"
    class:btn-outline={outline}
    class:btn-square={square}
    class:btn-circle={circle}
    class:loading
    {disabled}
><slot /></button>
