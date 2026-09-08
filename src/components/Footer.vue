<template>
  <v-footer dark padless class="blue-grey darken-4 bg-red darken-4">
    <v-container fluid>
      <v-row justify="center" align="center" class="py-4 ">
        <!-- Columna de información de contacto -->
        <v-col cols="12" sm="6" md="3" class="text-center">
          <v-row>
                      <v-icon small class="mr-1">mdi-map-marker</v-icon>

          <span class="caption" >Calle Falsa 123, Ciudad, País</span>
          </v-row>
           <v-row>
          <span class="caption" >Calle Falsa 123, Ciudad, País</span>
          </v-row>
           <v-row>
          <span class="caption" >Calle Falsa 123, Ciudad, País</span>
          </v-row>
          
        </v-col>

        <v-col cols="12" sm="6" md="3" class="text-center">
          <v-icon small class="mr-1">mdi-email</v-icon>
          <span class="caption">contacto@tudominio.com</span>
        </v-col>

        <v-col cols="12" sm="6" md="3" class="text-center">
          <v-btn
            icon
            small
            href="https://facebook.com/tupagina"
            target="_blank"
            class="mx-1"
          >
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <!-- Puedes añadir más redes sociales aquí -->
        </v-col>

        <v-col cols="12" sm="6" md="3" class="text-center">
          <v-icon small class="mr-1">mdi-update</v-icon>
          <span class="caption">Actualizado: {{ fechaActual }}</span>
        </v-col>
      </v-row>

      <!-- Línea divisoria y copyright -->
      <v-divider dark></v-divider>
      <v-row justify="center" class="mt-2">
        <v-col cols="12" class="text-center">
          <span class="caption">© {{ new Date().getFullYear() }} - Mi Empresa. Todos los derechos reservados.</span>
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
      fechaActual: new Date().toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
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