const { createApp } = Vue;

createApp({
    data() {
        return {
            listEmail: [],
            email:'',
        };
    },
    methods: {

        getEmailFromApi() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').
            then((response) => {
                const serverData = response.data;
                this.email = serverData.response;
                this.listEmail.push(this.email)
                console.log(listEmail)
            });
        }
    },
    mounted() {
        this.getEmailFromApi();
    }
}).mount('#app');
