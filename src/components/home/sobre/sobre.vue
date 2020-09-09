<template>
    <v-main fluid>
        <v-parallax src='@/../static/notebook-background.jpg'>
            <v-row
            justify="center" class="mt-12">
            <a name="sobrenos" class="text-decoration-none" />
                <h1>{{titulo}}</h1>
            </v-row>
            <v-row
            justify="center"
            align="center">
            <v-col cols="8">
                <p>{{texto}}</p>
            </v-col>
            </v-row>
            <v-row
            align="center"
            justify="center">
            <v-btn outlined v-if="!hover" color="#f540e7" @mouseover="hover = true">Faça Seu Orçamento</v-btn>
            <v-btn v-else color="#f540e7" @mouseleave="hover = false" @click="clicado()">Faça Seu Orçamento</v-btn>
            </v-row>
        </v-parallax>
    </v-main>
</template>

<script>


export default {

    props: ['sobreNos'],
    data () {
        return {
            titulo: 'Sobre Nós',
            texto: 'Katalid é uma equipe de desenvolvimento de websites e aplicações para gestão da sua empresa ou aplicações mobile. O desenvolvimento dos nossos produtos é feito com bastante análise e estudo para suprir exatamente o que o cliente quer de forma bastante acessível e com baixa curva de aprendizado. Faça o seu orçamento com a gente para comprovar a nossa capacidade de te entregar algo além das suas expectativas e tenha mais sucesso com uma automação da sua demanda.',
            hover: false
        }
    },

    methods: {
        clicado: function() { alert('Fui clicado'); }
    }

}
</script>

<style scoped>

.botao-estilo:hover:before,
.botao-estilo:focus:before {
    background-color: #f540e7 !important;
}

</style>