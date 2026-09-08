<template>
  <v-app>

     <v-app-bar color="primary" density="compact">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Pro pools INC.</v-app-bar-title>

      <v-menu>
            <template v-slot:activator="{ props }">
                <v-btn
                color="red darken-1"
                v-bind="props"
                >
                About Us
                </v-btn>
            </template>
            <v-list>
                <v-list-item
                v-for="(item, index) in callUs"
                :key="index"
                  :to="item.to"
                :value="index"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
      </v-menu>

      <v-menu>
            <template v-slot:activator="{ props }">
                <v-btn
                color="red darken-1"
                v-bind="props"
                >
                Services
                </v-btn>
            </template>
            <v-list>
                <v-list-item
                v-for="(item, index) in services"
                :key="index"
                  :to="item.to"
                :value="index"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
      </v-menu>



    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app>
       
    
      <v-list>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :to="item.to"
          :prepend-icon="item.icon"
          :title="item.title"
          active-color="primary"
        ></v-list-item>
      </v-list>
  </v-navigation-drawer>

    <v-main>
      <Icono />
          <v-container fluid>
            <router-view></router-view>
          </v-container>
    </v-main>
    <v-btn
      class="ma-3"
      icon="mdi-theme-light-dark"
      location="bottom right"
      position="absolute"
      @click="$vuetify.theme.cycle()"
    />
  </v-app>
 <Footer />
</template>

<script lang="ts" setup>
// @ts-ignore Icono.vue is a Vue SFC without a local TypeScript declaration.
import Icono from './components/Icono.vue';
// @ts-ignore Footer.vue is a Vue SFC without a local TypeScript declaration.
import Footer from './components/Footer.vue';
import { ref } from 'vue'

const drawer = ref(true)
const menuItems = [
  { title: 'Inicio', icon: 'mdi-home', to: '/' },
  { title: 'Servicio 1', icon: 'mdi-cog', to: '/servicio1' },
  { title: 'Servicio 2', icon: 'mdi-cloud', to: '/servicio2' },
  { title: 'Servicio 3', icon: 'mdi-account', to: '/servicio3' },
  
  { title: 'Contact', icon: 'mdi-account', to: '/Cont' },
  { title: 'About Galery', icon: 'mdi-information', to: '/Galery' },
  { title: ' ServiceOport', icon: 'mdi-information', to: '/ServiceOport' }
]
const  services =[
        { title: 'Pool Cleaning', icon: 'mdi-cog', to: '/servicio1'  },
        { title: 'Pool Repair', icon: 'mdi-cloud', to: '/servicio2'  },
        { title: 'Pool Maintenance', icon: 'mdi-account', to: '/servicio3'  },
        { title: 'Pool Renovation', icon: 'mdi-account', to: '/servicio4'  }
      ]
const callUs = [
        { title: 'Contacto', icon: 'mdi-cog', to: '/Cont' },
        { title: 'galery', icon: 'mdi-cloud', to: '/Galery' },
        { title: 'Servicio Oportunity', icon: 'mdi-account', to: '/ServiceOport' },
      ]
const  dising =[
        { title: 'diseño', icon: 'mdi-cog', to: '/servicio1'  },
        { title: 'Pool Repair', icon: 'mdi-cloud', to: '/servicio2'  },
        { title: 'Pool Maintenance', icon: 'mdi-account', to: '/servicio3'  },
        { title: 'Pool Renovation', icon: 'mdi-account', to: '/servicio4'  }
      ]
</script>
