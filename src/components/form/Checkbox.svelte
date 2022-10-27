<script lang="ts">
    import { createFormFieldId } from 'libs/tools'

    export let label: string
    export let name: string
    export let checked = false
    export let disabled = false
    export let errors: string[] | null = null

    const extraClass = $$props?.class ?? ''
    const id = createFormFieldId(name)
</script>

<label class="label cursor-pointer justify-start gap-2 {extraClass}">
    <input {id} {name} type="checkbox" class="checkbox" {checked} {disabled} />
    <span class="label-text">{label}</span>
    {#if errors}
        <span class="label-text text-error">{errors.join(', ')}</span>
    {/if}
</label>
