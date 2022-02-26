<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import Table from '../../ui_components/Table.svelte';

  let estimates = [
    { name: '山田', point: '55' },
    { name: '鈴木', point: '8' },
    { name: '田中', point: '13' },
  ];
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
  title="Components/Table"
  component={Table}
  argTypes={{
    onClick: { action: 'onClick' },
  }} />

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
  <Table {...args} handleOpenButtonClick={args.onClick} />
</Template>

<Story name="Closed" args={{ isClosed: true, estimates: estimates }} />

<Story name="Opend" args={{ isClosed: false, estimates: estimates }} />
