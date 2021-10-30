<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import OkButton from "./OkButton.svelte";
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
  title="Components/OkButton"
  component={OkButton}
  argTypes={{
    onClick: { action: "onClick" },
  }}
/>

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
  <OkButton {...args} on:click={args.onClick} />
</Template>

<Story name="Default" />
