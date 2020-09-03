<template>

<div id="app">
  <v-app>
    
    <Navbar> </Navbar>
    <navbarAbas></navbarAbas>

    <v-main>
      
      <Banner></Banner>
      <Servicos></Servicos>
      <sobreNos></sobreNos>
      <PorqueNos></PorqueNos>

    </v-main>

  </v-app>

</div>

</template>

<script>

import navbarAbas from "./navbar/abas"
import Navbar from "./navbar/navbar";
import Banner from "./banner/banner";
import Servicos from "./servicos/servicos";
import sobreNos from "./sobre/sobre";
import PorqueNos from "./porque-nos/porqueNos";

export default {
  name: 'app',
  components: {
    Navbar,
    navbarAbas,
    Banner,
    Servicos,
    sobreNos,
    PorqueNos,
  },
  data() {
    return {
    }
  },
  methods: {
    isMobile() {
      if(screen.width <= 760) {
        return true;
      } else {
        return false;
      }
    },
    responsividade: function() {
      let w = document.documentElement.clientWidth;
      if (w <= 760) {
        this.$router.push({name: 'mobile'});
      }
      }
  },
  created() {
    if ( this.isMobile() ) {
      this.$router.push({name: 'mobile'});
    }

    window.addEventListener('resize', this.responsividade);
  },
  destroyed() {
    window.removeEventListener('resize', this.responsividade);
  }
};

</script>
<style scoped>
.v-btn:hover:before,
.v-btn:focus:before {
  display: none;
}

</style>

