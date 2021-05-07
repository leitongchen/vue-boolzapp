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

        userSearch: "",

        currentMessageIndex: null,
        notifications: false,
    },
    computed: {
        // stabilisce l'orario dell'ultimo accesso
        userLastAccess() {
            if (this.activeChat.messages === undefined) {
                return this.timeNow;
            }

            const receivedMsg = this.activeChat.messages.filter((message) => message.status === 'received');

            if (receivedMsg.length == 0) {
                return this.timeNow;
            }
            const lastMsgDate = receivedMsg[receivedMsg.length - 1].date;

            return this.obtainTime(lastMsgDate);
        },
        // filtrare i contatti in base alla ricerca userSearch
        filteredDataList() {
            if (this.userSearch === "") {
                return this.dataList;
            } else {

                return this.dataList.filter(element => {

                    let nameLower = element.name.toLowerCase();

                    return nameLower.startsWith(this.userSearch.toLowerCase());
                });
            }
        },
    },
    methods: {
        chatOnClick(selectedContact) {
            this.activeChat = selectedContact;
        },

        // inserisce classe in html per aspetto grafico
        getStatusMsg(message) {
            return {
                received: message.status === "received",
                sent: message.status === "sent"
            }
        },

        // trasforma stringa di una data in un dato
        obtainTime(dateString) {

            if (!dateString) {
                return "";
            }

            const date = moment(dateString, "DD/MM/YYYY HH:mm:ss");

            return date.format("HH:mm");
        },

        // trova chat selezionata usando id
        selectActiveChat(selectedContact) {
            if (selectedContact.id === this.activeChat.id) {
                return true;
            }
        },

        // trova l'ultimo messaggio di una conversazione
        lastMessageChat(arrayMessages) {
            if (arrayMessages.length === 0) {
                return { text: "There are no messages" };
            }
            const lastMsg = arrayMessages[arrayMessages.length - 1];
            return lastMsg;
        },

        // trova l'ORA dell'ultimo messaggio di una conversazione
        lastMessageTime(arrayMessages) {

            const lastMsg = this.lastMessageChat(arrayMessages);

            if (lastMsg === 0) {
                return "";
            }
            return this.obtainTime(lastMsg.date);
        },

        // crea nuovo messaggio all'input+enter dell'utente
        // all'interno settato un timer che dopo 2 secondi stampa una risposta
        addNewUserMessage() {
            if (!this.userNewMessageInput) {
                return "";
            }

            const newMessage = {
                date: moment().format("DD/MM/YYYY HH:mm:ss"),
                text: this.userNewMessageInput,
                status: 'sent',
                active: false,
            };

            const currentUser = this.activeChat;

            currentUser.messages.push(newMessage);
            this.userNewMessageInput = "";

            this.scrollToBottom();

            // setTimeout(this.aiAnswer, 2000)
            setTimeout(() => {
                const aiResponse = {
                    date: moment().format("DD/MM/YYYY HH:mm:ss"),
                    text: this.aiAnswerGen(),
                    status: 'received',
                    active: false,
                };

                currentUser.messages.push(aiResponse)
                this.scrollToBottom();

            }, 2000);

        },

        // genera una risposta al messaggio dell'utente
        aiAnswerGen() {

            const randomNum = this.randomNumber(0, this.aiAnswersList.length - 1);
            return this.aiAnswersList[randomNum];
        },

        scrollToBottom() {

            this.$nextTick(() => {
                const elementHtml = this.$refs.containerToScroll;
    
                elementHtml.scrollTop = elementHtml.scrollHeight

            })
        },

        onArrowClick(message, event) {
            // this.currentMessageIndex = indexOfMessage;

            // this.activeChat.messages.forEach((message, index) => {
            //     if(index === indexOfMessageClicked) {
            //         message.active = true;
            //     }
            // })
            this.$set(message, 'showPopup', true);
            event.currentTarget.focus();
        },

        onFocusLost(message) {
            this.$set(message, 'showPopup', false)
        },
        /*
        onPopupClick(message) {
            message.showPopup = false;
        },
        */
        deleteMessage(msgIndex) {
            // this.activeChat.messages.splice(index, 1)
            this.activeChat.messages[msgIndex].text = "You deleted this message"
            
        },



        notificationStatus() {
            return this.notifications = !this.notifications;
        },



        clearInput() {
            this.userSearch = "";
        },

        randomNumber(min, max) {
            const minMax = max - min;

            return Math.ceil(Math.random() * minMax) - 1;
        }
    },
    mounted() {
        this.activeChat = {
            ...this.dataList[0]
        };

        this.timeNow = moment().format("HH:mm");

        
        //this.activeChat.messages.forEach(message => message.active = false)

    }

}); 