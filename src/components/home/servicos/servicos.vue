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
        <v-col cols="2" v-for="(servico, index) of cardServicos" :key="index">
            <v-card flat min-height="50"> 
                <h3 class="text-center subheading mb-2">{{servico.titulo}}</h3>
                <p class="text-caption text-center body-2">{{servico.descricao}}</p>
            </v-card>
        </v-col>
        </v-row>
    </v-container>
    
</template>

<script>


export default {

    props: ['servicos'],
    data () {
    return {
        titulo: 'Serviços',
        cardServicos: [
            {
                titulo: 'Desenvolvimento de Ferramentas',
                descricao: 'Desenvolvemos ferramentas que auxiliarão na gestão de negócios. Facilitando a troca de informações do cliente para a empresa.'
            },
            {
                titulo: 'Desenvolvimento de Site Wordpress',
                descricao: 'Criamos sites acessíveis, modernos e elegantes com base no Wordpress para projetos pequenos.'
            },
            {
                titulo: 'Desenvolvimento Web',
                descricao: 'Desenvolvemos sites confortáveis de navegar, utilizando linguagem FullStack e WordPress.'
            },
            {
                titulo: 'Desenvolvimento de Aplicativos',
                descricao: 'Desenvolvemos aplicativos que facilitam a realização de tarefas para os usuários.'
            }
        ]

    }
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
