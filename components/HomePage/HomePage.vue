<template>
  <div>
    <Header />
<<<<<<< HEAD
    <div
      class="flex flex-col items-center justify-center mt-5  lg:mx-28 lg:mt-32 lg:flex-row"
    >
      <img
        src="~/assets/images/cup.png"
        class="order-2 w-3/4 lg:w-1/2"
        alt="Coffee Cup"
      />
      <div class="w-5/6 mt-5">
        <h2 class="text-3xl font-shrimp lg:text-6xl">
          A Yawn is a Silent Scream For Coffee
        </h2>
        <h3 class="mt-5 text-sm lg:text-lg">
=======
    <main class="main">
      <img class="main__img" src="~/assets/images/cup.png" alt="Coffee Cup" />
      <div class="content">
        <h2 class="content__headline">A Yawn is a Silent Scream For Coffee</h2>
        <h3 class="content__description">
>>>>>>> main
          Start your day with a good with a good cup of coffee made with fresh
          ingredients. Make your own coffee using our coffee builder which
          provides an intuitive interface for you to build your coffee.
        </h3>
<<<<<<< HEAD
        <button
          class="px-5 py-3 text-white mt-7 lg:text-lg bg-redwood rounded-xl"
          @click="createCoffeeHandler"
        >
          Let's Create Coffee
        </button>
      </div>
    </div>
=======
        <button class="content__btn" @click="createCoffeeHandler">
          Let's Create Coffee
        </button>
      </div>
    </main>
>>>>>>> main
  </div>
</template>

<script>
import Header from './Header.vue'
export default {
  name: 'HomePage',
  components: { Header },
  methods: {
    createCoffeeHandler() {
      this.$router.push('/builder')
    },
  },
}
</script>

<<<<<<< HEAD
<style scoped>
img {
  filter: drop-shadow(0px 20px 4px rgba(84, 30, 13, 0.4));
=======
<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10%;

  &__img {
    width: 25rem;
    filter: drop-shadow(0px 10px 4px rgba(84, 30, 13, 0.4));
  }
}
.content {
  margin: 4rem;

  &__headline {
    font-size: $m-xl;
    font-family: 'shrimp';
  }

  &__description {
    font-size: $m-normal;
    font-weight: normal;
    margin: 2rem 0;
  }

  &__btn {
    border: none;
    font-size: $m-normal;
    background-color: $redwood;
    padding: 1.5rem 2.5rem;
    color: $white;
    border-radius: 1rem;
  }
}
@include media('>tablet') {
  .main {
    flex-direction: row;
    justify-content: space-around;
    margin: 20% 10%;

    &__img {
      width: 35rem;
      filter: drop-shadow(0px 20px 4px rgba(84, 30, 13, 0.4));
      order: 1;
    }
  }
  .content {
    width: 60rem;
    margin: 0;

    &__headline {
      font-size: $d-xl;
    }

    &__description {
      font-size: $d-noraml;
      margin: 3rem 0;
    }

    &__btn {
      font-size: $d-noraml;
    }
  }
>>>>>>> main
}
</style>
