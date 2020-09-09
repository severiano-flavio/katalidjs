<template>
        <v-parallax src='@/../static/katalid-background.jpg' class="mt-n6">
            <v-row
            align="center"
            justify="center">
                <v-col 
                class="text-center"
                cols="12">
                    <h1 v-text="titulo" />
                    <h4 v-text="subtitulo" />
                </v-col>
        </v-row>
        </v-parallax>

</template>

<script>

export default {

    props: ['banner'],
    data () {
    return {
        titulo: 'Desenvolva o seu site com o Katalid',
        subtitulo: 'Nosso limite está na sua imaginação'
    }

    }
}
</script>
<style scoped>
    h1 {
        font-size: 3rem;
        text-shadow: 3px 4px 7px black;
    }
    h4 {
        font-size: 1.5rem;
        text-shadow: 3px 4px 7px black;
    }
</style>
