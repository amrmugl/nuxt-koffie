<template>
  <header>
    <nav>
      <h1>KOFFIE</h1>
      <ul>
        <li @click="onSignButtonClicked">Sign In</li>
        <li @click="onSignButtonClicked">Sign Up</li>
      </ul>
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

<style lang="scss" scoped>
div {
  color: $redwood;
}
</style>
