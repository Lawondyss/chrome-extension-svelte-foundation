<script lang="ts">
    import { createFormFieldId } from 'libs/tools'
    import FieldLabel from 'components/form/FieldLabel.svelte'

    export let label: string
    export let name: string
    export let values: Record<string, string>
    export let prompt = '--- select ---'
    export let defaultValue = ''
    export let errors: string[] | null = null
    export let disabled = false

    const extraClass = $$props?.class ?? ''
    const id = createFormFieldId(name)

    const _values: [string, string][] = []
    for (const key in values) {
        _values.push([key, values[key]])
    }
</script>

<FieldLabel forId={id} {label} {errors} />

<select {name} {id} class="select select-bordered w-full {extraClass}" class:input-error={!!errors} {disabled}>
    <option disabled selected={defaultValue === ''} value="">{prompt}</option>
    {#each _values as [key, value]}
        <option value={key} selected={defaultValue === value}>{value}</option>
    {/each}
</select>
