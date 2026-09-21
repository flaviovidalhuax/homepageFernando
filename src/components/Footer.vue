<template>
  <v-footer dark padless class="blue-grey darken-4  darken-4">
    <v-container fluid>
      <v-row justify="center" align="center" class="py-4 ">
        <!-- Columna de información de contacto -->
        <v-col cols="12" sm="6" md="3" class="text-center">
          <v-row>
            <a
            :href="this.maps"
            target="_blank"
            class="text-decoration-none text-black a-large btnMove"
          >
           <v-icon small class="mr-1 btnMove" color="blue">mdi-map-marker</v-icon>
          </a>
          <span class="caption" >Calle Falsa 123, Ciudad, País</span>
          </v-row>
          
        </v-col>

        <v-col cols="12" sm="4" md="2" class="text-center">
          <a
            :href="this.email"
            target="_blank"
            class="text-decoration-none text-black a-large btnMove"
          >
          <v-icon small class="mr-1 btnMove" color="red">mdi-email</v-icon>

          </a>
          <span class="caption" >pool.360.inc@gmail.com</span>
        </v-col>

        <v-col cols="12" sm="6" md="3" class="text-center">
        
          <v-btn
            icon
            small
            href="https://facebook.com"
            target="_blank"
            class="mx-1"
          >
            <a
            :href="this.facebook"
            target="_blank"
            class="text-decoration-none text-black a-large btnMove"
          >
            <v-icon color="blue">mdi-facebook</v-icon>
             
          </a>
          </v-btn>
        </v-col>
        <v-col cols="12" sm="6" md="3" class="text-center">
        
          <a
            :href="this.facebook"
            target="_blank"
            class=" text-decoration-none text-black a-large btnMove"
          >
            <v-icon color="red">mdi-phone</v-icon>
             6613130870
          </a>
        </v-col>

        <v-col cols="12" sm="6" md="3" class="text-center">
          <v-icon small class="mr-1">mdi-update</v-icon>
          <span class="caption">
            Date: {{ fechaActual }}</span>
        </v-col>
      </v-row>

      <!-- Línea divisoria y copyright -->
      <v-divider dark></v-divider>
      <v-row justify="center" class="mt-2">
        <v-col cols="12" class="text-center">
          <span class="caption">© {{ new Date().getFullYear() }} - Pro pools INC.</span>
       <v-card class="pa-4">
  <v-card-title>Dirección</v-card-title>
  <v-card-text>
    Av. Siempre Viva 123, Springfield, CDMX, CP 12345
  </v-card-text>
</v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      // Puedes usar la fecha actual o una fija
      fechaActual: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      whatsapp: "https://web.whatsapp.com/",
      github:"https://github.com/flaviovidalhuax",
      email:"https://mail.google.com/",
      facebook:"https://facebook.com/",
      maps:"https://maps.google.com/"
    };
  },
};
</script>

<style scoped>
.v-footer {
  /* Ajusta el padding si quieres */
  padding: 16px 0;
}
.v-icon {
  vertical-align: middle;
}
</style>
<style scoped>
.btnMove:hover i{
  font-size:30px;
  transform: rotate(45deg);
  color:green;
}
</style>