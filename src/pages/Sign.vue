<template>
  <q-page class="flex flex-center">
    <q-img :src="'statics/img/signin-bg.jpg'" class="fullscreen">
      <div class="absolute-full text-subtitle2 flex flex-center">
        <div class="column text-center bg-white q-pa-lg shadow-box">
          <q-img :src="'statics/img/logo.png'" />
          <p class="text-primary">Please log in to your account bellow</p>
          <q-input filled v-model="text" label="Email" class="q-pb-sm"/>
          <q-input filled v-model="password" type="password" label="Password" />
          <q-btn color="blue" class="full-width q-mt-md" label="Submit" />
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
