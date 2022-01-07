let store = {

    _variable: {
        postPage: {
            postData: [
                { id: 1, message: 'Это мое первое сообщение!!!' },
                { id: 2, message: 'Привет всем!!!' },
                { id: 3, message: 'Как дела?!' }
            ],

            postTextPage: "",

        },

        dialogsPage: {
            dialogsItemsData: [
                { id: "1", name: "Илья" },
                { id: "2", name: "Михаил" },
                { id: "3", name: "Виктор" },
                { id: "4", name: "Евгений" },
                { id: "5", name: "Иван" },
            ],

            messagesData: [
                { id: 1, message: "Hello, my frends" },
                { id: 2, message: "Yo" },
                { id: 3, message: "How are you?" },
                { id: 4, message: "I`m fine!" },
            ],

            postMessagePage: "",

        },

        sidebar: {
            avaData: [
                { id: 1, name: "Илья", ava: <img src='https://sun9-69.userapi.com/impg/7GleHWdfHiLIlV-GxPx5cyGBYAhcCywPu1_gDg/hFCPgHBGGno.jpg?size=1080x1080&quality=96&sign=a98c39460439a1f18d7a2db39ebed4d2&c_uniq_tag=o4vfwNGjSuhMphSrNgI4Vhhv1Z5RmX5q8NM0ZMj_nSI&type=album' /> },
                { id: 2, name: "Михаил", ava: <img src='https://sun9-69.userapi.com/impg/7GleHWdfHiLIlV-GxPx5cyGBYAhcCywPu1_gDg/hFCPgHBGGno.jpg?size=1080x1080&quality=96&sign=a98c39460439a1f18d7a2db39ebed4d2&c_uniq_tag=o4vfwNGjSuhMphSrNgI4Vhhv1Z5RmX5q8NM0ZMj_nSI&type=album' /> },
                { id: 3, name: "Виктор", ava: <img src='https://sun9-69.userapi.com/impg/7GleHWdfHiLIlV-GxPx5cyGBYAhcCywPu1_gDg/hFCPgHBGGno.jpg?size=1080x1080&quality=96&sign=a98c39460439a1f18d7a2db39ebed4d2&c_uniq_tag=o4vfwNGjSuhMphSrNgI4Vhhv1Z5RmX5q8NM0ZMj_nSI&type=album' /> },
                { id: 4, name: "Евгений", ava: <img src='https://sun9-69.userapi.com/impg/7GleHWdfHiLIlV-GxPx5cyGBYAhcCywPu1_gDg/hFCPgHBGGno.jpg?size=1080x1080&quality=96&sign=a98c39460439a1f18d7a2db39ebed4d2&c_uniq_tag=o4vfwNGjSuhMphSrNgI4Vhhv1Z5RmX5q8NM0ZMj_nSI&type=album' /> },
                { id: 5, name: "Иван", ava: <img src='https://sun9-69.userapi.com/impg/7GleHWdfHiLIlV-GxPx5cyGBYAhcCywPu1_gDg/hFCPgHBGGno.jpg?size=1080x1080&quality=96&sign=a98c39460439a1f18d7a2db39ebed4d2&c_uniq_tag=o4vfwNGjSuhMphSrNgI4Vhhv1Z5RmX5q8NM0ZMj_nSI&type=album' /> },
            ]
        }
    },
    getVariable() {
        return this._variable;
    },
    _callSubscriber() {
    },

    dispatch(action) {
        if (action.type === "ADD-POST") {

            let Post = {
                id: 5,
                message: this._variable.postPage.postTextPage,
            };
            this._variable.postPage.postData.push(Post);
            this._variable.postPage.postTextPage = "";
            this._callSubscriber(this._variable);

        } else if (action.type === "UPDATE-NEW-POST-TEXT") {

            this._variable.postPage.postTextPage = action.newText;
            this._callSubscriber(this._variable);

        } else if (action.type === "ADD-MESSAGE") {

            let Message = {
                id: 6,
                message: this._variable.dialogsPage.postMessagePage,
            };
            this._variable.dialogsPage.messagesData.push(Message);
            this._variable.dialogsPage.postMessagePage = "";
            this._callSubscriber(this._variable);

        } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {

            this._variable.dialogsPage.postMessagePage = action.newMessage;
            this._callSubscriber(this._variable);

        }
    },



    subscribe(observer) {
        this._callSubscriber = observer;
    },

}

export default store;
