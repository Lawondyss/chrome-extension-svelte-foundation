<script lang="ts">
    import type { SignInValues } from 'src/types'
    import { createForm } from 'felte'
    import { validator } from '@felte/validator-yup'
    import * as yup from 'yup'
    import Button from 'components/button/Button.svelte'
    import FieldText from 'components/form/FieldText.svelte'
    import Select from 'components/form/Select.svelte'
    import Checkbox from 'components/form/Checkbox.svelte';
    import Radio from 'components/form/Radio.svelte';
    import FormControl from 'components/form/FormControl.svelte';

    let data: SignInValues | null = null
    const schema = yup.object({
        login: yup.string().email().required(),
        password: yup.string().min(8).required(),
        code: yup.number().integer().min(1000).max(9999).required(),
        server: yup.string().required(),
    })
    const { form, errors } = createForm<yup.InferType<typeof schema>>({
        // live validating by schema
        extend: validator({ schema }),

        // live custom validating
        validate: (values) => {
            const errors: Record<string, string> = {}

            if (values.code && values.code !== 1024) errors.code = 'invalid code'

            return errors
        },

        // setErrors() for any additional validation
        onSubmit: (values, { setErrors }) => {
            data = { timestamp: Date.now(), ...values }
        },
    })
</script>

<pre>data = {JSON.stringify(data, null, 2)}</pre>

<form use:form>
    <FormControl>
        <FieldText type="email" name="login" label="Login" errors={$errors.login} />
    </FormControl>
    <FormControl>
        <Radio name="pill" title="Take a pill" errors{$errors.pill} values={{ red: 'red pill', blue: 'blue pill'}} selected="blue" />
    </FormControl>
    <FormControl>
        <FieldText type="password" name="password" label="Password" errors={$errors.password} />
    </FormControl>
    <FormControl>
        <FieldText type="number" name="code" label="Code" errors={$errors.code} />
    </FormControl>
    <FormControl>
        <Select name="server" label="Server" errors={$errors.server} values={{ eu: 'EU', usa: 'USA' }} />
    </FormControl>
    <FormControl>
        <Checkbox name="remember" label="Remember me" checked />
    </FormControl>
    <FormControl>
        <Button on:click type="primary" size="xs">Sign in</Button>
    </FormControl>
</form>
