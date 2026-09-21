
<template>
  <div class="position-absolute " style="width: 150px; height: 150px;">
    <v-avatar
      size="150"
      class="rounded-circle position-relative m-3 p-2 "
      style="z-index: 100;"
      
    >
      <v-img src="@/assets/icon.png" alt="Foto de perfil" class="btnMove"></v-img>
    </v-avatar>
  </div>

</template>



<script >

</script>

<style scoped>
.btnMove {
  transition: transform 0.4s ease;
}

.btnMove:hover {
  transform: rotate(45deg) scale(1.1);
  filter: hue-rotate(90deg);  /* opcional, para efecto verde */
}
</style>