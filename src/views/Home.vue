<template>
    <v-img
     src="@/assets/pool.png" 
      max-height="800"
      cover
      class="position-relative bg-grey-lighten-2  align-center justify-center rounded-lg"
      variant="outlined"
      style="z-index: 10;"
    >

    <h1 class=" pa-16 text-white text-h2 font-weight-light text-center font-weight-black p-font-weight-thin" 
    style="
      font-family: 'Montserrat', sans-serif;
      letter-spacing: 5px;
      line-height: 1.2;
      margin-bottom: 0;
    ">
  Do you want to build your pool?
</h1>
<h1 class="mt-16 text-white text-h3 font-weight-thin text-center font-weight-bold  font-family-" 
    style="
      font-family: 'Montserrat', sans-serif;
      letter-spacing: 8px;
      line-height: 1.4;
      margin-top: -8px; /* junta las líneas */
    ">


     <v-btn id="btn" rounded="xl" variant="outlined" color="#754319" class="m-3 bg-white ">
          <a
            :href="this.whatsapp"
            target="_blank"
            class="text-decoration-none text-black a-large btnMove"
          >
            <v-icon>mdi-whatsapp</v-icon>
            Contac me 
          </a>

          <a
            :href="this.whatsapp"
            target="_blank"
            class="text-decoration-none text-white a-small"
          >
            
          </a>
      </v-btn>

      <v-btn id="btn" rounded="xl" variant="outlined" color="#754319" class="m-3 bg-white  ">
            <a
            :href="this.github"
            target="_blank"
            class="text-decoration-none text-black a-large btnMove"
          >
          <v-icon>mdi-github</v-icon>

            github
          </a>
          <a
            :href="this.github"
            target="_blank"
            class="text-decoration-none text-white a-small"
          >
           </a>
        </v-btn>
  Designed for you.
</h1>

    </v-img>
    
    <div>
      <BtnWhat />
    <h1>Home</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi commodi doloribus repellat quia natus laborum, ab et placeat rerum nam in dolorum ad eveniet accusantium aspernatur soluta at corrupti quas.</p>
  <v-card-title>Mi Título de Tarjeta</v-card-title>

    <v-carousel>
    <v-carousel-item
      src="@/assets/pool3.png"
      cover
    ></v-carousel-item>
    <v-carousel-item
       src="@/assets/pool4.png"
      cover
    ></v-carousel-item>
    <v-carousel-item
      src="@/assets/pool5.png"
      cover
    ></v-carousel-item>
        <v-carousel-item
      src="@/assets/pool6.png"
      cover
    ></v-carousel-item>
        <v-carousel-item
      src="@/assets/pool7.jpeg"
      cover
    ></v-carousel-item>
  </v-carousel>

    </div>


</template>

<script>
import BtnWhat from '@/components/BtnWhat.vue';
export default {
  props: {
    wa: String,
  },
  data() {
    return {
      whatsapp: "https://web.whatsapp.com/",
      github:"https://github.com/flaviovidalhuax",
      email:"https://mail.google.com/",
      vid:"https://i.imgur.com/j0qnFEP.mp4",
    };
  },
};
</script>
<style scoped>
.btnMove:hover i{
  font-size:30px;
  transform: rotate(45deg);
  color:green;
}
</style>