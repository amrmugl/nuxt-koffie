<template>
  <div>
    <Header />
    <div>
      <div>
        <h2>A Yawn is a Silent Scream for Coffee</h2>
        <h3>
          Start your day with a good with a good cup of coffee made with fresh
          ingredients. Make your own coffee using our coffee builder which
          provides an intuitive interface for you to build your coffee.
        </h3>
        <button @click="createCoffeeHandler">Let's Create Coffee</button>
      </div>
      <img src="~/assets/images/cup.png" alt="Coffee Cup" />
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

<style lang="scss" scoped></style>
