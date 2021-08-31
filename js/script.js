console.log("Js ok", Vue)

//// Configuration to activate "Vue" on the web inspector
Vue.config.devtools = true;
//// Variable to activate "Vue"
const app = new Vue({
    el: "#root",
    data: {
        currentUser: 0,
        newMessage: "",
        searchTerm: "",
        isInputVisible: false,

        user: {
            name: 'Nome Utente',
            avatar: '_io',
        },
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent',
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent',
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received',
                    },
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent',
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'received',
                    },
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received',
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received',
                    },
                ],
            },
            {
                name: 'Luisa',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                    },
                ],
            },
        ]
    },
    methods: {
        //* Function that changes the number of the current user 
        changeCurrentUser(index) {
            this.currentUser = index;
        },
        //* Function to report the date of last message
        printLastAccess() {
            const messages = this.contacts[this.currentUser].messages;
            return lastMessage = messages[messages.length - 1].date;
        },
        //* Function that creates the template of new messages
        addNewMessages(message, status) {
            //Build new messsages template 
            const textNewMessage = {
                date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                message,
                status
            };
            //Add the new message to the message array
            this.contacts[this.currentUser].messages.push(textNewMessage);
        },
        //* Function that prints new messages 
        printNewMessages() {
            //Check that the new message is inserted correctly
            if (!this.newMessage) return;
            //Print the new message
            this.addNewMessages(this.newMessage, "sent");
            this.newMessage = "";
            //Add an automatic reply to new messages
            setTimeout(() => {
                this.addNewMessages("ok", "received");
            }, 1000);
        },
        //* Function for filtering contacts 
        showContact(contact) {
            //Check if the search bar is empty and display all contacts
            if (!this.searchTerm) return true;
            //Check if the search term is present among the contacts 
            contact = contact.toLowerCase();
            return contact.includes(this.searchTerm.toLowerCase());
        },



    }
});




