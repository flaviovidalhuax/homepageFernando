<template>
  <div class="btn-wa" @mouseover="hover = true" @mouseout="hover = false">
    <a :href="whatsapp" target="_blank" class="text-decoration-none text-green d-flex justify-content-center align-items-center what">
      <v-icon size="x-large" class=" { 'd-none': !hover }">mdi-whatsapp</v-icon>
    </a>
    <a :href="linkedin" target="_blank" class="text-decoration-none text-blue d-flex justify-content-center align-items-center what">
      <i class="fab fa-linkedin"></i>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      whatsapp: "https://web.whatsapp.com/",
      linkedin:"https://www.linkedin.com/in/flavio-hernandez-jr-a0476b94/",
      hover: false,
    };
  },
};
</script>

<style scoped>
.btn-wa a {
  width: 70px;
  height: 70px;
}
.btn-wa {
  position: fixed;
  bottom: 10%;
  right: 0;
  background-color: #F3E5F5;
  color: white;
  border: 1px solid ;
  border-radius: 50% 0 0 50%;
  width: 70px;
  height: 70px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: width 0.2s;
  z-index: 1000;
}
.what {
  transform: rotate(45deg);
}

.btn-wa:hover {
  width: 140px;
  border-radius: 50px 0 0 50px;
 
}

.btn-wa a:hover {
  width: 140px;
  border-radius: 50px 0 0 50px;
  transform: rotate(-15deg);
}
i{
  font-size: 30px;
}
</style>