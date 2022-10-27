<script lang="ts">
    import { createFormFieldId } from 'libs/tools'

    export let name: string
    export let values: Record<string, string>
    export let title: string | null = null
    export let selected: string | null = null
    export let disabled = false
    export let errors: string[] | null = null

    const extraClass = $$props?.class ?? ''
    const id = createFormFieldId(name)

    const _values: [string, string][] = []
    for (const key in values) {
        _values.push([key, values[key]])
    }
</script>

<fieldset>
{#if title}
    <legend>{title}</legend>
{/if}
{#each _values as [value, label]}
    <label class="label cursor-pointer justify-start gap-2 {extraClass}">
        <input {id} {name} {value} type="radio" class="radio" checked={selected === value} {disabled} />
        <span class="label-text">{label}</span>
        {#if errors}
            <span class="label-text text-error">{errors.join(', ')}</span>
        {/if}
    </label>
{/each}
</fieldset>
