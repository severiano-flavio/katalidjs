<template>
  <v-container fluid>
    <v-navigation-drawer app class="hidden-md-and-up" v-model="visibilidade" right>
        <!-- Mobile menu -->
    </v-navigation-drawer>

    <v-toolbar absolute flat width="95vw" color="transparent" transition="fade-transition" class="mb-n8">
      <div class="d-flex align-center">
        <v-img
          alt="Katalid Logo"
          href="http://localhost:8080/"
          class="shrink mr-2"
          contain
          src="@/../static/katalid-logo.svg"
          transition="scale-transition"
          width="80"
        />
      </div>
        <v-spacer></v-spacer>
          <v-toolbar-items class=" hidden-md-and-down">
            <v-btn class="white--text"
            v-for="(menu,index) of menus"
            :key="index" 
            text 
            :href="menu.url" 
            transition="slide-x-transition">{{menu.titulo}}</v-btn>
        </v-toolbar-items>
        <v-app-bar-nav-icon class="hidden-md-and-up white"
         @click ="visibilidade = !visibilidade"></v-app-bar-nav-icon>
    </v-toolbar>
  </v-container>

</template>

<script>

export default {
    props: ['Navbar'],
    data() {
      return {
        visibilidade: false,
         menus: [
        {
          titulo: 'Serviços',
          url:    '#servicos'
        },
        {
          titulo: 'Sobre Nós',
          url:    '#sobrenos'
        },
        {
          titulo: 'Por que Nós?',
          url:    '#porquenos'
        },
        {
          titulo: 'Contato',
          url:    '#contato'
        }
      ]
      }
    }
}
</script>