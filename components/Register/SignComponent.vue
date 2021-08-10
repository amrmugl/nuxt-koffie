<template>
  <div class="register">
    <img class="register__img" src="~/assets/images/coffee.png" alt="coffee" />
    <div class="formContainer">
      <h4 class="formContainer__heading">
        <span
          :class="!activeLink ? 'sign-active' : ''"
          class="formContainer__heading-sign"
          @click="toggleActive"
          >Sign Up</span
        ><span
          class="formContainer__heading-sign"
          :class="activeLink ? 'sign-active' : ''"
          @click="toggleActive"
          >Sign In</span
        >
      </h4>
      <form class="form" @submit.prevent="onFormSubmit">
        <div class="form__container">
          <label class="form__label" for="username">Username</label>
          <input
            id="username"
            class="form__input"
            type="text"
            name="username"
          />
        </div>
        <div class="form__container">
          <label class="form__label" for="email">Email</label>
          <input id="email" class="form__input" type="email" name="email" />
        </div>
        <div class="form__container">
          <label class="form__label" for="password">Password</label>
          <input
            id="password"
            class="form__input"
            type="password"
            name="password"
          />
        </div>
        <button class="form__btn">Continue</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignComponent',
  data() {
    return {
      activeLink: false,
    }
  },
  methods: {
    onFormSubmit() {
      this.$router.push('/builder')
    },
    toggleActive() {
      this.activeLink = !this.activeLink
    },
  },
}
</script>

<style lang="scss" scoped>
.register {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;

  &__img {
    width: 25rem;
    margin-top: 5rem;
  }
}

.formContainer {
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  margin-top: 5rem;

  &__heading {
    font-size: $m-l;
    font-weight: bold;

    &-sign {
      font-size: $m-normal;
      margin: 0 1rem;
    }
  }
}

.form {
  margin-top: 3rem;

  &__container {
    margin-top: 5rem;
    display: flex;
    position: relative;
    align-self: center;
    font-size: $m-normal;
  }

  &__input {
    outline: none;
    border: none;
    border-bottom: 0.2rem solid $redwood;
    background-color: $melon;
    width: 25rem;

    &:active,
    &:focus {
      .form__label {
        top: -2rem;
      }
    }
  }

  &__label {
    position: absolute;
    top: -1rem;
    left: 0.5rem;
  }
}

.sign-active {
  font-size: $m-l;
}

@include media('>tablet') {
  .sign-active {
    font-size: $d-l;
  }
}
</style>
