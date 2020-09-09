<template> 
    <v-container
    fluid
    fill-height
    align="center"
    style="max-height: 650px; vertical-align: middle;"
    class="altura">
        <v-row
        justify="center">  
        <v-col class="text-center mb-16" cols="12">
            <a name="servicos" class="text-decoration-none" />
            <h1>{{titulo}}</h1>
        </v-col>
        <v-col cols="2" sm="3" lg="2" v-for="(item, index) of listaServicos" :key="index">
            <v-card flat min-height="50" align="center">
                <v-img :src="item.icon" aspect-ratio="1" width="80px"></v-img>
                <h3 class="text-center subheading mb-2">{{item.title}}</h3>
                <p class="text-caption text-center body-2">{{item.content}}</p>
            </v-card>
        </v-col>
        </v-row>
    </v-container>
    
</template>

<script>
import { mapGetters } from 'vuex'


export default {

    props: ['servicos'],
    data () {
    return {
        titulo: 'Serviços',
    }
    },
    mounted() {
        this.$store.dispatch('loadPosts')
    },
    computed: {
        ...mapGetters([
            'listaServicos'
        ])
    }
}
</script>

<style>

.altura {
    margin: 0 auto;
}

.text-decoration-none {
    text-decoration: none;
    cursor: default !important;
    color: inherit !important;
}

</style>
