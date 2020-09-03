<template>
    <v-main>
            <v-row fluid>
                <v-col
                align="center">
                <a name="porquenos" class="text-decoration-none" />
                    <h1>{{titulo}}</h1>
                </v-col>   
            </v-row>
            <v-row
             align="center" justify="center">
                <v-col cols="11">
                    <p>{{subtitulo}}</p>
                </v-col>    
            </v-row>
            <v-row
            justify="center"
            align="center"
            cols="12"
            fluid
            >
                <v-col cols="7">
                    <v-row class="justify-space-around" md="4">
                        <v-card 
                        flat
                        v-for="(card, index) of cards"
                        :key="index"
                        width="23vw"
                        class="mb-5">
                            <h4 align="center">{{card.cardTitulo}}</h4>
                            <p>{{card.cardTexto}}</p>
                        </v-card>
                    </v-row>
                </v-col>
                <v-col cols="3">
                    <v-card>
                        <v-img src="@/../static/Por-que-nos.jpg"></v-img>
                    </v-card>
                </v-col>
            </v-row>
    </v-main>
</template>

<script>


export default {

    props: ['porqueNos'],
    data () {
        return {
            titulo: 'Porque Nós?',
            subtitulo: 'Benefícios que você ganha como cliente',
            cards: [
                {
                    cardTitulo: 'Preço Amigável',
                    cardTexto: 'Trabalhamos utilizando as ferramentas mais atuais do mercado e assim desenvolvendo as aplicações de forma rápida. Logo, reduzindo o custo.'
                },
                {
                    cardTitulo: 'Acessibilidade',
                    cardTexto: 'Criamos layouts que garantem uma excelente experiência de navegação para os usuários, com uma baixa curva de aprendizado.'
                },
                {
                    cardTitulo: 'Suporte Técnico',
                    cardTexto: 'Oferecemos todo o suporte técnico afim de solucionar qualquer problema que ocorra na experiência da aplicação. Para que a experiência não seja frustrante.'
                },
                {
                    cardTitulo: 'Estatísticas',
                    cardTexto: 'Para acompanhamento do seu projeto, incluiremos ferramentas para análise dos acessos do site. Assim, você poderá acompanhar o crescimento do projeto.'
                }
            ]
        }
    },
}
</script>
