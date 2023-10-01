<script>
import { fade, slide, blur } from 'svelte/transition';

import LoginView from "./auth-views/LoginView.svelte";
import RegistrView from "./auth-views/RegistrView.svelte";

let options = {
  'login': LoginView,
  'registr': RegistrView
};

let selected = 0;


function setLoginView() {
  selected = 0;
}

function setRegistrationView() {
  selected = 1;
}
let authData = {};
</script>


<div class="auth-view">
  <div class="auth-view__switch-btns">
  <button on:click={setLoginView} class="{['auth_view__login-btn', selected == 1 ? 'active' : ''].join(' ')}">Войти</button>
  <button on:click={setRegistrationView} class="{['auth_view__registr-btn', selected == 0 ? 'active' : ''].join(' ')}">Зарегестрироваться</button>
  </div>
  {#each Object.keys(options) as page, i (i)}
  {#if i == selected}
  <div class="auth-view__content" >
    <svelte:component this={options[page]} on:authResult={(event)=>authData} />
  </div>
  {/if}
  
  {/each}
  
</div>

<style>
.auth-view {
}
.auth-view__switch-btns {
  display: flex;

}
.auth_view__login-btn {
  background-color: var(--second-color);
  border-top-left-radius: 10px;
  width: 30%;
}
.auth_view__registr-btn {
  background-color: var(--second-color);
  border-top-right-radius: 10px;
  width: 70%;
}

.auth-view__content {
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  justify-content: center;
  padding: 8px;
  width: 100%;
  background-color: var(--second-color);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.active {
  background-color: var(--primary-color) !important;
}

</style>