<template>
  <v-main>
    <v-parallax
    height="140"
    src="@/../static/mobile-bg.png" />
    <div align="center">
        <v-avatar class="sombra" size="80">
          <v-img max-height="52%" max-width="80%" src="@/../static/katalid-logo.svg"></v-img>
        </v-avatar>
    </div>
    <div>
      <v-col align="center">
        <h1>Katalid</h1>
        <p class="text-sm-body-2">Nosso limite está na sua imaginação</p>
      </v-col>
    </div>
    <div style="width:100%">
    <div>
      <v-col align="center">
        <p class="text-sm-body-2">Desenvolvimento de sites e aplicações</p>
      </v-col>
    </div>
        <v-card flat class="lista">
          <ul>
          <li>Sites Wordpress</li>
          <li>Ferramentas</li>
          <li>Desenvolvimento Web</li>
          <li>Desenvolvimento de aplicativos</li>
          </ul>
          </v-card>
        

    <div>
      <v-col cols="12" align="center">
      <v-btn class="botao-mobile">Portifólio</v-btn>
      <v-btn class="botao-mobile">Contato</v-btn>
      </v-col>
    </div>
    </div>
    </v-main>

</template>

<script>
export default {
  created() {
    window.addEventListener('resize', this.responsividade);
  },
  methods: {
    responsividade: function () {
    let w = document.documentElement.clientWidth;
    if ( w > 760 ) {
      this.$router.push({name: 'home'});
    }
    }
  },
  destroyed() {
    window.removeEventListener('resize', this.responsividade);
  }
}
</script>

<style scoped>

.sombra {
  bottom: 35px;
  margin: 0 auto;
  background-color: whitesmoke;
  border-radius: 4000000px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}


.lista {
  margin-left: 50px;
  margin-bottom: 100px;
}

.botao-mobile {
  margin-right: 10px;
}
</style>
