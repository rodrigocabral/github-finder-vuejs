new Vue({
    el: '#app',
    data: {
        items: [],
        term: '',
        acertapidata: '',
        pesquisando: false
    },
    computed: {
        hasResult(){
            return this.acertapidata;
        }
    },
    methods: {
        findUser(){
            if(this.term){
                let query = `https://api.github.com/search/users?q=${this.term}&per_page=5`
                fetch(query)
                .then(
                    (response) => {
                        
                        response.json().then(data => this.items = data.items);
                    }
                )
                .catch(function(err) {
                    console.log('Fetch Error :-S', err);
                });
            }
        }
    }
});