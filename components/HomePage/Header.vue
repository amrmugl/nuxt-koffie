<template>
  <header class="w-full">
    <nav class="px-8 py-4 rounded-br-[40px] w-max bg-redwood">
      <h1 class="text-2xl text-white font-shrimp">KOFFIE</h1>
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
