console.log("Js ok", Vue)

Vue.config.devtools = true;

const app = new Vue({
    el: "#root",
    data: {
        user: {
            name: 'Nome Utente',
            avatar: '_io',
        },
        contacts,
    }
})