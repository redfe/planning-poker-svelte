<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import UserSelection from '../../ui_components/UserSelection.svelte';
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
  title="Components/UserSelection"
  component={UserSelection}
  argTypes={{
    onClick: { action: 'onClick' },
  }}
  background={{
    darkMode: {
      current: 'dark',
    },
  }} />

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args class="template">
  <div>
    <UserSelection
      {...args}
      handleSelectCard={args.onClick}
      handleFixName={args.onClick} />
  </div>
</Template>

<Story name="NoName" args={{}} />

<Story
  name="NameInputed"
  args={{
    userName: '山田',
    isFixedUserName: false,
  }} />

<Story
  name="CardSelected"
  args={{
    userName: '山田',
    isFixedUserName: true,
    estimates: [{ name: '山田', point: '55' }],
  }} />

<style>
  div {
    background-color: rgba(0, 0, 0, 0.5);
  }
</style>
