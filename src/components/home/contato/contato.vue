<template>
    <v-main style=" background-color:#02183f" >
        <h1 align="center" style="color: white;">{{titulo}}</h1>
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
                            <v-btn class="ml-5" width="15vw">Enviar</v-btn>
                            <v-btn class="ml-5" width="15vw">Limpar</v-btn>
                        </v-col>
                        
                    </v-row>
                </v-form>
        </v-col>
        </v-row>
    </v-main>
</template>

<script>


export default {

    props: ['contato'],
    data () {
    return {
        titulo: 'Contato',
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
    }
}
</script>

<style>

.theme--dark.v-label {
    color: inherit;
}
.theme--dark.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state) > .v-input__control > .v-input__slot fieldset {
    color: inherit;
}

.corInput input {
    color: #E1BEE7;
}
</style>
