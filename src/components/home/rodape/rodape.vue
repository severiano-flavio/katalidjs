<template>
    <nav class="header-container navMenu">
    <div class="containerNav" id="nav">
      <div class="logo-header">
        <a href="">
          <img src="" alt="">
        </a>
      </div>
      <div class="guia">
        <a href="#contato">Serviços</a>
      </div>
      <div class="guia">
        <a href="">Sobre Nós</a>
      </div>
      <div class="guia">
        <a href="">Por que Nós?</a>
      </div>
      <div class="guia">
        <a href="">Contato</a>
      </div>
    </div>
    <div class="mobile">
      <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu">
      <label for="openSidebarMenu" class="sidebarIconToggle ">
        <div class="spinner diagonal part-1 "></div>
        <div class="spinner horizontal "></div>
        <div class="spinner diagonal  part-2"></div>
      </label>
      <div id="sidebarMenu">
        <div class="sidebar-content">
          <div id='content'>
            <a class="menu-option" onclick="closeSidebar()" href="">Serviços</a>
            <a class="menu-option" onclick="closeSidebar()" href="">Sobre Nós</a>
            <a class="menu-option" onclick="closeSidebar()" href="#contato">Por que Nós?</a>
            <a class="menu-option" onclick="closeSidebar()" href="#contato">Contato</a>
          <div />
          </div>
        </div>
  </nav>
</template>

<script>
export default {
    propos: ['rodape'],

}
</script>

<style scoped>


</style>