<template>

  <v-app>
    
    <Navbar />
    <navbarAbas />

  <v-main >
    <v-container pa-0 fluid>
      <Banner />
    <Servicos />
    <sobreNos v-show="showSobre" />
    <PorqueNos v-show="showPorque" />
    </v-container>
    
  </v-main>


  </v-app>




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
      showServ: true,
      showSobre: true,
      showPorque: true
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
      },
    funcServ: function() {
      let x = window.scrollY;
      if ( x > 1 ) {
        this.showServ = true;
        return;
      }
    },
    funcSobre: function() {
      let x = window.scrollY;
      if ( x > 500 ) {
        this.showSobre = true;
        return;
      }
    },
    funcPorque: function() {
      let x = window.scrollY;
      if ( x > 950 ) {
        this.showPorque = true;
        return;
      }
    }

  },
  created() {
    if ( this.isMobile() ) {
      this.$router.push({name: 'mobile'});
    }

    window.addEventListener('resize', this.responsividade);
    window.addEventListener('scroll', this.funcServ);
    window.addEventListener('scroll', this.funcSobre);
    window.addEventListener('scroll', this.funcPorque);
  },
  destroyed() {
    window.removeEventListener('resize', this.responsividade);
    window.removeEventListener('scroll', this.funcServ);
    window.removeEventListener('scroll', this.funcSobre);
    window.removeEventListener('scroll', this.funcPorque);
  }
};

</script>
<style scoped>
.v-btn:hover:before,
.v-btn:focus:before {
  display: none;
}

</style>

