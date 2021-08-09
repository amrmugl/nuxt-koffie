<template>
  <div>
    <img src="~/assets/images/coffee.png" alt="coffee" />
    <div>
      <h4><span>Sign Up</span><span>Sign In</span></h4>
      <form @submit.prevent="onFormSubmit">
        <div>
          <label for="username">Username</label>
          <input id="username" type="text" name="username" />
        </div>
        <div>
          <label for="email">Email</label>
          <input id="email" type="email" name="email" />
        </div>
        <div>
          <label for="password">Password</label>
          <input id="password" type="password" name="password" />
        </div>
        <button>Continue</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignComponent',
  methods: {
    onFormSubmit() {
      this.$router.push('/builder')
    },
  },
}
</script>

<style lang="scss" scoped>
img {
  height: 500px;
}
</style>
