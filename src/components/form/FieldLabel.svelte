<script lang="ts">
    export let forId: string
    export let label: string
    export let errors: string[] | null
</script>

<label class="label" for={forId}>
    <span class="label-text">{label}</span>
    {#if errors}
        <span class="label-text-alt text-error">{errors.join(', ')}</span>
    {/if}
</label>
