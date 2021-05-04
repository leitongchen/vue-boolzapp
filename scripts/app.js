const app = new Vue({
    el: "#app",
    data: {
        dataList: dataList,

        activeChat: {},
    },
    methods: {
        chatOnClick(selectedContact) {
            this.activeChat = {
                ...selectedContact
            }
        }
    },

}); 