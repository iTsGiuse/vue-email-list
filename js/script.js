const { createApp } = Vue;

createApp({
    data() {
        return {
            listEmail: [],
            email:'',
            nEmail: 9,
        };
    },
    methods: {

        getEmailFromApi() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').
            then((response) => {
                const serverData = response.data;
                this.email = serverData.response;
                this.listEmail.push(this.email);
            });
        },

        generaDieciMail(nEmail){
            for(let i = 0; i<this.nEmail; i++){
            this.getEmailFromApi();
            }
        }

    },

    mounted() {
        this.generaDieciMail();
        this.getEmailFromApi();
    }
}).mount('#app');
