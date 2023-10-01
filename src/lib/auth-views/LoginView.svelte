
<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  export let pages = {};


  let email = '';
  let pass = '';

  function sendLoginData() {
    const reqOptions = {
      params: {
        email,
        pass
      }
    };

    console.log(reqOptions);

    const response = {'IamResponse': 2222}
    dispatch('authResult', response);
  }
</script>

<input class="login-view__email-inp" bind:value={email} placeholder="email">
<input class="login-view__pass-inp" bind:value={pass} placeholder="pass">
<button on:click={sendLoginData} class="login-view__login-btn">Войти</button>

<style lang="scss">
  textarea:focus, input:focus{
    outline: none;
  }

  @mixin login-inp {
    border-radius: 4px;
    border-width: 0px;
    padding: 2px;
    color: rgb(18, 22, 64);
  }

  .login-view {

    &__login-btn {
      border-radius: 5px;
      margin: 4px;
    }

    &__email-inp {
      @include login-inp;
    }

    &__pass-inp {
      @include login-inp;
    }
  }
</style>