<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Page from "./Page.svelte";
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
  title="Pages/Page"
  component={Page}
  argTypes={{
    onClick: { action: "onClick" },
  }}
/>

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
  <Page
    {...args}
    handleOpenButtonClick={args.onClick}
    handleFixName={args.onClick}
    handleSelectCard={args.onClick}
  />
</Template>

<Story
  name="Initialized"
  args={{
    name: "Planning Poker",
    isTableClosed: true,
  }}
/>

<Story
  name="User Name Inputed"
  args={{
    name: "Planning Poker",
    isTableClosed: true,
    userName: "山田",
  }}
/>

<Story
  name="User Name Fixed"
  args={{
    name: "Planning Poker",
    isTableClosed: true,
    userName: "山田",
    isFixedUserName: true,
  }}
/>

<Story
  name="Point Selected"
  args={{
    name: "Planning Poker",
    isTableClosed: true,
    userName: "山田",
    isFixedUserName: true,
    estimates: [{ name: "山田", point: "55" }],
  }}
/>

<Story
  name="Other Users Added"
  args={{
    name: "Planning Poker",
    isTableClosed: true,
    userName: "山田",
    isFixedUserName: true,
    estimates: [
      { name: "山田", point: "55" },
      { name: "鈴木", point: "8" },
      { name: "田中", point: "13" },
    ],
  }}
/>

<Story
  name="Opend"
  args={{
    name: "Planning Poker",
    isTableClosed: false,
    userName: "山田",
    isFixedUserName: true,
    estimates: [
      { name: "山田", point: "55" },
      { name: "鈴木", point: "8" },
      { name: "田中", point: "13" },
    ],
  }}
/>

<Story
  name="Returned"
  args={{
    name: "Planning Poker",
    isTableClosed: true,
    userName: "山田",
    isFixedUserName: true,
    estimates: [],
  }}
/>
