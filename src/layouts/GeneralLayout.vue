<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" style="max-width:50px;">
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawerLeft" side="left" bordered>
      <div class="bg-brown text-center text-white flex flex-center" style="height: 150px;">
        <p>Here is main menu</p>
      </div>
      <q-scroll-area style="height: calc(100% - 150px); border-right: 1px solid #ddd">
        <q-list padding>
          <q-item clickable v-ripple v-for="(item,key) in menu" :key="key" :to="{ path: item.route }">
            <q-item-section avatar>
              <q-icon :name="item.icon" />
            </q-item-section>

            <q-item-section >
              {{ item.name }}
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      drawerLeft: true,
      menu: [{
        'name': 'Dashboard',
        'icon': 'dashboard',
        'route': '/dashboard'
      }, {
        'name': 'Items',
        'icon': 'shopping_cart',
        'route': '/items'
      }, {
        'name': 'Activity',
        'icon': 'local_activity',
        'route': '/activity'
      }, {
        'name': 'Contacts',
        'icon': 'contact_mail',
        'route': '/contacts'
      }]
    }
  }
}

</script>