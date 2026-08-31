<template>
  <v-container>
    <v-form @submit.prevent="enviarCorreo">
      <v-text-field v-model="form.nombre" label="Nombre" required></v-text-field>
      <v-text-field v-model="form.email" label="Correo Electrónico" type="email" required></v-text-field>
      <v-textarea v-model="form.mensaje" label="Mensaje" required></v-textarea>
      <v-btn type="submit" color="primary" :loading="cargando">Enviar</v-btn>
    </v-form>
  </v-container>
</template>

<script>
// import axios from 'axios';

export default {
  data() {
    return {
      form: {
        nombre: '',
        email: '',
        mensaje: '',
      },
      cargando: false,
    };
  },
  methods: {
    async enviarCorreo() {
      this.cargando = true;
      try {
        // const response = await axios.post('http://localhost:3000/api/send-email', this.form);
        alert(response.data.message); // Muestra un mensaje de éxito
        // Limpia el formulario después de enviar
        this.form = { nombre: '', email: '', mensaje: '' };
      } catch (error) {
        console.error('Error al enviar:', error);
        alert('Hubo un error al enviar el correo.');
      } finally {
        this.cargando = false;
      }
    },
  },
};
</script>