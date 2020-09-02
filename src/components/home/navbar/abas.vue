<template>
    <div style="z-index: 1;">
        <transition name="sliderNav">
            <v-btn
            fixed
            color="red white--text"
            v-show="abas.abaHome"
            @click="scrollHome()"
            style="left:50px; top: -5px;"
            >Home</v-btn>
        </transition>
        <transition name="sliderNav">
            <v-btn
            fixed
            color="blue white--text"
            @click="scrollServicos()"
            v-show="abas.abaServicos"
            style="left:135px; top: -5px;">Serviços</v-btn>
        </transition>    
        <v-dialog max-width="600px">
            <template v-slot:activator="{ on, attrs }">

                <v-btn
                fixed
                color="blue white--text"
                style="right:10px; bottom: -5px;"
                v-bind="attrs"
                v-on="on">Contato</v-btn>

            </template>
            <v-card>
                <v-main style=" background-color:#02183f">
                    <v-row align="center" justify="center">
                        <v-col cols="8">
                            <v-form>
                                <v-text-field
                                outlined
                                dark
                                color="purple lighten-1"
                                class="corInput"
                                v-for="(nome, index) of form"
                                :key="index"
                                :label="nome.inputNome"></v-text-field>
                                <v-textarea
                                outlined
                                dark
                                color="purple lighten-1"
                                class="corInput"
                                label="Mensagem"></v-textarea>
                                <v-row align="center" justify="center">
                                    <v-col cols="8" align="center">
                                        <v-btn class="ml-5 success" width="5vw">Enviar</v-btn>
                                        <v-btn class="ml-5" width="5vw">Limpar</v-btn>
                                    </v-col>
                                    
                                </v-row>
                            </v-form>
                        </v-col>
                    </v-row>
                </v-main>
            </v-card>
      </v-dialog>
    </div>
</template>

<script>

import Contato from "./../contato/contato"

export default {
   data() {
    return {
        Contato,
        abas: {
            abaHome: false,
            abaServicos: false
        },
         form: [
            {
                inputNome: 'Nome'
            },
            {
                inputNome: 'E-mail'
            },
            {
                inputNome: 'Assunto'
            }
        ]

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
    },
    scrollHome () {
    window.scrollTo(0,0);
    },
    scrollServicos () {
    window.scrollTo(0,650);
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