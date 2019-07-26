<template>
  <q-page class="flex flex-center">
    <q-img :src="'statics/img/signin-bg.jpg'" class="fullscreen">
      <div class="absolute-full text-subtitle2 flex flex-center">
        <div class="column text-center">
          <h3>Log In</h3>
          <p>Please log in to your account bellow</p>
          <q-input filled v-model="text" label="Email" />
        </div>
      </div>
    </q-img>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'Sign'
}
</script>
