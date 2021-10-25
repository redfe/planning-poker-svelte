<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Card from "./Card.svelte";
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
  title="PlanningPoker/Card"
  component={Card}
  argTypes={{
    point: { control: "text" },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    onClick: { action: "onClick" },
  }}
/>

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
  <Card {...args} on:selectCard={args.onClick} />
</Template>

<Story
  name="DefaultOnUserSelection"
  args={{
    point: "55",
    selectable: true,
    selected: false,
    closed: false,
  }}
/>

<Story
  name="SelectedOnUserSelection"
  args={{
    point: "55",
    selectable: true,
    selected: true,
    closed: false,
  }}
/>

<Story
  name="ClosedOnTable"
  args={{
    point: "55",
    selectable: false,
    selected: false,
    closed: true,
    size: "large",
  }}
/>

<Story
  name="OpendOnTable"
  args={{
    point: "55",
    selectable: false,
    selected: false,
    closed: false,
    size: "large",
  }}
/>
