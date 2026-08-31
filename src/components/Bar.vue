<template>

<v-app-bar rounded>

  <v-app-bar-title>Pro pools INC.</v-app-bar-title>
   <template v-slot:append>
    

        <v-menu>
            <template v-slot:activator="{ props }">
                <v-btn
                color="primary"
                v-bind="props"
                @click="drawer = !drawer"
                >
                About Us
                </v-btn>
            </template>
            <v-navigation-drawer v-model="drawer" app>
            <v-list>
              
                <v-list-item
               v-for="item in callUs"
              :key="item.title"
              :to="item.to"
              :title="item.title"
                  >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
          </v-navigation-drawer>
        </v-menu>
            <v-menu>
            <template v-slot:activator="{ props }">
                <v-btn
                color="primary"
                v-bind="props"
                >
                Services
                </v-btn>
            </template>
            <v-list>
                <v-list-item
                v-for="(item, index) in services"
                :key="index"
                :value="index"
                >
                <!-- <v-navigation-drawer v-model="drawer" app> -->
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                <!-- </v-navigation-drawer> -->

                </v-list-item>
            </v-list>
        </v-menu>

    <v-btn icon="mdi-magnify"></v-btn>

    <v-btn icon="mdi-dots-vertical"></v-btn>
        
  </template>
</v-app-bar>
    
          <v-container fluid>
            <router-view></router-view>
          </v-container>
</template>

<script>
const drawer = false
  export default {
    data: () => ({
      items: [
        { title: 'Service Oportunity' },
        { title: 'Photo Gallery' },
        { title: 'Contact' },
        { title: 'Design' },
      ],
      services: [
        { title: 'Pool Cleaning' },
        { title: 'Pool Repair' },
        { title: 'Pool Maintenance' },
        { title: 'Pool Renovation' },
      ],
       callUs : [
        { title: 'Contacto', icon: 'mdi-cog', to: '/Cont' },
        { title: 'galery', icon: 'mdi-cloud', to: '/Galery' },
        { title: 'Servicio Oportunity', icon: 'mdi-account', to: '/ServiceOport' },
      ]
    }),
  }
</script>