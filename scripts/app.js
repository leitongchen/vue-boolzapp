const app = new Vue({
    el: "#app",
    data: {
        dataList: dataList,
        activeChat: {},

        // filteredList: [],

        userNewMessageInput: "",
        userNewMessage: {},

        timeNow: null,

        aiAnswersList: aiAnswersList,
        aiAnswerString: "",

        userSearch: "",
    },
    computed: {
        userLastAccess() {
            if(this.activeChat.messages === undefined) {
                return this.timeNow;
            } 

            const receivedMsg = this.activeChat.messages.filter((message) => message.status === 'received');

            if (receivedMsg.length == 0) {
                return this.timeNow;
            }
            const lastMsgDate = receivedMsg[receivedMsg.length -1].date;

            return this.obtainTime(lastMsgDate)
        },
        // filtrare i contatti in base alla ricerca
        filteredDataList() {
            if (this.userSearch === "") {
                return this.dataList;
            } else {

                return this.dataList.filter(element => {

                    let nameLower = element.name.toLowerCase();

                    return nameLower.startsWith(this.userSearch);
                });
            }
        },

    },
    methods: {
        chatOnClick(selectedContact) {
            this.activeChat = {
                ...selectedContact
            }
        },
        // inserisce classe in html per aspetto grafico
        statusMsg(message) {
            if (message.status === 'received') {
                return "received-message"
            } else if (message.status === 'sent') {
                return "sent-message"
            }
        },

        // trasforma stringa di una data in un dato
        obtainTime(dateString) {
            
            if(!dateString) {
                return ""
            }

            const date = moment(dateString, "DD/MM/YYYY HH:mm:ss");

            return date.format("HH:mm")
        },
        // trova chat selezionata usando id
        selectActiveChat(selectedContact){
            if (selectedContact.id === this.activeChat.id) {
                return true
            }
        },
        
        // trova l'ultimo messaggio di una conversazione
        lastMessageChat(arrayMessages) {
            if (arrayMessages == 0) {
                return "There are no messages"
            }
            const lastMsg = arrayMessages[arrayMessages.length -1];
            return lastMsg;
        },
        // trova l'ORA dell'ultimo messaggio di una conversazione
        lastMessageTime(arrayMessages) {

            const lastMsg = this.lastMessageChat(arrayMessages);

            if (lastMsg === 0) {
                return ""
            }
            
            return this.obtainTime(lastMsg.date)
        },
       
        // crea nuovo messaggio all'input+enter dell'utente
        // all'interno settato un timer che dopo 2 secondi stampa una risposta
        addNewUserMessage() {
            if (!this.userNewMessageInput) {
                return ""
            }

            setTimeout(this.aiAnswer, 2000)

            const newMessage = {
                date: moment().format("DD/MM/YYYY HH:mm:ss"),
                text: this.userNewMessageInput,
                status: 'sent'
            }
            this.userNewMessageInput = "";
            return this.activeChat.messages.push(newMessage);
        },

        // genera una risposta al messaggio dell'utente
        aiAnswer() {
            
            let elementList = [];
            this.aiAnswersList.forEach(element => {
                elementList.push(element)
            })
            // numero random per indice array di risposte
            const randomNum = this.randomNumber(0, elementList.length-1)

            this.aiAnswerString = elementList[randomNum];

            console.log(this.aiAnswerString)
            this.addAiAnswer()
            return elementList[randomNum]
        },
        // aggiungere risposta AI nei data dentro activeChat
        addAiAnswer() {
            const newMessage = {
                date: moment().format("DD/MM/YYYY HH:mm:ss"),
                text: this.aiAnswerString,
                status: 'received'
            }
            return this.activeChat.messages.push(newMessage);
        },

        randomNumber(min, max) {
            const minMax = max - min;

            return Math.ceil(Math.random() * minMax) - 1;
        }
    },
    mounted() {
        this.activeChat = {
            ...this.dataList[0]
        }

        this.timeNow = moment().format("HH:mm")
    }

}); 