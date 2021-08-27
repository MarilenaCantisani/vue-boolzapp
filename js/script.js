console.log("Js ok", Vue)

//// Configuration to activate "Vue" on the web inspector
Vue.config.devtools = true;

//// Variable to activate "Vue"
const app = new Vue({
    el: "#root",
    data: {
        user: {
            name: 'Nome Utente',
            avatar: '_io',
        },
        contacts,
    },
});




