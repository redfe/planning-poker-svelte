<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import OpenButton from "./OpenButton.svelte";
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
  title="PlanningPoker/OpenButton"
  component={OpenButton}
  argTypes={{
    onClick: { action: "onClick" },
  }}
/>

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
  <OpenButton {...args} on:click={args.onClick} />
</Template>

<Story name="Closed" args={{ isClosed: true }} />

<Story name="Opend" args={{ isClosed: false }} />
