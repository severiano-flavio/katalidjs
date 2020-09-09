<template>
    <div style="z-index: 1;">
        <transition name="sliderNav">
            <botao
            color="red"
            v-show="abas.abaHome"
            click="home"
            style="left:50px; top: -5px;"
            rotulo="Home"
            />
        </transition>
        <transition name="sliderNav">
            <botao
            color="blue"
            v-show="abas.abaServicos"
            click="servicos"
            style="left:135px; top: -5px;"
            rotulo="Serviços"
            />
        </transition>

        <Form /> <!-- modal do formulário de contato -->

    </div>
</template>

<script>

import Contato from "./../contato/contato";
import Botao from "./../../shared/botoes";
import Form from "./../../shared/formulario";

export default {
    components: {
        Botao,
        Form
    },
   data() {
    return {
        Contato,
        abas: {
            abaHome: false,
            abaServicos: false
        }
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll: function () {
        let scroll = window.scrollY;
        this.abas.abaHome = false;
        if (scroll > 500) {
            this.abas.abaHome = true;
        }
        this.abas.Servicos = false;
        if(scroll > 1200) {
            this.abas.abaServicos = true;
        } else {
            this.abas.abaServicos = false;
        }
    }
  }
}
</script>
<style scoped>

.sliderNav-enter-active, .sliderNav-leave-active {
    transition: opacity .4s ease-in-out, transform .4s ease-in-out;
}
.sliderNav-enter, .sliderNav-leave-to {
    opacity: 0;
}

.sliderNav-enter-active {
    transform:translateX(600px);
}

.sliderNav-enter-to {
    transform: translateX(-6.5px);
}

.sliderNav-leave-active {
    transform: translateX(0px);
}

.sliderNav-leave-to {
    transform: translateX(600px);
}

</style>