<script lang="ts">
  import Table from '../ui_components/Table.svelte';
  import UserSelection from '../ui_components/UserSelection.svelte';
  import UnsplashCredit from '../ui_components/UnsplashCredit.svelte';
  import type { Estimate } from '../types';

  export let name: string;
  export let isTableClosed: boolean = true;
  export let estimates: Estimate[] = [];
  export let userName: string = '';
  export let isFixedUserName: boolean = false;
  export let handleOpenButtonClick;
  export let handleFixName;
  export let handleSelectCard;

  estimates = estimates || [];
</script>

<div class="container">
  <main>
    <h1>{name}</h1>
    <p>share the URL of this page with your team members.</p>
    <Table isClosed={isTableClosed} {estimates} {handleOpenButtonClick} />
    <UserSelection
      {userName}
      {isFixedUserName}
      {estimates}
      {handleFixName}
      {handleSelectCard} />
    <div class="devinfo">
      development: <a
        href="https://github.com/redfe/planning-poker-svelte"
        target="_blank"
        rel="noopener noreferrer">Source code</a
      >,<a href="./storybook-static/" target="_blank" rel="noopener noreferrer"
        >Storybook</a
      >.
    </div>
  </main>
  <UnsplashCredit />
</div>

<style>
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes bgFadeIn {
    0% {
      background-color: rgba(0, 0, 0, 1);
    }
    100% {
      background-color: rgba(0, 0, 0, 0);
    }
  }
  main {
    border-radius: 1.5rem;
    text-align: center;
    max-width: 45rem;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 1.5rem 1.5rem;
    animation: 2s fadeIn forwards;
    zoom: 0.8;
  }
  .container {
    position: relative;
    padding: 1.5rem 0;
  }

  h1 {
    color: white;
    font-size: 2em;
    font-weight: 700;
    margin-top: 0;
  }

  p {
    color: white;
  }

  .devinfo {
    color: white;
  }
  .devinfo a {
    color: white;
  }

  @media (max-width: 639px) {
    .container {
      zoom: 0.7;
    }
  }
</style>
