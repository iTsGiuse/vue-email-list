const { createApp } = Vue;

createApp({
    data() {
        return {
            listEmail: [],
            email:'',
            nEmail: 9,
            listEmailBonus: [],
            emailBonus:'',
            emailGenerate: false,
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
        },

        getEmailFromApiBonus() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').
            then((response) => {
                const serverData = response.data;
                this.emailBonus = serverData.response;
                this.listEmailBonus.push(this.emailBonus);
                if (this.listEmailBonus.length === this.nEmail) {
                    this.emailGenerate = true; 
                }
            });
        },

        generaDieciMailBonus(nEmail) {
            for (let i = 0; i < this.nEmail; i++) {
                this.getEmailFromApiBonus();
            }
        }
    },

    mounted() {
        this.generaDieciMail();
        this.getEmailFromApi();
        this.generaDieciMailBonus();
        this.getEmailFromApiBonus();
    },

}).mount('#app');
