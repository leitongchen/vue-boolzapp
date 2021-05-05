const app = new Vue({
    el: "#app",
    data: {
        dataList: dataList,
        activeChat: {},

        userNewMessageInput: "",
        userNewMessage: {},

        userSearch: "",
    },
    computed: {
        userLastAccess() {
            if(!this.activeChat.messages) {
                return "";
            }

            const receivedMsg = this.activeChat.messages.filter((message) => message.status === 'received');

            const lastMsgDate = receivedMsg[receivedMsg.length -1].date;

            return this.obtainTime(lastMsgDate)
        }

    },
    methods: {
        chatOnClick(selectedContact) {
            this.activeChat = {
                ...selectedContact
            }
        },
        statusMsg(message) {
            if (message.status === 'received') {
                return "received-message"
            } else if (message.status === 'sent') {
                return "sent-message"
            }
        },
        obtainTime(dateString) {
            const date = moment(dateString, "DD/MM/YYYY HH:mm:ss");

            return date.format("HH:mm")
        },
        selectActiveChat(selectedContact){
            if (selectedContact.id === this.activeChat.id) {
                return true
            }
            return false;
        },
        addNewUserMessage(userInput) {
            if (!userInput) {
                return ""
            }
            const newMessage = {
                date: moment().format("DD/MM/YYYY HH:mm:ss"),
                text: userInput,
                status: 'sent'
            }
            this.userNewMessageInput = "";
            return this.activeChat.messages.push(newMessage);
        }
    },
    mounted() {
        this.activeChat = {
            ...this.dataList[0]
        }
    }

}); 