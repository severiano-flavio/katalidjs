<template>
  <v-btn fixed @click="scrollHome()" :color="`${color} white--text`">{{rotulo}}</v-btn>
</template>

<script>
export default {
    props: {
        click: {
            type: String
        },
        color: {
            required: true,
            type: String
        },
        rotulo: {
            required: true,
            type: String,
        }
    },

    methods: {
       scrollHome () {
           if (this.click == "home") {
                   window.scrollTo(0,0);
           } else if (this.click == "servicos") {
               window.scrollTo(0,650);
           }
    },
    
    }

}
</script>