const { createApp } = Vue;

createApp({
    data() {
        return {
            email:'',
        };
    },
    methods: {
        getEmailFromApi() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').
            then((response) => {
                const serverData = response.data;
                this.email = serverData.response;
            });
        }
    },
    mounted() {
        this.getEmailFromApi();
    }
}).mount('#app');
