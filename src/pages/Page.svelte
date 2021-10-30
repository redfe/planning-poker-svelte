<script>
  import Table from "../ui_components/table/Table.svelte";
  import UserSelection from "../ui_components/user_selection/UserSelection.svelte";
  import UnsplashCredit from "../UnsplashCredit.svelte";
  import { onMount } from "svelte";

  export let name;
  export let isTableClosed = true;
  export let estimates = [];
  export let userName = "";
  export let isFixedUserName = false;
  export let handleOpenButtonClick;
  export let handleFixName;
  export let handleSelectCard;

  estimates = estimates || [];

  const calcHeight = () => {
    return document.documentElement.offsetHeight <
      document.documentElement.scrollHeight
      ? "auto"
      : "100%";
  };

  let height = calcHeight();
  console.log("height:", height);

  const changeHeight = () => {
    height = calcHeight();
  };
</script>

<svelte:window on:resize={changeHeight} on:load={changeHeight} />

<div class="container" style="height: {height}">
  <main>
    <h1>{name}</h1>
    <p>share the URL of this page with your team members.</p>
    <Table isClosed={isTableClosed} {estimates} {handleOpenButtonClick} />
    <UserSelection
      {userName}
      {isFixedUserName}
      {estimates}
      {handleFixName}
      {handleSelectCard}
    />
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
    text-align: center;
    max-width: 42rem;
    height: 100%;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 0 1.5rem;
    animation: 2s fadeIn forwards;
  }
  .container {
    position: relative;
    background-image: url(https://source.unsplash.com/1600x900/?nature);
    background-repeat: repeat-y;
    background-size: cover;
    background-blend-mode: overlay;
    padding: 0;
    animation: 3s bgFadeIn forwards;
  }

  h1 {
    color: white;
    font-size: 2em;
    font-weight: 700;
    margin-top: 0;
    padding-top: 3rem;
  }

  p {
    color: white;
  }

  @media (max-width: 639px) {
    .container {
      zoom: 0.9;
    }
  }
</style>
