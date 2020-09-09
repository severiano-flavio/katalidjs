<template>
<div>
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
                                :label="nome.inputNome" />
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

export default {
    data() {
        return {
            form: [
                {
                    inputNome: 'Nome',
                },
                {
                    inputNome: 'E-mail',
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

</style>