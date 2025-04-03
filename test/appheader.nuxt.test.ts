// @vitest-environment nuxt
import { test, expect } from 'vitest'
import { mountSuspended as mount } from '@nuxt/test-utils/runtime'
import { AppHeader } from '#components'

test('renders the AppHeader component', async () => {
    const component = await mount(AppHeader)
    expect(component.text()).toMatchInlineSnapshot(
        '"This is an auto-imported component"'
    )
})