
<script>
  let email = '';
  let pass = '';

  function sendLoginData() {
    const reqOptions = {
      params: {
        email: email,
        pass: pass
      }
    };

    console.log(reqOptions);
  }
</script>

<div class="login-view">
  <input class="login-view__email-inp" bind:value={email} placeholder="email">
  <input class="login-view__pass-inp" bind:value={pass} placeholder="pass">
  <button on:click={sendLoginData} class="login-view__login-btn">Войти</button>
</div>

<style lang="scss">
.login-view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__login-btn {

  }

  &__email-inp {
  }

  &__pass-inp {

  }
}
</style>