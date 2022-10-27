<script lang="ts">
    import type { FieltTextType } from 'src/types'
    import { createFormFieldId } from 'libs/tools'
    import FieldLabel from 'components/form/FieldLabel.svelte'

    export let label: string
    export let name: string
    export let type: FieltTextType
    export let defaultValue = ''
    export let errors: string[] | null = null
    export let disabled = false

    const extraClass = $$props?.class ?? ''
    const id = createFormFieldId(name)
</script>

<FieldLabel forId={id} {label} {errors} />

{#if type === 'multiline'}
    <textarea {name} {id}
        class="textarea textarea-bordered w-full {extraClass}"
        class:textarea-error={!!errors}
        {disabled}
    >
        {defaultValue}
    </textarea>
{:else}
    <input {type} {name} {id}
        class="input input-bordered w-full {extraClass}"
        class:input-error={!!errors}
        value={defaultValue}
        {disabled} />
{/if}
