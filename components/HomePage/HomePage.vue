<template>
  <div>
    <Header />
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
          Start your day with a good with a good cup of coffee made with fresh
          ingredients. Make your own coffee using our coffee builder which
          provides an intuitive interface for you to build your coffee.
        </h3>
        <button
          class="px-5 py-3 text-white mt-7 lg:text-lg bg-redwood rounded-xl"
          @click="createCoffeeHandler"
        >
          Let's Create Coffee
        </button>
      </div>
    </div>
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

<style scoped>
img {
  filter: drop-shadow(0px 20px 4px rgba(84, 30, 13, 0.4));
}
</style>
