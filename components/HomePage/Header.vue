<template>
<<<<<<< HEAD
  <header class="w-full">
    <nav class="px-8 py-4 rounded-br-[40px] w-max bg-redwood">
      <h1 class="text-2xl text-white font-shrimp">KOFFIE</h1>
=======
  <header class="header">
    <nav class="header__nav">
      <h1 class="header__title">KOFFIE</h1>
      <ul class="header__links">
        <li class="header__links-btn" @click="onSignButtonClicked">Sign In</li>
        <li class="header__links-btn" @click="onSignButtonClicked">Sign Up</li>
      </ul>
>>>>>>> main
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    onSignButtonClicked() {
      this.$router.push('/register')
    },
  },
}
</script>
<<<<<<< HEAD
=======

<style lang="scss" scoped>
.header {
  width: 100vw;
  height: 7rem;

  &__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 2rem;
  }

  &__title {
    font-size: $m-l;
    padding: 1.5rem 3rem;
    background-color: $redwood;
    color: $white;
    font-family: 'shrimp';
    width: fit-content;
    border-radius: 0 0 4rem 0;
  }

  &__links {
    list-style: none;
    display: flex;
    font-size: $m-normal;
    font-weight: bold;
    height: fit-content;

    &-btn {
      margin: 0 1rem;
      transition: all 0.7s ease;
      position: relative;
      cursor: pointer;
      padding: 0.7rem 0;

      &::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 3px;
        bottom: 0;
        left: 0;
        background-color: $redwood;
        transform-origin: bottom right;
        transition: transform 0.3s ease-in;
      }

      &:hover:after,
      &:focus:after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    }
  }

  @include media('>tablet') {
    .header {
      height: 10rem;

      &__nav {
        margin-right: 8rem;
      }

      &__title {
        font-size: $d-l;
        padding: 2rem 4rem;
        border-radius: 0 0 5rem 0;
      }

      &__links {
        font-size: $d-noraml;

        &-btn {
          margin: 0 2rem;
        }
      }
    }
  }
}
</style>
>>>>>>> main
