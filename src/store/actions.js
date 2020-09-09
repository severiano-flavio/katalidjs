import axios from 'axios';

const actions = {
    loadPosts({commit}) {
        axios
            .get('http://localhost/wp-json/api/v1/servicos')
            .then(data => {
                let playload = data.data;
                commit('set_posts', playload);
            })
            .catch(err => {
                console.log(err);
            })
    }      
}

export {actions};

