<script>
import LoginView from "./auth-views/LoginView.svelte";
import RegistrView from "./auth-views/RegistrView.svelte";

let options = {
  'login': LoginView,
  'registr': RegistrView
};

let selected = options.login;


function setLoginView() {
  selected = options.login;
}

function setRegistrationView() {
  selected = options.registr;
}
</script>


<div class="auth-view">
  <div class="auth-view__switch-btns">
    <button on:click={setLoginView} class="auth_view__login-btn">Войти</button>
  <button on:click={setRegistrationView} class="auth_view__registr-btn">Зарегестрироваться</button>
  </div>
  <div class="auth-view__content">
    <svelte:component this={selected} />
  </div>
</div>

<style>
.auth-view {
  width: 200px;
}
.auth-view__switch-btns {
  display: flex;
}
.auth_view__login-btn {
  width: 50%;
}
.auth_view__registr-btn {
  width: 50%;
}

.auth-view__content {
  width: 100%;
  background-color: white;
}

</style>