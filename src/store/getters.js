var getters = {
    listaServicos: state => state.posts.filter((item) => {
        return item.type == "type-servico";
    }),
    listaPortifolio: state => state.posts.filter((item) => {
        return item.type == "type-portifolio";
    })
}

export {getters};